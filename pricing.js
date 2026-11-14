(function (global) {
  'use strict';
  const prices = { print: [270000, 199000], premium: [300000, 230000] };
  const labels = { print: 'Bản in', premium: 'Bản cao cấp' };
  const money = n => n.toLocaleString('vi-VN') + 'đ';
  const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function quote(items) {
    const quantity = items.reduce((n, i) => n + i.quantity, 0);
    let subtotal = 0, retail = 0;
    const lines = items.map(i => {
      if (!prices[i.version] || !Number.isInteger(i.quantity) || i.quantity < 1 || i.quantity > 999) throw Error('Invalid cart');
      const unitPrice = prices[i.version][quantity >= 5 ? 1 : 0];
      const lineTotal = unitPrice * i.quantity;
      subtotal += lineTotal; retail += prices[i.version][0] * i.quantity;
      return {...i, unitPrice, lineTotal};
    });
    return {items: lines, quantity, subtotal, savings: retail-subtotal, tier: quantity >= 5 ? 'team' : 'individual'};
  }
  if (typeof module !== 'undefined') module.exports = { quote };
  if (!global.document) return;
  const cart = {items: [], utm: {}, quote() {return quote(this.items);},
    track(event, data={}) { if(typeof global.fbq === 'function') global.fbq('track',event,data); },
    add(item) {this.items.push(item); this.render(); this.track('AddToCart',{content_ids:[item.province],content_type:'product',currency:'VND',value:quote([item]).subtotal});},
    clear() {this.items=[];this.render();},
    render() {
      const el=document.getElementById('cart-summary'); if(!el)return;
      const q=this.quote();
      el.innerHTML='<h3>GIỎ HÀNG · '+q.quantity+' áo</h3>'+q.items.map((i,index)=>`<div class="cart-line"><strong>${escape(i.province)} · Size ${escape(i.size)}</strong><span>${escape(i.design?.printName || '')} · Số ${escape(i.design?.printNumber || '')}</span><label>Phiên bản <select data-index="${index}" data-field="version">${Object.keys(labels).map(v=>`<option value="${v}" ${v===i.version?'selected':''}>${labels[v]}</option>`).join('')}</select></label><label>Số lượng <input aria-label="Số lượng ${escape(i.province)}" type="number" min="1" max="999" step="1" value="${i.quantity}" data-index="${index}" data-field="quantity"></label><span>${money(i.unitPrice)}/áo · Thành tiền: <b>${money(i.lineTotal)}</b></span><button type="button" data-remove="${index}">Xóa sản phẩm</button></div>`).join('')+`<div class="cart-totals"><p>${q.quantity===0?'Chưa có áo trong giỏ.':q.quantity<5?'🎁 Thêm '+(5-q.quantity)+' áo nữa để nhận giá đội nhóm!':'🎉 Chúc mừng! Đơn hàng của bạn đã được áp dụng giá đội nhóm.'}</p><p>${q.tier==='team'?'Giá đội nhóm':'Giá cá nhân'} · Tổng: ${q.quantity} áo</p><strong>Tạm tính: ${money(q.subtotal)}</strong><p>Tiết kiệm: ${money(q.savings)}</p></div>`;
      el.onchange=e=>{const i=this.items[e.target.dataset.index];if(!i)return;const field=e.target.dataset.field; const value=field==='quantity'?Number(e.target.value):e.target.value;if(field==='quantity'&&(!Number.isInteger(value)||value<1||value>999)){this.render();return;}if(field==='version'&&!prices[value])return;i[field]=value;delete document.getElementById('order-form').dataset.pendingReference;this.render();};
      el.onclick=e=>{const index=e.target.dataset.remove;if(index!==undefined){this.items.splice(Number(index),1);delete document.getElementById('order-form').dataset.pendingReference;this.render();}};
    },
    async confirm(url, reference, onProgress) {
      const startedAt = Date.now();
      for(let attempt=0;attempt<8;attempt++) {
        const received=await new Promise(resolve=>{
          const callback='dnyStatus'+Date.now()+attempt, script=document.createElement('script');
          let timer; const done=value=>{clearTimeout(timer);delete global[callback];script.remove();resolve(value);};
          global[callback]=data=>done(data.ok===true&&data.orderReference===reference);
          script.onerror=()=>done(false);timer=setTimeout(()=>done(false),5000);
          script.src=url+'?action=orderStatus&reference='+encodeURIComponent(reference)+'&callback='+callback;
          document.head.appendChild(script);
        });
        if(received)return;
        if(onProgress)onProgress(Math.round((Date.now()-startedAt)/1000));
        await new Promise(r=>setTimeout(r,1500));
      }
      throw Error('Order receipt unconfirmed');
    }
  };
  try {cart.utm=JSON.parse(sessionStorage.getItem('dny-utm')||'{}');} catch {}
  const params=new URLSearchParams(location.search);
  for(const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']) if(params.has(key))cart.utm[key]=params.get(key).slice(0,200);
  try {sessionStorage.setItem('dny-utm',JSON.stringify(cart.utm));} catch {}
  document.addEventListener('click',e=>{if(e.target.closest('a[href^="tel:"],a[href*="zalo.me"],a[href*="m.me"]'))cart.track('Contact');});
  document.addEventListener('DOMContentLoaded',()=>cart.track('PageView'));
  global.DNYCart=cart;
})(typeof window !== 'undefined' ? window : globalThis);
