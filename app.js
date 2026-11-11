/*
========================================================================
   34 TỈNH THÀNH - 34 BẢN SẮC - MỘT VIỆT NAM
   CORE JAVASCRIPT APP ENGINE
========================================================================
*/

// --- PROVINCE DATABASE MODEL ---
// Archive of the pre-1/7/2025 collection. It is retained only as design-source
// material; the storefront below uses the official 34 provincial-level units.
const LEGACY_PROVINCES_DATA = [
  {
    id: "01",
    name: "Hà Nội",
    slug: "ha-noi",
    region: "bac",
    tagline: "Di sản — Thăng Long",
    desc: "Thiết kế kế thừa sắc đỏ hoàng triều và vàng ánh kim quý phái, cách điệu từ họa tiết vảy rồng Thăng Long và các công trình di sản nghìn năm văn hiến.",
    primary: "#da251d",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 49,
    mapY: 18,
    symbol: "dragon"
  },
  {
    id: "02",
    name: "TP. Hồ Chí Minh",
    slug: "tp-hcm",
    region: "nam",
    tagline: "Chuyển động — Đô thị không ngủ",
    desc: "Hiện đại và năng động với gam màu xanh navy đậm kết hợp dải neon hồng và xanh cyan rực rỡ, tượng trưng cho những ánh đèn đêm lung linh của thành phố phát triển bậc nhất.",
    primary: "#0b2240",
    secondary: "#ff007f",
    accent: "#00f0ff",
    pattern: "mesh",
    mapX: 43,
    mapY: 77,
    symbol: "tower"
  },
  {
    id: "03",
    name: "Đà Nẵng",
    slug: "da-nang",
    region: "trung",
    tagline: "Cánh chim biển — Cầu Rồng",
    desc: "Màu xanh dương sâu thẳm của biển cả giao thoa với sắc bạc lấp lánh của những nhịp cầu sông Hàn, mang tinh thần cởi mở, khát vọng vươn ra biển lớn.",
    primary: "#005691",
    secondary: "#e8f1f5",
    accent: "#ffd700",
    pattern: "waves",
    mapX: 58,
    mapY: 47,
    symbol: "bridge"
  },
  {
    id: "04",
    name: "Hải Phòng",
    slug: "hai-phong",
    region: "bac",
    tagline: "Đất Cảng — Hoa phượng đỏ",
    desc: "Mạnh mẽ và đầy nhiệt huyết với màu đỏ thẫm của hoa phượng vĩ hòa quyện cùng sắc xám thép của cảng biển công nghiệp lớn nhất miền Bắc.",
    primary: "#9e1a1a",
    secondary: "#708090",
    accent: "#ffffff",
    pattern: "mesh",
    mapX: 54,
    mapY: 21,
    symbol: "anchor"
  },
  {
    id: "05",
    name: "Cần Thơ",
    slug: "can-tho",
    region: "nam",
    tagline: "Sông nước — Gạo trắng nước trong",
    desc: "Sắc xanh ngọc của sông nước miền Tây hòa cùng màu vàng của lúa chín trĩu hạt, tái hiện vẻ đẹp trù phú của thủ phủ miền sông nước Chợ nổi Cái Răng.",
    primary: "#008b8b",
    secondary: "#ffd700",
    accent: "#e0ffff",
    pattern: "waves",
    mapX: 37,
    mapY: 83,
    symbol: "boat"
  },
  {
    id: "06",
    name: "Cà Mau",
    slug: "ca-mau",
    region: "nam",
    tagline: "Cực Nam — Rừng ngập mặn Đất Mũi",
    desc: "Một thiết kế lấy cảm hứng từ vùng đất cực Nam, nơi rừng ngập mặn đước và mắm hòa quyện cùng biển cả xa xăm. Tone màu xanh đước thẫm kết hợp cam đất ấm áp.",
    primary: "#0f5132",
    secondary: "#fd7e14",
    accent: "#ffc107",
    pattern: "waves",
    mapX: 32,
    mapY: 92,
    symbol: "leaf"
  },
  {
    id: "07",
    name: "Thừa Thiên Huế",
    slug: "hue",
    region: "trung",
    tagline: "Cố đô — Hương Giang thơ mộng",
    desc: "Màu tím cung đình đặc trưng kết hợp sắc vàng gold hoàng tộc sang trọng, họa tiết mây luồn cung đình tạo nên vẻ trầm mặc, uy nghiêm và thi vị.",
    primary: "#4b0082",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 54,
    mapY: 45,
    symbol: "lotus"
  },
  {
    id: "08",
    name: "Quảng Nam",
    slug: "quang-nam",
    region: "trung",
    tagline: "Di sản — Hoài phố cổ kính",
    desc: "Sắc vàng đất nung từ tường gạch rêu phong Hội An phối cùng màu gỗ nâu trầm ấm, tôn vinh nét hoài cổ lãng mạn và tinh tế của di sản văn hóa.",
    primary: "#ca7d0e",
    secondary: "#4a3c31",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 60,
    mapY: 50,
    symbol: "lantern"
  },
  {
    id: "09",
    name: "Lâm Đồng",
    slug: "lam-dong",
    region: "nam",
    tagline: "Đà Lạt — Sương mù cao nguyên",
    desc: "Màu xanh thông rừng ẩn hiện trong sương mờ sườn dốc, phối cùng màu kem nhẹ thanh lịch. Họa tiết hoa anh đào cách điệu nhẹ nhàng đầy chất thơ.",
    primary: "#1b4d3e",
    secondary: "#d2b48c",
    accent: "#f5f5dc",
    pattern: "coffee",
    mapX: 59,
    mapY: 66,
    symbol: "pine"
  },
  {
    id: "10",
    name: "Khánh Hòa",
    slug: "khanh-hoa",
    region: "trung",
    tagline: "Nha Trang — Vịnh ngọc biển xanh",
    desc: "Tươi mát với màu xanh lam ngọc bích của vịnh biển Nha Trang huyền thoại, tô điểm sắc trắng tinh khôi của những bờ cát mịn và ánh nắng nhiệt đới.",
    primary: "#008080",
    secondary: "#ffffff",
    accent: "#ffd700",
    pattern: "waves",
    mapX: 66,
    mapY: 60,
    symbol: "sun"
  },
  {
    id: "11",
    name: "Hà Giang",
    slug: "ha-giang",
    region: "bac",
    tagline: "Kỳ vĩ — Cao nguyên đá Đồng Văn",
    desc: "Màu xám đá tai mèo kỳ vĩ làm chủ đạo, nhấn thêm sắc hồng tím rực rỡ của thảm hoa tam giác mạch phủ khắp các thung lũng đá tai mèo mùa đông chớm lạnh.",
    primary: "#2f3640",
    secondary: "#e056fd",
    accent: "#ffd700",
    pattern: "scales",
    mapX: 48,
    mapY: 6,
    symbol: "mountain"
  },
  {
    id: "12",
    name: "Lào Cai",
    slug: "lao-cai",
    region: "bac",
    tagline: "Đỉnh Fansipan — Tuyết phủ Sa Pa",
    desc: "Màu xanh ngọc lam của ruộng bậc thang Mường Hoa hòa quyện cùng màu trắng bạc như tuyết phủ trên đỉnh Fansipan hùng vĩ - nóc nhà Đông Dương.",
    primary: "#20b2aa",
    secondary: "#ffffff",
    accent: "#c0c0c0",
    pattern: "stripes",
    mapX: 42,
    mapY: 8,
    symbol: "mountain"
  },
  {
    id: "13",
    name: "Cao Bằng",
    slug: "cao-bang",
    region: "bac",
    tagline: "Thác Bản Giốc — Sông Quây Sơn",
    desc: "Sắc xanh ngọc bích mát lạnh của dòng nước Thác Bản Giốc đổ bóng xuống thung lũng. Họa tiết thổ cẩm Tày-Nùng được dệt khéo léo trên bo tay và cổ áo.",
    primary: "#00a8ff",
    secondary: "#0097e6",
    accent: "#ffc107",
    pattern: "scales",
    mapX: 55,
    mapY: 8,
    symbol: "mountain"
  },
  {
    id: "14",
    name: "Quảng Ninh",
    slug: "quang-ninh",
    region: "bac",
    tagline: "Vịnh Hạ Long — Đảo đá rồng bay",
    desc: "Tông màu xanh lục bảo tái hiện làn nước trong vắt vịnh Hạ Long, kết hợp họa tiết sóng uốn lượn quanh những hòn đảo đá vôi nhấp nhô tuyệt mỹ.",
    primary: "#1287a5",
    secondary: "#ffffff",
    accent: "#f5cd79",
    pattern: "waves",
    mapX: 58,
    mapY: 19,
    symbol: "dragon"
  },
  {
    id: "15",
    name: "Ninh Bình",
    slug: "ninh-binh",
    region: "bac",
    tagline: "Tràng An — Non nước hữu tình",
    desc: "Sự kết hợp tinh tế giữa màu xanh rêu cổ kính của núi đá Tràng An trầm tích và màu vàng chanh rực rỡ của cánh đồng lúa Tam Cốc dọc dòng sông Ngô Đồng.",
    primary: "#2e8b57",
    secondary: "#f4d03f",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 47,
    mapY: 28,
    symbol: "lotus"
  },
  {
    id: "16",
    name: "Thanh Hóa",
    slug: "thanh-hoa",
    region: "trung",
    tagline: "Hào khí Lam Sơn — Trống đồng",
    desc: "Màu đồng thau lịch sử kết hợp dải đỏ quyền lực. Họa tiết chim lạc cổ trên trống đồng Đông Sơn được khắc họa rõ nét ở mặt trước thân áo.",
    primary: "#b87333",
    secondary: "#da251d",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 44,
    mapY: 32,
    symbol: "star"
  },
  {
    id: "17",
    name: "Nghệ An",
    slug: "nghe-an",
    region: "trung",
    tagline: "Hào khí Lam Hồng — Sông Lam núi Hồng",
    desc: "Màu cam lửa đầy nhiệt huyết phối cùng xanh đậm sâu lắng. Tượng trưng cho ý chí học tập kiên cường, đất học địa linh nhân kiệt dồi dào nguyên khí.",
    primary: "#d35400",
    secondary: "#1f3a52",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 43,
    mapY: 36,
    symbol: "star"
  },
  {
    id: "18",
    name: "Quảng Trị",
    slug: "quang-tri",
    region: "trung",
    tagline: "Vĩ tuyến 17 — Dòng sông Hiền Lương",
    desc: "Sắc xanh hòa bình tươi sáng phối màu bạc thép, thể hiện tinh thần kiên trung quật khởi vượt qua khói lửa chiến tranh giành lại độc lập tự do.",
    primary: "#4682b4",
    secondary: "#ffffff",
    accent: "#c0c0c0",
    pattern: "stripes",
    mapX: 51,
    mapY: 42,
    symbol: "star"
  },
  {
    id: "19",
    name: "Phú Yên",
    slug: "phu-yen",
    region: "trung",
    tagline: "Gành Đá Đĩa — Đón nắng bình minh",
    desc: "Thiết kế lấy cảm hứng từ cấu trúc xếp chồng đặc biệt của Gành Đá Đĩa. Sử dụng tông màu xanh ngọc lam biển khơi kết hợp sắc vàng đón nắng bình minh cực Đông.",
    primary: "#00bc9c",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "mesh",
    mapX: 65,
    mapY: 56,
    symbol: "sun"
  },
  {
    id: "20",
    name: "Đắk Lắk",
    slug: "dak-lak",
    region: "nam",
    tagline: "Tây Nguyên — Bản sắc đại ngàn",
    desc: "Tông đỏ đất bazan trù phú quyện cùng màu nâu trầm cà phê hạt đặc sản. Họa tiết thổ cẩm Ê-đê được biến tấu cách điệu bất đối xứng dọc sườn áo.",
    primary: "#8b4513",
    secondary: "#da251d",
    accent: "#ffc107",
    pattern: "coffee",
    mapX: 58,
    mapY: 62,
    symbol: "leaf"
  },
  {
    id: "21",
    name: "Bình Thuận",
    slug: "binh-thuan",
    region: "trung",
    tagline: "Cát trắng nắng vàng — Mũi Né",
    desc: "Sắc cam cát nóng bỏng hòa cùng xanh biển nhiệt đới Mũi Né, phản chiếu đầy đủ nắng gió, sóng lướt ván diều và năng lượng phóng khoáng miền duyên hải.",
    primary: "#e67e22",
    secondary: "#3498db",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 63,
    mapY: 68,
    symbol: "sun"
  },
  {
    id: "22",
    name: "Bà Rịa - Vũng Tàu",
    slug: "vung-tau",
    region: "nam",
    tagline: "Đại dương xanh — Giàn khoan rực lửa",
    desc: "Tone xanh biển đậm đĩnh đạc kết hợp các đường kẻ cam phản quang, tượng trưng cho những giàn khoan dầu khí rực lửa đêm ngày giữa biển Đông khơi xa.",
    primary: "#0f2027",
    secondary: "#e67e22",
    accent: "#00f0ff",
    pattern: "mesh",
    mapX: 47,
    mapY: 80,
    symbol: "anchor"
  },
  {
    id: "23",
    name: "Tây Ninh",
    slug: "tay-ninh",
    region: "nam",
    tagline: "Núi Bà Đen — Sắc màu Thánh địa",
    desc: "Thiết kế nổi bật phối hợp sắc cam hoàng hôn trên đỉnh núi Bà Đen và dải màu đa sắc lộng lẫy lấy ý tưởng từ khung cửa kính Tòa Thánh Cao Đài.",
    primary: "#c23616",
    secondary: "#fbc531",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 42,
    mapY: 74,
    symbol: "mountain"
  },
  {
    id: "24",
    name: "Đồng Nai",
    slug: "dong-nai",
    region: "nam",
    tagline: "Hào khí Trấn Biên — Công nghiệp bứt phá",
    desc: "Sự kết hợp năng động giữa tông xanh lục bảo đậm đà của rừng Chiến khu Đ và các họa tiết kẻ chéo vàng gold phát triển công nghiệp thần tốc.",
    primary: "#0a3d62",
    secondary: "#eccc68",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 46,
    mapY: 75,
    symbol: "star"
  },
  {
    id: "25",
    name: "Kiên Giang",
    slug: "kien-giang",
    region: "nam",
    tagline: "Đảo ngọc Phú Quốc — Biển hoàng hôn",
    desc: "Hồng san hô rực rỡ đan xen xanh lam lam lục, mô phỏng vẻ đẹp mê hoặc của hoàng hôn biển Tây Phú Quốc và hệ sinh thái san hô ngầm nguyên sơ.",
    primary: "#ff4757",
    secondary: "#1e90ff",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 31,
    mapY: 85,
    symbol: "sun"
  },
  {
    id: "26",
    name: "Bến Tre",
    slug: "ben-tre",
    region: "nam",
    tagline: "Xứ dừa — Sắc xanh Đồng Khởi",
    desc: "Trọn vẹn sắc xanh lá tươi mát của những rặng dừa trải dài thẳng tắp, họa tiết gân lá dừa được lồng ghép chìm tạo hiệu ứng 3D độc đáo trên ngực.",
    primary: "#1e824c",
    secondary: "#2ecc71",
    accent: "#ffffff",
    pattern: "coffee",
    mapX: 42,
    mapY: 82,
    symbol: "leaf"
  },
  {
    id: "27",
    name: "An Giang",
    slug: "an-giang",
    region: "nam",
    tagline: "Thất Sơn huyền bí — Sông nước biên thùy",
    desc: "Màu vàng lúa chín biên giới hòa quyện xanh rêu của dãy Thất Sơn hùng vĩ, gợi vẻ đẹp thanh bình yên ả nhưng ngập tràn hào khí biên cương.",
    primary: "#b58900",
    secondary: "#586e75",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 33,
    mapY: 80,
    symbol: "mountain"
  },
  {
    id: "28",
    name: "Tiền Giang",
    slug: "tien-giang",
    region: "nam",
    tagline: "Mê Kông bát ngát — Phù sa trù phú",
    desc: "Tone cam phù sa nồng ấm làm chủ đạo kết hợp viền xanh lam nước sông Mê Kông, tôn vinh vùng đất cây trái ngọt lành đắp bồi quanh năm dòng sông mẹ.",
    primary: "#d35400",
    secondary: "#2980b9",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 40,
    mapY: 79,
    symbol: "boat"
  },
  {
    id: "29",
    name: "Thái Bình",
    slug: "thai-binh",
    region: "bac",
    tagline: "Quê lúa — Cánh đồng chín vàng",
    desc: "Gam màu vàng lúa chín óng ả ôm trọn cả chiếc áo bóng đá, thể hiện nét đẹp lao động cần cù trù phú của cái nôi sản xuất lúa nước sông Hồng.",
    primary: "#f39c12",
    secondary: "#ffffff",
    accent: "#27ae60",
    pattern: "stripes",
    mapX: 52,
    mapY: 24,
    symbol: "leaf"
  },
  {
    id: "30",
    name: "Nam Định",
    slug: "nam-dinh",
    region: "bac",
    tagline: "Đất học — Đền Trần cổ kính",
    desc: "Màu đỏ mận chín cổ điển thể hiện tri thức và chiều sâu văn hóa truyền thống, bo tay thêu họa tiết đấu trường xưa hào hùng lịch lãm.",
    primary: "#7b1113",
    secondary: "#e0a899",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 50,
    mapY: 26,
    symbol: "star"
  },
  {
    id: "31",
    name: "Lạng Sơn",
    slug: "lang-son",
    region: "bac",
    tagline: "Ải Chi Lăng — Đỉnh Mẫu Sơn kỳ ảo",
    desc: "Thiết kế trầm ổn với tông xanh chàm chập chùng đồi núi Đông Bắc phối họa tiết kẻ dọc màu đồng vững chãi như thế núi thành lũy ngàn đời.",
    primary: "#2c3e50",
    secondary: "#f39c12",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 58,
    mapY: 14,
    symbol: "mountain"
  },
  {
    id: "32",
    name: "Bắc Ninh",
    slug: "bac-ninh",
    region: "bac",
    tagline: "Dân ca Quan họ — Quai thao nón thúng",
    desc: "Sắc hồng đào trẩy hội đan xen xanh chàm đặc trưng của tà áo tứ thân Kinh Bắc. Họa tiết quai thao nón thúng cách điệu ở vai đầy thanh lịch.",
    primary: "#ff6b81",
    secondary: "#10ac84",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 52,
    mapY: 17,
    symbol: "lotus"
  },
  {
    id: "33",
    name: "Bình Định",
    slug: "binh-dinh",
    region: "trung",
    tagline: "Đất võ Tây Sơn — Tháp Chàm rêu phong",
    desc: "Sắc đỏ son võ thuật hào hùng kết hợp vàng ánh kim từ tháp cổ Chăm Pa kỳ vĩ, tôn vinh tinh thần kiên cường thượng võ vùng đất Bình Định.",
    primary: "#c0392b",
    secondary: "#d4ac0d",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 64,
    mapY: 53,
    symbol: "tower"
  },
  {
    id: "34",
    name: "Quảng Ngãi",
    slug: "quang-ngai",
    region: "trung",
    tagline: "Núi Ấn Sông Trà — Đảo Lý Sơn",
    desc: "Tone xanh biển ngọc kết hợp màu xám bazan của đất đá Lý Sơn, họa tiết sóng dập dìu bao bọc đảo ngọc mang hơi thở khát vọng ngư dân bám biển.",
    primary: "#138086",
    secondary: "#534666",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 63,
    mapY: 53,
    symbol: "sun"
  }
];

// Official provincial-level administrative units, effective 01/07/2025.
// Source: National Assembly Resolution 202/2025/QH15.  This is deliberately
// kept as the single source of truth for every grid, filter, map marker and
// customizer selector on the site.
const DESIGN_ASSETS = Object.freeze({
  "tp-hcm": Object.freeze({
    front: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATTRUOC.webp",
    back: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATSAU.webp",
    shorts: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-QUAN.webp"
  }),
  "can-tho": Object.freeze({
    front: "assets/THIẾT KẾ ÁO/1x/CANTHO-MATTRUOC.webp",
    back: "assets/THIẾT KẾ ÁO/1x/CANTHO-MATSAU.webp",
    shorts: "assets/THIẾT KẾ ÁO/1x/CANTHO-QUAN.webp"
  })
});
const DESIGN_ASSET_DIRECTORY = "assets/THIẾT KẾ ÁO/1x/";

// Number-print colors supplied in the DNY number-color sheet. Shirt and
// shorts use separate values where the source provides different colors.
const PROVINCE_NUMBER_COLORS = Object.freeze({
  "ha-noi": Object.freeze({ shirt: "#DFA556", shorts: "#DFA556" }),
  "cao-bang": Object.freeze({ shirt: "#F4F0DA", shorts: "#F4F0DA" }),
  "tuyen-quang": Object.freeze({ shirt: "#84082D", shorts: "#84082D" }),
  "lao-cai": Object.freeze({ shirt: "#001A3E", shorts: "#FFFFFF" }),
  "dien-bien": Object.freeze({ shirt: "#034927", shorts: "#034927" }),
  "lai-chau": Object.freeze({ shirt: "#5E3996", shorts: "#5E3996" }),
  "son-la": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "thai-nguyen": Object.freeze({ shirt: "#FFEBAC", shorts: "#FFEBAC" }),
  "lang-son": Object.freeze({ shirt: "#F0E5C5", shorts: "#F0E5C5" }),
  "quang-ninh": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "bac-ninh": Object.freeze({ shirt: "#6E2602", shorts: "#FECB6A" }),
  "phu-tho": Object.freeze({ shirt: "#FFE900", shorts: "#FFE900" }),
  "hung-yen": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "hai-phong": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "ninh-binh": Object.freeze({ shirt: "#D9A13B", shorts: "#D9A13B" }),
  "thanh-hoa": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "nghe-an": Object.freeze({ shirt: "#00182F", shorts: "#00182F" }),
  "ha-tinh": Object.freeze({ shirt: "#D7A23A", shorts: "#D7A23A" }),
  "quang-tri": Object.freeze({ shirt: "#FCEAC6", shorts: "#FCEAC6" }),
  "hue": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "da-nang": Object.freeze({ shirt: "#00182F", shorts: "#00182F" }),
  "quang-ngai": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "gia-lai": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "khanh-hoa": Object.freeze({ shirt: "#FFF684", shorts: "#FFF684" }),
  "dak-lak": Object.freeze({ shirt: "#F26722", shorts: "#F0E5C5" }),
  "lam-dong": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "dong-nai": Object.freeze({ shirt: "#00182F", shorts: "#00182F" }),
  "tp-hcm": Object.freeze({ shirt: "#F8F6E7", shorts: "#F8F6E7" }),
  "tay-ninh": Object.freeze({ shirt: "#00182F", shorts: "#00182F" }),
  "dong-thap": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" }),
  "vinh-long": Object.freeze({ shirt: "#8E0B18", shorts: "#D9A13B" }),
  "can-tho": Object.freeze({ shirt: "#F36F21", shorts: "#F36F21" }),
  "an-giang": Object.freeze({ shirt: "#D9A13B", shorts: "#D9A13B" }),
  "ca-mau": Object.freeze({ shirt: "#FFFFFF", shorts: "#FFFFFF" })
});

// Short product copy for the detail modal. Each line is written to fit the
// compact product-information panel while preserving the collection story.
const PROVINCE_DESCRIPTIONS = Object.freeze({
  "ha-noi": "Trên nền đỏ kiêu hãnh, Khuê Văn Các và những mái ngói cổ được khắc họa tinh tế, gợi lại nhịp thở nghìn năm của Thăng Long. Một thiết kế dành cho đội bóng muốn bước ra sân với phong thái đĩnh đạc của trái tim Việt Nam.",
  "cao-bang": "Sắc xanh bích sâu thẳm ôm trọn dấu ấn Pác Bó và non nước biên cương, tạo nên diện mạo vừa hoang dã vừa vững chãi. Khoác lên mình mẫu áo này là mang theo tinh thần không lùi bước của miền đất đầu nguồn.",
  "tuyen-quang": "Sắc vàng đồng gợi chiều sâu lịch sử, hòa cùng những đường nét vùng núi để kể câu chuyện về Tuyên Quang - Thủ đô kháng chiến. Thiết kế dành cho tập thể chọn sự điềm tĩnh làm bản lĩnh và biến niềm tự hào quê hương thành sức mạnh trên sân.",
  "lao-cai": "Mây ngàn Tây Bắc và đỉnh Fansipan được chuyển hóa thành những đường nét khoáng đạt, mở ra một không gian đầy gió núi. Đây là mẫu áo cho những đội bóng thích chinh phục, luôn sẵn sàng hướng đến những đỉnh cao mới.",
  "thai-nguyen": "Đồi chè Tân Cương trải dài qua những nét line-art mềm mại trên nền xanh trầm, điểm xuyết sắc vàng ấm đầy tinh tế. Càng nhìn càng thấy rõ khí chất xứ Trà: tĩnh tại, sâu sắc nhưng luôn sẵn sàng bùng nổ.",
  "phu-tho": "Cảm hứng Đất Tổ được chắt lọc trong từng đường nét trang trọng, gợi nhắc cội nguồn chung của người Việt. Một diện mạo vững vàng để cả đội mang niềm tự hào ấy bước vào mọi cuộc so tài.",
  "bac-ninh": "Đền Đô cùng hình ảnh liền anh, liền chị Quan họ tạo nên lớp di sản mềm mại trên nền vàng ấm sang trọng. Thiết kế mang đúng tinh thần Kinh Bắc: thanh lịch ở vẻ ngoài, bản lĩnh trong từng đường bóng.",
  "hung-yen": "Phố Hiến cổ kính và nhịp sóng sông Hồng hòa vào sắc xanh ngọc - vàng chanh đầy tươi mới. Mẫu áo gợi một Hưng Yên hào hoa, thanh thoát, giúp đội hình tạo dấu ấn ngay từ cái nhìn đầu tiên.",
  "hai-phong": "Hơi thở Đất Cảng được đẩy lên bằng những mảng màu giàu năng lượng và đường cắt dứt khoát, không cần phô trương vẫn đầy uy lực. Dành cho tập thể luôn chơi hết mình, bứt tốc mạnh mẽ và không ngại dẫn đầu.",
  "quang-ninh": "Cảm hứng từ Vịnh Hạ Long đưa vẻ đẹp của biển, đá và những hành trình khám phá vào một phom áo hiện đại. Tổng thể khoáng đạt, mạnh mẽ như lời mời gọi đội bóng vươn xa khỏi mọi giới hạn.",
  "ninh-binh": "Non nước Tràng An và chiều sâu Cố đô Hoa Lư tạo nên một thiết kế trầm vững, giàu chất di sản. Mỗi đường nét là sự giao thoa giữa vẻ đẹp cổ kính và tinh thần thể thao đầy khát vọng.",
  "son-la": "Nền xanh chè mát mắt làm nổi bật cảm hứng núi rừng Tây Bắc, đập thủy điện và dải thổ cẩm trắng đầy tự hào. Mẫu áo mang đến sức sống của Sơn La: bền bỉ, phóng khoáng và luôn hướng về phía trước.",
  "dien-bien": "Tượng đài Chiến thắng Điện Biên Phủ kết hợp hoa ban trên nền xám trắng, tạo nên vẻ đẹp điềm tĩnh nhưng không hề mềm yếu. Đây là lời nhắc về bản lĩnh chiến thắng dành cho những đội bóng không chùn bước trước thử thách.",
  "lai-chau": "Cổng trời Ô Quy Hồ và hoa văn H'Mông rực rỡ tạo điểm nhấn trên sắc be phong trần của miền biên viễn. Thiết kế sinh ra cho những tập thể gai góc, kiên định và luôn biết cách vượt qua địa hình khó nhất.",
  "lang-son": "Ải Chi Lăng ẩn hiện trên nền xanh rêu, điểm cùng họa tiết truyền thống của người Nùng để tạo nên vẻ đẹp trấn ải đầy uy nghi. Mẫu áo mang khí chất Xứ Lạng: kiên cố, sắc sảo và sẵn sàng áp đảo đối thủ.",
  "thanh-hoa": "Sắc đỏ rực lửa nâng đỡ họa tiết trống đồng và Thành Nhà Hồ, khơi dậy hào khí Lam Sơn trong từng chi tiết. Một thiết kế cho tập thể chơi quyết liệt, tự tin làm chủ trận đấu bằng tinh thần xứ Thanh.",
  "nghe-an": "Dòng Lam, núi Hồng và tinh thần xứ Nghệ được chắt lọc thành một diện mạo sâu lắng, giàu nội lực. Mẫu áo dành cho những đội bóng không chỉ chơi bằng kỹ thuật mà còn bằng ý chí bền bỉ đến cùng.",
  "ha-tinh": "Núi Hồng và biển xanh mở ra cảm hứng về một miền đất nắng gió mà kiên cường. Tổng thể khỏe khoắn, giàu sức sống, tiếp thêm sự tự tin để cả đội bứt phá trong từng pha bóng.",
  "quang-tri": "Từ vùng đất lửa, thiết kế kể câu chuyện về khát vọng hòa bình và ý chí không khuất phục. Mỗi chi tiết mang đến nguồn năng lượng trầm mạnh, dành cho tập thể biết biến áp lực thành động lực.",
  "hue": "Sắc tím cung đình hòa cùng cảm hứng từ di sản bên Hương Giang, tạo nên một diện mạo trầm mặc và đầy thi vị. Vẻ đẹp thanh lịch của Huế được giữ nguyên, nhưng được khoác thêm tinh thần bản lĩnh của sân cỏ.",
  "da-nang": "Cầu Rồng, sông Hàn và nhịp sống thành phố biển được tái hiện bằng đường nét gọn gàng, năng động. Thiết kế mang nguồn năng lượng cởi mở của Đà Nẵng, thôi thúc cả đội luôn tiến về phía trước.",
  "quang-ngai": "Núi Ấn, sông Trà và hơi thở biển đảo Lý Sơn gặp nhau trong một tổng thể phóng khoáng, tràn đầy sức sống. Mẫu áo như mang cả gió biển vào sân, giúp đội hình tự tin chơi bùng nổ theo cách riêng.",
  "gia-lai": "Không gian Biển Hồ và đại ngàn tạo nên chiều sâu đặc biệt cho thiết kế, vừa tự do vừa mạnh mẽ. Đây là diện mạo của những đội bóng chơi phóng khoáng, giàu nội lực và không ngại tạo khác biệt.",
  "khanh-hoa": "Tháp Trầm Hương nổi bật giữa hai sắc xanh của biển trời Nha Trang, tạo nên hiệu ứng thị giác tươi sáng và đầy sức hút. Một thiết kế dành cho tập thể muốn mang tinh thần biển lớn ra sân: khỏe khoắn, tự do và luôn bùng nổ.",
  "dak-lak": "Nền be ấm kết hợp họa tiết thổ cẩm và dấu ấn Làng Cà Phê, chắt lọc trọn vẹn vẻ đẹp của đại ngàn Đắk Lắk. Mẫu áo tiếp lửa cho đội bóng bằng một nguồn năng lượng mộc mạc nhưng dồi dào và bền bỉ.",
  "lam-dong": "Rừng thông, sương cao nguyên và những khối hoa dã quỳ được xử lý thành lớp màu xanh đầy chiều sâu. Thiết kế vừa tinh tế vừa khác biệt, dành cho đội hình yêu lối chơi kỹ thuật và luôn muốn tỏa sáng theo cách riêng.",
  "tp-hcm": "Trên nền xanh bích phóng khoáng, Chợ Bến Thành và nhịp sống không ngủ của Sài Thành được kể lại bằng ngôn ngữ thể thao hiện đại. Mẫu áo mang tinh thần sáng tạo, táo bạo, sẵn sàng cùng đội bóng bứt phá mọi giới hạn.",
  "dong-nai": "Biểu tượng nai được khắc họa theo phong cách tribal trên nền vàng kem, hòa cùng những dải đồi line-art mạnh mẽ. Một diện mạo quyền uy, khác biệt để cả đội bước ra sân với chất riêng của vùng đất đại ngàn.",
  "tay-ninh": "Núi Bà Đen và cảm hứng miền biên giới được thể hiện bằng những đường nét dứt khoát, giàu cá tính. Mẫu áo tạo ra một phong thái mạnh mẽ, dành cho đội bóng luôn muốn làm chủ cuộc chơi và nổi bật giữa đám đông.",
  "can-tho": "Bến Ninh Kiều và Cầu Cần Thơ nổi bật trên nền xanh ngọc phối cam, đưa nhịp sống Tây Đô vào từng chi tiết. Tổng thể phóng khoáng, tươi mới và sẵn sàng khiến đội hình trở thành tâm điểm trên sân.",
  "vinh-long": "Vương quốc lò gạch Mang Thít, hoa văn Khmer và nhịp sóng sông quê hòa vào sắc trắng kem - đỏ gốm ấm áp. Thiết kế mang vẻ đẹp đậm đà miền Tây, giúp cả đội thi đấu tự tin với một bản sắc không thể trộn lẫn.",
  "dong-thap": "Hoa sen và dải sóng nước chuyển động trên nền xanh ngọc, gợi lên sức sống bền bỉ của Đồng Tháp Mười. Một thiết kế tươi sáng, giàu năng lượng để đội hình luôn nổi bật trong mọi khoảnh khắc.",
  "ca-mau": "Rừng đước bám rễ sâu trong sắc xanh biển trời, kể câu chuyện kiên cường của vùng Đất Mũi. Mẫu áo dành cho những tập thể thi đấu bằng ngọn lửa không tắt, càng về cuối trận càng mạnh mẽ.",
  "an-giang": "Núi Sam, Thất Sơn và những dải sóng vàng thốt nốt tạo nên điểm nhận diện rất riêng trên nền trắng kem - xanh biển. Thiết kế mang vẻ đẹp phóng khoáng của miền Bảy Núi, tiếp thêm khí chất cho mỗi bước chạy.",
});

function makeDesignAssetKeys(province) {
  const stripDiacritics = value => value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toUpperCase();
  const shortName = province.name.replace(/^Thành phố\s+/i, "");
  const keys = [
    stripDiacritics(province.name),
    stripDiacritics(province.name).replace(/[^A-Z0-9]/g, ""),
    stripDiacritics(shortName),
    stripDiacritics(shortName).replace(/[^A-Z0-9]/g, ""),
    stripDiacritics(province.slug),
    stripDiacritics(province.slug).replace(/[^A-Z0-9]/g, "")
  ];
  return [...new Set(keys)];
}

function doesDesignImageExist(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image.naturalWidth > 0);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

async function attachAvailableDesignAssets() {
  let didAttach = false;
  for (const province of PROVINCES_DATA) {
    for (const key of makeDesignAssetKeys(province)) {
      const images = {
        front: `${DESIGN_ASSET_DIRECTORY}${key}-MATTRUOC.webp`,
        back: `${DESIGN_ASSET_DIRECTORY}${key}-MATSAU.webp`,
        shorts: `${DESIGN_ASSET_DIRECTORY}${key}-QUAN.webp`
      };
      const isCompleteSet = (await Promise.all(Object.values(images).map(doesDesignImageExist))).every(Boolean);
      if (isCompleteSet) {
        const previousImages = province.images;
        province.images = images;
        didAttach ||= !previousImages || Object.values(images).some((src, index) => src !== Object.values(previousImages)[index]);
        break;
      }
    }
  }
  return didAttach;
}

// Mã biển số đại diện của từng đơn vị hành chính cấp tỉnh trong bộ sưu tập.
// Các tỉnh/thành hợp nhất có thể dùng thêm mã cũ, nhưng áo hiển thị mã chính này.
const PROVINCE_LICENSE_PLATES = Object.freeze({
  "ha-noi": "29", "cao-bang": "11", "tuyen-quang": "22", "lao-cai": "24",
  "thai-nguyen": "20", "phu-tho": "19", "bac-ninh": "99", "hung-yen": "89",
  "hai-phong": "15", "quang-ninh": "14", "ninh-binh": "35", "son-la": "26",
  "dien-bien": "27", "lai-chau": "25", "lang-son": "12", "thanh-hoa": "36",
  "nghe-an": "37", "ha-tinh": "38", "quang-tri": "74", "hue": "75",
  "da-nang": "43", "quang-ngai": "76", "gia-lai": "81", "khanh-hoa": "79",
  "dak-lak": "47", "lam-dong": "49", "tp-hcm": "59", "dong-nai": "60",
  "tay-ninh": "70", "can-tho": "65", "vinh-long": "64", "dong-thap": "66",
  "ca-mau": "69", "an-giang": "67"
});

const PROVINCES_DATA = [
  ["Hà Nội", "ha-noi", "bac", "Thăng Long — Trái tim Việt Nam", 49, 18],
  ["Cao Bằng", "cao-bang", "bac", "Non nước — Biên cương", 56, 8],
  ["Tuyên Quang", "tuyen-quang", "bac", "Thủ đô kháng chiến — Sắc xanh đại ngàn", 49, 11],
  ["Lào Cai", "lao-cai", "bac", "Fansipan — Mây ngàn Tây Bắc", 42, 8],
  ["Thái Nguyên", "thai-nguyen", "bac", "Đệ nhất danh trà — Trung du xanh", 51, 15],
  ["Phú Thọ", "phu-tho", "bac", "Đất Tổ — Cội nguồn dân tộc", 46, 16],
  ["Bắc Ninh", "bac-ninh", "bac", "Quan họ — Kinh Bắc giao hòa", 53, 17],
  ["Hưng Yên", "hung-yen", "bac", "Phố Hiến — Nhãn lồng phù sa", 52, 23],
  ["Hải Phòng", "hai-phong", "bac", "Đất Cảng — Biển Đông mở lối", 55, 21],
  ["Quảng Ninh", "quang-ninh", "bac", "Vịnh Hạ Long — Di sản biển", 59, 19],
  ["Ninh Bình", "ninh-binh", "bac", "Cố đô Hoa Lư — Non nước Tràng An", 47, 28],
  ["Sơn La", "son-la", "bac", "Tây Bắc — Mùa ban nở", 38, 18],
  ["Điện Biên", "dien-bien", "bac", "Lòng chảo lịch sử — Hoa ban", 32, 16],
  ["Lai Châu", "lai-chau", "bac", "Đỉnh cao Tây Bắc — Mây núi", 34, 10],
  ["Lạng Sơn", "lang-son", "bac", "Xứ Lạng — Ải Chi Lăng", 59, 14],
  ["Thanh Hóa", "thanh-hoa", "trung", "Hào khí Lam Sơn — Trống đồng", 44, 32],
  ["Nghệ An", "nghe-an", "trung", "Sông Lam — Núi Hồng", 43, 36],
  ["Hà Tĩnh", "ha-tinh", "trung", "Núi Hồng — Biển xanh", 45, 39],
  ["Quảng Trị", "quang-tri", "trung", "Khát vọng hòa bình — Cửa ngõ miền Trung", 51, 42],
  ["Thành phố Huế", "hue", "trung", "Cố đô — Di sản bên Hương Giang", 54, 45],
  ["Đà Nẵng", "da-nang", "trung", "Thành phố biển — Cầu Rồng vươn mình", 58, 47],
  ["Quảng Ngãi", "quang-ngai", "trung", "Núi Ấn sông Trà — Đại ngàn gặp biển", 61, 51],
  ["Gia Lai", "gia-lai", "trung", "Cao nguyên — Biển hồ và đất võ", 58, 57],
  ["Khánh Hòa", "khanh-hoa", "trung", "Vịnh ngọc — Biển trời rực sáng", 66, 60],
  ["Đắk Lắk", "dak-lak", "trung", "Đại ngàn — Cà phê và biển xanh", 58, 62],
  ["Lâm Đồng", "lam-dong", "trung", "Cao nguyên — Rừng thông đến biển cát", 59, 66],
  ["Thành phố Hồ Chí Minh", "tp-hcm", "nam", "Đô thị sáng tạo — Vươn tầm quốc tế", 43, 77],
  ["Đồng Nai", "dong-nai", "nam", "Trấn Biên — Công nghiệp bứt phá", 47, 75],
  ["Tây Ninh", "tay-ninh", "nam", "Núi Bà Đen — Biên giới xanh", 40, 74],
  ["Cần Thơ", "can-tho", "nam", "Tây Đô — Sông nước Cửu Long", 37, 83],
  ["Vĩnh Long", "vinh-long", "nam", "Miệt vườn — Ba dòng phù sa", 42, 82],
  ["Đồng Tháp", "dong-thap", "nam", "Sen hồng — Đồng bằng trù phú", 36, 79],
  ["Cà Mau", "ca-mau", "nam", "Cực Nam — Rừng ngập mặn Đất Mũi", 32, 92],
  ["An Giang", "an-giang", "nam", "Thất Sơn — Biên cương sông nước", 33, 80]
].map(([name, slug, region, tagline, mapX, mapY], index) => {
  const palettes = [
    ["#da251d", "#ffbe00", "#ffffff"], ["#0b4f6c", "#f4b942", "#ffffff"],
    ["#1b5e20", "#d4a017", "#ffffff"], ["#4b0082", "#e8d7a9", "#ffffff"],
    ["#00796b", "#ffd54f", "#ffffff"], ["#8b4513", "#f5deb3", "#ffffff"]
  ];
  const symbols = ["dragon", "mountain", "star", "mountain", "leaf", "lotus", "lotus", "leaf", "anchor", "dragon", "lotus", "mountain", "star", "mountain", "mountain", "star", "star", "waves", "star", "lotus", "bridge", "sun", "mountain", "sun", "leaf", "pine", "tower", "star", "mountain", "boat", "leaf", "lotus", "leaf", "mountain"];
  const patterns = ["scales", "waves", "stripes", "mesh", "coffee"];
  const [primary, secondary, accent] = palettes[index % palettes.length];
  return {
    id: String(index + 1).padStart(2, "0"), plateNumber: PROVINCE_LICENSE_PLATES[slug], name, slug, region, tagline, mapX, mapY,
    desc: PROVINCE_DESCRIPTIONS[slug] || `Thiết kế tôn vinh bản sắc của ${name}, kết nối văn hóa, thiên nhiên và nhịp sống địa phương.`,
    primary, secondary, accent, pattern: patterns[index % patterns.length], symbol: symbols[index],
    numberFont: `ProvinceFont_${slug.replace(/-/g, '_')}`,
    textColor: slug === "tp-hcm" ? "#f7f3e5" : "#ffffff",
    shirtNumberColor: PROVINCE_NUMBER_COLORS[slug]?.shirt || "#ffffff",
    shortsNumberColor: PROVINCE_NUMBER_COLORS[slug]?.shorts || "#ffffff",
    images: DESIGN_ASSETS[slug] || null
  };
});

// Register predictable local font URLs. The browser loads fonts on demand and
// uses its fallback font when none of the supported files exists.
function registerProvinceFonts() {
  const style = document.createElement('style');
  style.id = 'province-fonts';
  style.textContent = PROVINCES_DATA.map(province => {
    const key = province.name.replace(/^Thành phố\s+/i, '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd').toUpperCase().replace(/[^A-Z0-9]/g, '');
    const sources = [['ttf', 'truetype'], ['otf', 'opentype'], ['woff2', 'woff2'], ['woff', 'woff']]
      .map(([extension, format]) => `url("assets/FONT 34 TINH THANH/${key}-Regular.${extension}") format("${format}")`);
    return `@font-face { font-family: "${province.numberFont}"; src: ${sources.join(',')}; font-weight: 400; font-style: normal; font-display: swap; }`;
  }).join('\n');
  document.head.appendChild(style);
}
registerProvinceFonts();

// --- DYNAMIC SVG JERSEY ENGINE ---
function generateJerseySVG(province, side = 'front', customName = 'VIETNAM', customNumber = '34', customColors = null) {
  const p = customColors ? { ...province, ...customColors } : province;
  const name = (customName || "VIETNAM").toUpperCase().substring(0, 16);
  const number = (customNumber || "34").substring(0, 2);
  const numberFont = p.numberFont || "'Outfit', sans-serif";
  const numberWeight = p.numberFont ? "400" : "900";
  
  // Custom Local Symbol Renderers based on key symbols
  let badgeSVG = '';
  if (p.symbol === 'dragon') {
    badgeSVG = `<path d="M100 83 C105 83, 108 85, 108 90 C108 95, 100 97, 100 100 C100 97, 92 95, 92 90 C92 85, 95 83, 100 83 Z" fill="${p.accent}" opacity="0.8"/>
                <path d="M96 90 Q100 86 104 90 Q100 94 96 90" fill="none" stroke="${p.primary}" stroke-width="1"/>`;
  } else if (p.symbol === 'tower') {
    badgeSVG = `<rect x="96" y="84" width="8" height="12" fill="${p.accent}" rx="1"/>
                <polygon points="94,84 100,78 106,84" fill="${p.secondary}"/>`;
  } else if (p.symbol === 'bridge') {
    badgeSVG = `<path d="M92 92 Q100 82 108 92" fill="none" stroke="${p.accent}" stroke-width="2"/>
                <line x1="100" y1="83" x2="100" y2="92" stroke="${p.accent}" stroke-width="1"/>`;
  } else if (p.symbol === 'anchor') {
    badgeSVG = `<line x1="100" y1="82" x2="100" y2="96" stroke="${p.accent}" stroke-width="2"/>
                <circle cx="100" cy="84" r="2" fill="none" stroke="${p.accent}" stroke-width="1.5"/>
                <path d="M93 90 Q100 98 107 90" fill="none" stroke="${p.accent}" stroke-width="2"/>`;
  } else if (p.symbol === 'boat') {
    badgeSVG = `<path d="M92 90 L108 90 L104 96 L96 96 Z" fill="${p.accent}"/>
                <line x1="100" y1="82" x2="100" y2="90" stroke="${p.accent}" stroke-width="1.5"/>`;
  } else if (p.symbol === 'lotus') {
    badgeSVG = `<path d="M100 82 C103 85, 106 90, 100 97 C94 90, 97 85, 100 82 Z" fill="${p.accent}"/>
                <path d="M100 85 C97 88, 93 92, 100 97 C107 92, 103 88, 100 85 Z" fill="${p.secondary}" opacity="0.6"/>`;
  } else if (p.symbol === 'mountain') {
    badgeSVG = `<polygon points="100,81 92,96 108,96" fill="${p.accent}"/>
                <polygon points="100,85 95,96 105,96" fill="${p.primary}" opacity="0.7"/>`;
  } else if (p.symbol === 'leaf') {
    badgeSVG = `<path d="M95 90 Q100 80 105 90 Q100 97 95 90 Z" fill="${p.accent}"/>
                <path d="M100 83 L100 94" fill="none" stroke="${p.primary}" stroke-width="1"/>`;
  } else { // 'sun' or default 'star'
    badgeSVG = `<polygon points="100,80 103,86 110,86 105,90 107,96 100,92 93,96 95,90 90,86 97,86" fill="${p.accent}"/>`;
  }

  // Generate SVG code
  let svg = `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" class="jersey-svg">
    <defs>
      <!-- Shadow Filter -->
      <filter id="j-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
      
      <!-- Pattern overlays -->
      <pattern id="pat-scales-${p.id}" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0,10 Q5,0 10,10 T20,10 Q15,20 10,20 T0,20 Z" fill="none" stroke="${p.secondary}" stroke-width="1" opacity="0.25"/>
      </pattern>
      <pattern id="pat-stripes-${p.id}" width="16" height="16" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="16" stroke="${p.secondary}" stroke-width="3" opacity="0.25"/>
      </pattern>
      <pattern id="pat-waves-${p.id}" width="24" height="12" patternUnits="userSpaceOnUse">
        <path d="M0,6 Q6,1 12,6 T24,6" fill="none" stroke="${p.secondary}" stroke-width="1.5" opacity="0.25"/>
      </pattern>
      <pattern id="pat-coffee-${p.id}" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M15,5 L19,13 L28,13 L21,19 L24,27 L15,22 L6,27 L9,19 L2,13 L11,13 Z" fill="none" stroke="${p.secondary}" stroke-width="1" opacity="0.2"/>
      </pattern>
      <pattern id="pat-mesh-${p.id}" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.2" fill="${p.secondary}" opacity="0.25"/>
      </pattern>
    </defs>
    
    <g filter="url(#j-shadow)">
  `;

  if (side === 'front') {
    // --- FRONT SIDE VIEW ---
    svg += `
      <!-- Left Sleeve -->
      <path d="M 80 30 L 40 45 L 25 75 L 45 85 L 55 80 Z" fill="${p.primary}"/>
      <path d="M 25 75 L 45 85 L 43 89 L 23 79 Z" fill="${p.secondary}"/> <!-- Left cuff -->
      
      <!-- Right Sleeve -->
      <path d="M 120 30 L 160 45 L 175 75 L 155 85 L 145 80 Z" fill="${p.primary}"/>
      <path d="M 175 75 L 155 85 L 157 89 L 177 79 Z" fill="${p.secondary}"/> <!-- Right cuff -->

      <!-- Main Body -->
      <path d="M 80 30 Q 100 52 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="${p.primary}"/>
      
      <!-- Cultural Pattern Overlay -->
      <path d="M 80 30 Q 100 52 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="url(#pat-${p.pattern}-${p.id})"/>
      
      <!-- Side Panels -->
      <path d="M 55 80 L 60 210 L 63 210 L 58 80 Z" fill="${p.secondary}"/>
      <path d="M 145 80 L 140 210 L 137 210 L 142 80 Z" fill="${p.secondary}"/>
      
      <!-- Collar -->
      <path d="M 80 30 Q 100 52 120 30 L 118 33 Q 100 53 82 33 Z" fill="${p.secondary}"/>
      <path d="M 98 48 L 102 48 L 100 52 Z" fill="${p.accent}"/>

      <!-- Brand Logo (Right Chest) -->
      <g transform="translate(72, 85) scale(0.06)">
        <polygon points="10,40 40,10 70,40 60,50 40,30 20,50" fill="${p.accent}" opacity="0.85"/>
        <polygon points="10,65 40,35 70,65 60,75 40,55 20,75" fill="${p.accent}" opacity="0.85"/>
      </g>
      
      <!-- Custom Emblem / Badge (Left Chest) -->
      <g transform="translate(18, 2)">
        ${badgeSVG}
      </g>
      
      <!-- Center Sponsor / Custom Name Text -->
      <text x="100" y="130" font-family="'Outfit', sans-serif" font-weight="900" font-size="11" fill="${p.accent}" letter-spacing="3" text-anchor="middle" opacity="0.85">
        ${p.name.toUpperCase()}
      </text>
      
      <!-- Technical lines/decorations -->
      <line x1="85" y1="138" x2="115" y2="138" stroke="${p.secondary}" stroke-width="1.5" opacity="0.6"/>
      <circle cx="100" cy="180" r="15" fill="none" stroke="${p.secondary}" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.25"/>
      <text x="100" y="184" font-family="'Outfit', sans-serif" font-weight="800" font-size="10" fill="${p.secondary}" text-anchor="middle" opacity="0.3">${p.id}</text>
    `;
  } else {
    // --- BACK SIDE VIEW ---
    svg += `
      <!-- Left Sleeve (Back view flips side) -->
      <path d="M 80 30 L 40 45 L 25 75 L 45 85 L 55 80 Z" fill="${p.primary}"/>
      <path d="M 25 75 L 45 85 L 43 89 L 23 79 Z" fill="${p.secondary}"/>
      
      <!-- Right Sleeve (Back view flips side) -->
      <path d="M 120 30 L 160 45 L 175 75 L 155 85 L 145 80 Z" fill="${p.primary}"/>
      <path d="M 175 75 L 155 85 L 157 89 L 177 79 Z" fill="${p.secondary}"/>

      <!-- Main Body -->
      <path d="M 80 30 Q 100 35 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="${p.primary}"/>
      
      <!-- Cultural Pattern Overlay -->
      <path d="M 80 30 Q 100 35 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="url(#pat-${p.pattern}-${p.id})"/>
      
      <!-- Side Panels -->
      <path d="M 55 80 L 60 210 L 63 210 L 58 80 Z" fill="${p.secondary}"/>
      <path d="M 145 80 L 140 210 L 137 210 L 142 80 Z" fill="${p.secondary}"/>
      
      <!-- Back Neck Trim -->
      <path d="M 80 30 Q 100 35 120 30 L 118 33 Q 100 38 82 33 Z" fill="${p.secondary}"/>

      <!-- Custom Player Name curved path / straight -->
      <text x="100" y="75" font-family="'Outfit', sans-serif" font-weight="800" font-size="12" fill="${p.accent}" letter-spacing="3" text-anchor="middle" opacity="0.9">
        ${name}
      </text>
      
      <!-- Custom Player Number -->
      <text x="100" y="145" font-family="${numberFont}" font-weight="${numberWeight}" font-size="62" fill="${p.accent}" text-anchor="middle" letter-spacing="-1">
        ${number}
      </text>
      
      <!-- VN 34 Campaign Emblem at Back Neck -->
      <g transform="translate(95, 42) scale(0.2)" opacity="0.7">
        <polygon points="25,0 50,20 50,50 0,50 0,20" fill="${p.secondary}"/>
        <text x="25" y="38" font-family="'Outfit', sans-serif" font-weight="800" font-size="20" fill="${p.primary}" text-anchor="middle">34</text>
      </g>
    `;
  }

  svg += `
    </g>
  </svg>
  `;
  return svg;
}

// --- STATE MANAGEMENT ---
const state = {
  activeRegion: 'all',
  searchQuery: '',
  activeMapProvince: PROVINCES_DATA.find(p => p.slug === 'ca-mau'), // Default map province
  customizerProvince: PROVINCES_DATA[0],
  // New designs start with a neutral print name; the number follows the
  // selected province's collection number.
  customizerName: 'NAME',
  customizerNumber: PROVINCES_DATA[0].plateNumber,
  customizerSide: 'back'
};

const customizerPrintSettings = {
  name: { x: 49.44444444444444, y: 22.505462490895848, size: 24 },
  shirtNumber: { x: 49.44444444444444, y: 44.93809176984705, size: 110 },
  shortsNumber: { x: 83, y: 83.20833333333333, size: 54 }
};

const customizerLogos = { front: null, back: null, shorts: null };

function getCustomizerProvinceName(province) {
  return 'NAME';
}

// --- DOM ELEMENTS ---
let mapInfoPanel, mapPlaceholder, mapDetailView;
let collectionGrid;
let searchInput;
let filterTabs;
let customizerPreview, customizerForm;
let detailModal;

// --- INITIALIZER ---
document.addEventListener("DOMContentLoaded", () => {
  // Remove cursor markup left by an older cached page shell.
  document.querySelectorAll("#custom-cursor, #custom-cursor-dot").forEach(element => element.remove());
  // Bind Nav Transition on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Layout Toggle Switch Logic
  const layoutToggle = document.getElementById("layout-toggle");
  if (layoutToggle) {
    layoutToggle.checked = true; // Default is checked (Full version)
    layoutToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.remove("compact-mode");
      } else {
        document.body.classList.add("compact-mode");
      }
      // Re-trigger scroll reveal calculations
      setTimeout(() => {
        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("active");
          }
        });
      }, 50);
    });
  }

  // Init Elements
  mapInfoPanel = document.getElementById("map-info-panel");
  mapPlaceholder = document.getElementById("map-placeholder");
  mapDetailView = document.getElementById("map-detail-view");
  collectionGrid = document.getElementById("collection-grid");
  searchInput = document.getElementById("search-input");
  filterTabs = document.querySelectorAll(".filter-tab");
  customizerPreview = document.getElementById("customizer-preview");
  customizerForm = document.getElementById("customizer-form");
  detailModal = document.getElementById("detail-modal");

  // Load Engines
  initInteractiveMap();
  initCollectionGrid();
  initSearchFilter();
  initCustomizer();
  initShowcaseMarquee();
  initProductTech();
  initScrollAnimations();
  
  // Load engaging features
  initTactileAudio();
  initCardTiltEffect();
  initConfettiBurst();
  
  // Load Default Map Province View
  selectMapProvince(state.activeMapProvince.slug);

  // A complete file set placed in the design folder is linked automatically.
  // Example: CANTHO-MATTRUOC.webp, CANTHO-MATSAU.webp and CANTHO-QUAN.webp.
  void attachAvailableDesignAssets().then(didAttach => {
    if (!didAttach) return;
    applyFilter();
    selectMapProvince(state.activeMapProvince.slug);
    initShowcaseMarquee();
    // The customizer renders before the local image scan completes. Render it
    // again so its first visible jersey always uses the matched province files.
    updateCustomizerPreview();
  });
});

// --- INTERACTIVE MAP ENGINE ---
function initInteractiveMap() {
  // Bản đồ sử dụng file SVG hoàn chỉnh, không hiển thị các điểm đánh dấu phủ lên trên.
}

function selectMapProvince(slug) {
  const province = PROVINCES_DATA.find(p => p.slug === slug);
  if (!province) return;

  state.activeMapProvince = province;

  // Toggle map markers active state
  document.querySelectorAll(".map-hotspot").forEach(el => {
    el.classList.remove("active");
  });
  const activeMarker = document.querySelector(`.map-hotspot[data-slug="${slug}"]`);
  if (activeMarker) activeMarker.classList.add("active");

  // Show detailed panel info
  if (mapPlaceholder) mapPlaceholder.style.display = "none";
  if (mapDetailView) {
    mapDetailView.innerHTML = `
      <div class="province-meta">
        <span class="province-num">VN / ${province.id}</span>
        <span class="province-reg">${province.region === 'bac' ? 'Miền Bắc' : province.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
      <h3 class="province-title">${province.name}</h3>
      <div class="province-concept">${province.tagline}</div>
      <p class="province-desc">${province.desc}</p>
      
      <div class="province-preview-box">
        <div class="province-mini-jersey">
          ${province.images ? `<img class="province-mini-photo" src="${province.images.front}" alt="Mặt trước áo ${province.name}">` : generateJerseySVG(province, 'front')}
        </div>
        <ul class="province-specs">
          <li>
            <span>Chủ đạo</span>
            <span style="color: ${province.primary}; font-weight: 700;">■ ${province.primary}</span>
          </li>
          <li>
            <span>Phối hợp</span>
            <span style="color: ${province.secondary}; font-weight: 700;">■ ${province.secondary}</span>
          </li>
          <li>
            <span>Chi tiết</span>
            <span style="color: ${province.accent}; font-weight: 700;">■ ${province.accent}</span>
          </li>
          <li>
            <span>Biểu tượng</span>
            <span style="text-transform: capitalize;">${province.symbol}</span>
          </li>
        </ul>
      </div>
      
      <button class="btn-primary" onclick="openDetailsModal('${province.slug}')">XEM THIẾT KẾ CHI TIẾT</button>
    `;
    mapDetailView.classList.add("active");
  }
}

// --- 34 PROVINCE GRID GALLERY ENGINE ---
function initCollectionGrid() {
  renderGrid(PROVINCES_DATA);
}

function renderGrid(data) {
  if (!collectionGrid) return;
  collectionGrid.innerHTML = "";

  if (data.length === 0) {
    collectionGrid.innerHTML = `
      <div class="no-results">
        <h3>Không tìm thấy tỉnh thành nào phù hợp</h3>
        <p>Vui lòng thử tìm kiếm khác.</p>
      </div>
    `;
    return;
  }

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card-perspective reveal";
    card.setAttribute("data-region", p.region);
    card.innerHTML = `
      <div class="card-inner">
        <!-- Front of the Card -->
        <div class="card-front">
          <div class="card-top">
            <span class="card-num">VN / ${p.id}</span>
            <span class="card-region">${p.region === 'bac' ? 'MIỀN BẮC' : p.region === 'trung' ? 'MIỀN TRUNG' : 'MIỀN NAM'}</span>
          </div>
          <div class="card-jersey-area">
            ${p.images
              ? `<img class="card-province-photo" src="${p.images.front}" alt="Mặt trước áo ${p.name}">`
              : generateJerseySVG(p, 'front')}
          </div>
          <div class="card-bottom">
            <h3 class="card-title">${p.name}</h3>
            <span class="card-concept">${p.tagline}</span>
            <button class="card-view-design" type="button" onclick="openDetailsModal('${p.slug}')">
              XEM THIẾT KẾ <span>→</span>
            </button>
          </div>
        </div>
        
        <!-- Back of the Card -->
        <div class="card-back">
          <div class="card-back-content">
            <div>
              <h3 class="card-back-title">${p.name}</h3>
              <p class="card-back-desc">${p.desc.substring(0, 100)}...</p>
              
              <div class="card-back-specs">
                <div class="card-back-spec">
                  <span>Thiết kế:</span>
                  <span>Chính hãng</span>
                </div>
                <div class="card-back-spec">
                  <span>Chất liệu:</span>
                  <span>Cool-Air Mesh</span>
                </div>
                <div class="card-back-spec">
                  <span>Form dáng:</span>
                  <span>Athletic Fit</span>
                </div>
              </div>
            </div>
            
            <button class="card-cta" onclick="openDetailsModal('${p.slug}')">
              XEM THIẾT KẾ
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
    collectionGrid.appendChild(card);
    
    // Trigger immediate animation frame update
    setTimeout(() => {
      card.classList.add("active");
    }, 50);
  });

  // Re-bind tilt effects
  if (typeof initCardTiltEffect === 'function') {
    initCardTiltEffect();
  }
}

// --- SEARCH & FILTER CONTROLLER ---
function normalizeSearchText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

// Province names used before the 2025 provincial-level consolidation. These
// aliases keep search useful while the collection displays only current units.
const PROVINCE_SEARCH_ALIASES = Object.freeze({
  "tuyen-quang": Object.freeze(["Hà Giang"]),
  "lao-cai": Object.freeze(["Yên Bái"]),
  "thai-nguyen": Object.freeze(["Bắc Kạn"]),
  "phu-tho": Object.freeze(["Vĩnh Phúc", "Hòa Bình"]),
  "bac-ninh": Object.freeze(["Bắc Giang"]),
  "hung-yen": Object.freeze(["Thái Bình"]),
  "hai-phong": Object.freeze(["Hải Dương"]),
  "ninh-binh": Object.freeze(["Hà Nam", "Nam Định"]),
  "quang-tri": Object.freeze(["Quảng Bình"]),
  "hue": Object.freeze(["Thừa Thiên Huế"]),
  "da-nang": Object.freeze(["Quảng Nam"]),
  "quang-ngai": Object.freeze(["Kon Tum"]),
  "gia-lai": Object.freeze(["Bình Định"]),
  "khanh-hoa": Object.freeze(["Ninh Thuận"]),
  "lam-dong": Object.freeze(["Đắk Nông", "Bình Thuận"]),
  "dak-lak": Object.freeze(["Phú Yên"]),
  "tp-hcm": Object.freeze(["Bình Dương", "Bà Rịa - Vũng Tàu", "Sài Gòn", "TP Hồ Chí Minh"]),
  "dong-nai": Object.freeze(["Bình Phước"]),
  "tay-ninh": Object.freeze(["Long An"]),
  "dong-thap": Object.freeze(["Tiền Giang"]),
  "vinh-long": Object.freeze(["Bến Tre", "Trà Vinh"]),
  "can-tho": Object.freeze(["Hậu Giang", "Sóc Trăng"]),
  "ca-mau": Object.freeze(["Bạc Liêu"]),
  "an-giang": Object.freeze(["Kiên Giang"])
});

function initSearchFilter() {
  if (!searchInput) return;

  // Search Input listener
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = normalizeSearchText(e.target.value);
    applyFilter();
  });

  // Region Filter Tabs listener
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeRegion = tab.getAttribute("data-filter");
      applyFilter();
    });
  });
}

function applyFilter() {
  const filtered = PROVINCES_DATA.filter(p => {
    const matchesRegion = state.activeRegion === 'all' || p.region === state.activeRegion;
    const searchableTerms = [p.name, p.tagline, p.desc, ...(PROVINCE_SEARCH_ALIASES[p.slug] || [])];
    const matchesSearch = searchableTerms.some(term => normalizeSearchText(term).includes(state.searchQuery)) ||
                          p.id.includes(state.searchQuery);
    return matchesRegion && matchesSearch;
  });
  renderGrid(filtered);
}

// --- JERSEY CUSTOMIZER PLAYGROUND ENGINE ---
function initCustomizer() {
  const selectProv = document.getElementById("cust-province");
  const inputName = document.getElementById("cust-name");
  const inputNum = document.getElementById("cust-number");
  const viewBtns = document.querySelectorAll(".customizer-preview-controls .view-btn");

  if (!selectProv || !customizerPreview) return;

  // Populate province options
  selectProv.innerHTML = "";
  PROVINCES_DATA.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.slug;
    opt.textContent = `${p.id} - ${p.name}`;
    selectProv.appendChild(opt);
  });
  selectProv.value = state.customizerProvince?.slug || PROVINCES_DATA[0].slug;
  state.customizerName = getCustomizerProvinceName(state.customizerProvince);
  inputName.value = state.customizerName;
  inputNum.value = state.customizerNumber || state.customizerProvince?.plateNumber || PROVINCES_DATA[0].plateNumber;
  viewBtns.forEach(button => button.classList.toggle("active", button.dataset.view === (state.customizerSide || "back")));

  // Form listeners
  selectProv.addEventListener("change", (e) => {
    state.customizerProvince = PROVINCES_DATA.find(p => p.slug === e.target.value);
    state.customizerName = getCustomizerProvinceName(state.customizerProvince);
    state.customizerNumber = state.customizerProvince?.plateNumber || PROVINCES_DATA[0].plateNumber;
    inputName.value = state.customizerName;
    inputNum.value = state.customizerNumber;
    updateCustomizerPreview();
  });

  inputName.addEventListener("input", (e) => {
    state.customizerName = e.target.value;
    if (!refreshCustomizerPrintText()) updateCustomizerPreview();
    else scheduleCustomizerPreviewRefresh();
  });

  inputNum.addEventListener("input", (e) => {
    state.customizerNumber = e.target.value;
    if (!refreshCustomizerPrintText()) updateCustomizerPreview();
    else scheduleCustomizerPreviewRefresh();
  });

  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      viewBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.customizerSide = btn.getAttribute("data-view");
      syncCustomizerLogoControls();
      updateCustomizerPreview();
    });
  });

  initCustomizerLogoControls();
  syncCustomizerLogoControls();

  // Initial load
  updateCustomizerPreview();
}

function updateCustomizerPreview() {
  if (!customizerPreview) return;

  const province = state.customizerProvince || PROVINCES_DATA[0];
  const side = state.customizerSide || 'back';
  const name = (state.customizerName || "NAME").toUpperCase().substring(0, 16);
  const number = (state.customizerNumber || province.plateNumber).substring(0, 2);
  const printedName = escapePrintText(name);
  const printedNumber = escapePrintText(number);

  const images = province.images || DESIGN_ASSETS[province.slug] || {
    front: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATTRUOC.webp",
    back: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATSAU.webp",
    shorts: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-QUAN.webp"
  };

  const numberFont = province.numberFont || null;
  const printStyle = (setting, garment = "shirt") => {
    const printColor = garment === "shorts"
      ? (province.shortsNumberColor || province.textColor || "#ffffff")
      : (province.shirtNumberColor || province.textColor || "#ffffff");
    return `--print-x:${setting.x}%;--print-y:${setting.y}%;--print-size:${setting.size}px;--print-color:${printColor};--number-font:${numberFont || "var(--font-headline)"};--number-weight:${numberFont ? 400 : 900};`;
  };
  const activeLogo = customizerLogos[side];
  const logoMarkup = activeLogo?.src
    ? `<span class="customizer-logo" data-logo-view="${side}" style="--logo-x:${activeLogo.x}%;--logo-y:${activeLogo.y}%;--logo-size:${activeLogo.size}%"><img src="${activeLogo.src}" alt="Logo tùy chỉnh"><input class="modal-inline-size-slider" type="range" min="8" max="40" value="${activeLogo.size}" aria-label="Điều chỉnh kích thước logo"></span>`
    : "";

  if (side === 'front') {
    customizerPreview.innerHTML = `
      <div class="modal-jersey-view" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
        <span class="modal-jersey-label">THÂN TRƯỚC — ${province.name}</span>
        <div class="modal-print-stage" style="width: 75%; max-width: 360px; aspect-ratio: 2194/2092;">
          <img class="modal-product-photo" src="${images.front}" alt="Thân trước ${province.name}">
          ${logoMarkup}
        </div>
      </div>
    `;
  } else if (side === 'shorts') {
    customizerPreview.innerHTML = `
      <div class="modal-jersey-view" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
        <span class="modal-jersey-label">QUẦN — ${province.name}</span>
        <div class="modal-print-stage modal-shorts-print-stage" style="width: 60%; max-width: 300px; aspect-ratio: 1/1;">
          <img class="modal-shorts-photo" src="${images.shorts}" alt="Quần ${province.name}">
          ${logoMarkup}
          <span class="modal-shorts-number modal-draggable-print" data-print-target="shortsNumber" style="${printStyle(customizerPrintSettings.shortsNumber, "shorts")}">
            <span class="modal-print-value">${printedNumber}</span>
            <input class="modal-inline-size-slider" type="range" min="14" max="54" value="${customizerPrintSettings.shortsNumber.size}" aria-label="Điều chỉnh cỡ số quần">
          </span>
        </div>
      </div>
    `;
  } else {
    // Default 'back'
    customizerPreview.innerHTML = `
      <div class="modal-jersey-view" style="width: 100%; display: flex; flex-direction: column; align-items: center;">
        <span class="modal-jersey-label">THÂN SAU — ${province.name}</span>
        <div class="modal-print-stage modal-back-print-stage" style="width: 75%; max-width: 360px; aspect-ratio: 2194/2092;">
          <img class="modal-product-photo" src="${images.back}" alt="Thân sau ${province.name}">
          ${logoMarkup}
          <span class="modal-print-name modal-draggable-print" data-print-target="name" style="${printStyle(customizerPrintSettings.name)}">
            <span class="modal-print-value">${printedName}</span>
            <input class="modal-inline-size-slider" type="range" min="8" max="36" value="${customizerPrintSettings.name.size}" aria-label="Điều chỉnh cỡ tên">
          </span>
          <span class="modal-print-number modal-draggable-print" data-print-target="shirtNumber" style="${printStyle(customizerPrintSettings.shirtNumber)}">
            <span class="modal-print-value">${printedNumber}</span>
            <input class="modal-inline-size-slider" type="range" min="14" max="110" value="${customizerPrintSettings.shirtNumber.size}" aria-label="Điều chỉnh cỡ số áo">
          </span>
        </div>
      </div>
    `;
  }

  // Print coordinates are stored as percentages; scale only their type size on phones
  // so the mobile canvas keeps the same visual proportion as the 360px desktop stage.
  const stage = customizerPreview.querySelector('.modal-print-stage');
  const isPhonePreview = window.matchMedia?.('(max-width: 767px)').matches;
  if (stage && isPhonePreview) {
    const referenceWidth = stage.classList.contains('modal-shorts-print-stage') ? 300 : 360;
    const scale = Math.min(1, stage.getBoundingClientRect().width / referenceWidth);
    stage.querySelectorAll('.modal-draggable-print[data-print-target]').forEach(element => {
      const setting = customizerPrintSettings[element.dataset.printTarget];
      if (setting) element.style.setProperty('--print-size', `${setting.size * scale}px`);
    });
  }

  bindCustomizerPrintDragging();
  bindCustomizerLogoDragging();
}

// Updating text in place avoids rebuilding the image stage on every keystroke.
function refreshCustomizerPrintText() {
  if (!customizerPreview) return false;
  const province = state.customizerProvince || PROVINCES_DATA[0];
  const name = (state.customizerName || "NAME").toUpperCase().substring(0, 16);
  const number = (state.customizerNumber || province.plateNumber).substring(0, 2);
  const printName = customizerPreview.querySelector('[data-print-target="name"] .modal-print-value');
  const shirtNumber = customizerPreview.querySelector('[data-print-target="shirtNumber"] .modal-print-value');
  const shortsNumber = customizerPreview.querySelector('[data-print-target="shortsNumber"] .modal-print-value');
  if (!printName && !shirtNumber && !shortsNumber) return false;
  if (printName) printName.textContent = name;
  if (shirtNumber) shirtNumber.textContent = number;
  if (shortsNumber) shortsNumber.textContent = number;
  return true;
}

let customizerPreviewRefreshTimer;
function scheduleCustomizerPreviewRefresh() {
  window.clearTimeout(customizerPreviewRefreshTimer);
  customizerPreviewRefreshTimer = window.setTimeout(updateCustomizerPreview, 160);
}

function initCustomizerLogoControls() {
  const uploadInput = document.getElementById("cust-logo");
  const status = document.getElementById("cust-logo-status");
  const clearButton = document.getElementById("cust-logo-clear");
  if (!uploadInput || !status || !clearButton) return;
  uploadInput.addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      customizerLogos[state.customizerSide || "back"] = { src: String(reader.result), filename: file.name, x: 50, y: 35, size: 18 };
      syncCustomizerLogoControls();
      updateCustomizerPreview();
    };
    reader.readAsDataURL(file);
  });
  clearButton.addEventListener("click", () => {
    customizerLogos[state.customizerSide || "back"] = null;
    uploadInput.value = "";
    syncCustomizerLogoControls();
    updateCustomizerPreview();
  });
}

function syncCustomizerLogoControls() {
  const status = document.getElementById("cust-logo-status");
  const clearButton = document.getElementById("cust-logo-clear");
  if (!status || !clearButton) return;
  const logo = customizerLogos[state.customizerSide || "back"];
  status.textContent = logo?.filename || "PNG, JPG, WEBP hoặc SVG";
  clearButton.hidden = !logo;
}

function bindCustomizerLogoDragging() {
  const logo = customizerPreview?.querySelector(".customizer-logo");
  if (!logo) return;
  const logoSettings = customizerLogos[logo.dataset.logoView];
  if (!logoSettings) return;
  const startDrag = event => {
    const stage = logo.closest(".modal-print-stage");
    if (!stage) return;
    if (event.target.closest(".modal-inline-size-slider")) return;
    const point = source => source.touches ? (source.touches[0] || source.changedTouches[0]) : source;
    event.preventDefault();
    logo.classList.add("is-selected");
    const move = moveEvent => {
      const currentPoint = point(moveEvent);
      const bounds = stage.getBoundingClientRect();
      logoSettings.x = Math.max(5, Math.min(95, ((currentPoint.clientX - bounds.left) / bounds.width) * 100));
      logoSettings.y = Math.max(5, Math.min(95, ((currentPoint.clientY - bounds.top) / bounds.height) * 100));
      logo.style.setProperty("--logo-x", `${logoSettings.x}%`);
      logo.style.setProperty("--logo-y", `${logoSettings.y}%`);
    };
    const stop = () => { window.removeEventListener("mousemove", move); window.removeEventListener("touchmove", move); };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", stop, { once: true });
    window.addEventListener("touchend", stop, { once: true });
  };
  logo.addEventListener("mousedown", startDrag);
  logo.addEventListener("touchstart", startDrag, { passive: false });
  const sizeSlider = logo.querySelector(".modal-inline-size-slider");
  sizeSlider?.addEventListener("input", event => {
    logoSettings.size = Number(event.target.value);
    logo.style.setProperty("--logo-size", `${logoSettings.size}%`);
  });
}

function bindCustomizerPrintDragging() {
  if (!customizerPreview) return;
  customizerPreview.querySelectorAll(".modal-draggable-print").forEach(element => {
    const beginInteraction = (event, interactionType) => {
      const draggableElement = event.currentTarget;
      const target = draggableElement.dataset.printTarget;
      const stage = draggableElement.closest(".modal-print-stage");
      if (event.target.closest(".modal-inline-size-slider")) return;
      customizerPreview.querySelectorAll(".modal-draggable-print").forEach(item => item.classList.remove("is-selected"));
      draggableElement.classList.add("is-selected");
      const pointFromEvent = source => source.touches ? (source.touches[0] || source.changedTouches[0]) : source;
      const moveEventName = interactionType === "touch" ? "touchmove" : "mousemove";
      const endEventName = interactionType === "touch" ? "touchend" : "mouseup";
      event.preventDefault();
      const move = moveEvent => {
        const point = pointFromEvent(moveEvent);
        if (moveEvent.cancelable) moveEvent.preventDefault();
        const bounds = stage.getBoundingClientRect();
        customizerPrintSettings[target].x = Math.max(5, Math.min(95, ((point.clientX - bounds.left) / bounds.width) * 100));
        customizerPrintSettings[target].y = Math.max(5, Math.min(95, ((point.clientY - bounds.top) / bounds.height) * 100));
        draggableElement.style.setProperty("--print-x", `${customizerPrintSettings[target].x}%`);
        draggableElement.style.setProperty("--print-y", `${customizerPrintSettings[target].y}%`);
      };
      const stopMove = () => window.removeEventListener(moveEventName, move);
      window.addEventListener(moveEventName, move, { passive: false });
      window.addEventListener(endEventName, stopMove, { once: true });
    };
    element.addEventListener("mousedown", event => beginInteraction(event, "mouse"));
    element.addEventListener("touchstart", event => beginInteraction(event, "touch"), { passive: false });
    const sizeSlider = element.querySelector(".modal-inline-size-slider");
    if (sizeSlider) {
      sizeSlider.addEventListener("input", event => {
        const target = element.dataset.printTarget;
        customizerPrintSettings[target].size = Number(event.target.value);
        element.style.setProperty("--print-size", `${customizerPrintSettings[target].size}px`);
      });
    }
  });
}

// --- PRODUCT DETAILS MODAL ---
const HCM_DEFAULT_PRINT_SETTINGS = Object.freeze({
  name: Object.freeze({ x: 49.97080386686563, y: 28.007621121393576, size: 15 }),
  shirtNumber: Object.freeze({ x: 50.30156165858912, y: 44.67412176663278, size: 72 }),
  shortsNumber: Object.freeze({ x: 83.33681135225376, y: 84.90191986644408, size: 31 })
});

function getDefaultPrintSettings() {
  return {
    name: { ...HCM_DEFAULT_PRINT_SETTINGS.name },
    shirtNumber: { ...HCM_DEFAULT_PRINT_SETTINGS.shirtNumber },
    shortsNumber: { ...HCM_DEFAULT_PRINT_SETTINGS.shortsNumber }
  };
}

function escapePrintText(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[character]));
}

function renderModalJerseyPair(province, name, number, printSettings = null) {
  if (province.images) {
    const printedName = escapePrintText(name).toUpperCase();
    const printedNumber = escapePrintText(number);
    const settings = printSettings || getDefaultPrintSettings();
    const printStyle = (setting, garment = "shirt") => {
      const printColor = garment === "shorts"
        ? (province.shortsNumberColor || province.textColor || "#ffffff")
        : (province.shirtNumberColor || province.textColor || "#ffffff");
      return `--print-x:${setting.x}%;--print-y:${setting.y}%;--print-size:${setting.size}px;--print-color:${printColor};--number-font:${province.numberFont || "var(--font-headline)"};--number-weight:${province.numberFont ? 400 : 900};`;
    };
    return `
      <div class="modal-jersey-view">
        <span class="modal-jersey-label">MẶT TRƯỚC</span>
        <img class="modal-product-photo" src="${province.images.front}" alt="Mặt trước áo ${province.name}">
      </div>
      <div class="modal-jersey-view">
        <span class="modal-jersey-label">MẶT SAU &amp; QUẦN</span>
        <div class="modal-apparel-bottom">
          <div class="modal-print-stage modal-back-print-stage">
            <img class="modal-product-photo" src="${province.images.back}" alt="Mặt sau áo ${province.name}">
            <span class="modal-print-name modal-draggable-print" data-print-target="name" style="${printStyle(settings.name)}"><span class="modal-print-value">${printedName}</span><input class="modal-inline-size-slider" type="range" min="8" max="22" value="${settings.name.size}" aria-label="Điều chỉnh cỡ tên"></span>
            <span class="modal-print-number modal-draggable-print" data-print-target="shirtNumber" style="${printStyle(settings.shirtNumber)}"><span class="modal-print-value">${printedNumber}</span><input class="modal-inline-size-slider" type="range" min="14" max="72" value="${settings.shirtNumber.size}" aria-label="Điều chỉnh cỡ số áo"></span>
          </div>
          <div class="modal-print-stage modal-shorts-print-stage">
            <img class="modal-shorts-photo" src="${province.images.shorts}" alt="Quần áo ${province.name}">
            <span class="modal-shorts-number modal-draggable-print" data-print-target="shortsNumber" style="${printStyle(settings.shortsNumber, "shorts")}"><span class="modal-print-value">${printedNumber}</span><input class="modal-inline-size-slider" type="range" min="14" max="42" value="${settings.shortsNumber.size}" aria-label="Điều chỉnh cỡ số quần"></span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="modal-jersey-view">
      <span class="modal-jersey-label">MẶT TRƯỚC</span>
      ${generateJerseySVG(province, "front", name, number)}
    </div>
    <div class="modal-jersey-view">
      <span class="modal-jersey-label">MẶT SAU</span>
      ${generateJerseySVG(province, "back", name, number)}
    </div>
  `;
}

// --- EXPORT CUSTOMIZED JERSEY IMAGE ENGINE (HIGH-DEFINITION PNG & COPY) ---
const BASE64_IMAGE_CACHE = new Map();
// Dán URL Web App Google Apps Script sau khi triển khai (xem google-apps-script/Code.gs).
const ORDER_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycby0gg9o31JgACKVIaxAs3vfTNaG3DoKz1sFjkn6plkOKJ5EZwPDp8ynJJU3tI6hQ53k/exec';

async function loadImageAsDataURI(src) {
  if (!src) return null;
  if (src.startsWith('data:')) return src;
  if (BASE64_IMAGE_CACHE.has(src)) return BASE64_IMAGE_CACHE.get(src);

  // Method 1: Fetch API
  try {
    const res = await fetch(src);
    if (res.ok || res.status === 0) {
      const blob = await res.blob();
      const dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      });
      if (dataUrl && typeof dataUrl === 'string' && dataUrl.startsWith('data:')) {
        BASE64_IMAGE_CACHE.set(src, dataUrl);
        return dataUrl;
      }
    }
  } catch (_) {}

  // Method 2: XMLHttpRequest
  try {
    const dataUrl = await new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        if (xhr.status === 200 || xhr.status === 0) {
          const reader = new FileReader();
          reader.onloadend = function() {
            const result = reader.result;
            resolve(result && typeof result === 'string' && result.startsWith('data:') ? result : null);
          };
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(xhr.response);
        } else {
          resolve(null);
        }
      };
      xhr.onerror = () => resolve(null);
      xhr.open('GET', src, true);
      xhr.responseType = 'blob';
      xhr.send();
    });
    if (dataUrl) {
      BASE64_IMAGE_CACHE.set(src, dataUrl);
      return dataUrl;
    }
  } catch (_) {}

  return null;
}

async function exportSingleJerseyStage(stageElement, filename, action = 'download') {
  await document.fonts.ready;
  if (!stageElement) return null;
  const actualStage = stageElement.querySelector('.modal-print-stage') || stageElement.querySelector('.modal-jersey-view') || stageElement;
  const rect = actualStage.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  // Use uniform scale to strictly preserve natural aspect ratio without distortion
  const scale = 3;
  const width = Math.round(rect.width * scale);
  const height = Math.round(rect.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Background dark gradient card
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#131822');
  gradient.addColorStop(1, '#090b10');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Uniform scale factor
  const scaleX = scale;
  const scaleY = scale;

  // 1. Draw product photo PNG images onto canvas
  const images = Array.from(actualStage.querySelectorAll('img'));
  for (const img of images) {
    if (img.classList.contains('modal-inline-size-slider')) continue;
    const rawSrc = img.getAttribute('src') || img.src;
    const dataUri = await loadImageAsDataURI(rawSrc);
    const targetSrc = dataUri || rawSrc;

    const imgRect = img.getBoundingClientRect();
    const dx = (imgRect.left - rect.left) * scaleX;
    const dy = (imgRect.top - rect.top) * scaleY;
    const dw = imgRect.width * scaleX;
    const dh = imgRect.height * scaleY;

    const tempImg = new Image();
    await new Promise(resolve => {
      tempImg.onload = () => {
        try { ctx.drawImage(tempImg, dx, dy, dw, dh); } catch (e) { console.warn('ctx.drawImage img:', e); }
        resolve();
      };
      tempImg.onerror = resolve;
      tempImg.src = targetSrc;
    });
  }

  // 2. Draw SVG elements if present
  const svgs = Array.from(actualStage.querySelectorAll('svg'));
  for (const svg of svgs) {
    const svgRect = svg.getBoundingClientRect();
    const dx = (svgRect.left - rect.left) * scaleX;
    const dy = (svgRect.top - rect.top) * scaleY;
    const dw = svgRect.width * scaleX;
    const dh = svgRect.height * scaleY;

    const svgString = new XMLSerializer().serializeToString(svg);
    const dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
    const tempImg = new Image();
    await new Promise(resolve => {
      tempImg.onload = () => {
        try { ctx.drawImage(tempImg, dx, dy, dw, dh); } catch (_) {}
        resolve();
      };
      tempImg.onerror = resolve;
      tempImg.src = dataUri;
    });
  }

  // 3. Draw Draggable Print Overlays (Name & Number) - NO SHADOW as requested
  const prints = Array.from(actualStage.querySelectorAll('.modal-draggable-print'));
  for (const printEl of prints) {
    const valueEl = printEl.querySelector('.modal-print-value') || printEl;
    const text = (valueEl.innerText || valueEl.textContent || '').replace(/[\r\n]+/g, ' ').trim();
    if (!text) continue;

    const valRect = valueEl.getBoundingClientRect();
    const centerX = (valRect.left + valRect.width / 2 - rect.left) * scaleX;
    const centerY = (valRect.top + valRect.height / 2 - rect.top) * scaleY;

    const computed = window.getComputedStyle(valueEl);
    const fontSizePx = parseFloat(computed.fontSize) || 24;
    const targetFontSize = Math.round(fontSizePx * scaleX);
    const fontFamily = computed.fontFamily || "'Be Vietnam Pro', sans-serif";
    const fontWeight = computed.fontWeight || "900";
    const color = computed.color || "#ffffff";

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fontWeight} ${targetFontSize}px ${fontFamily}`;
    ctx.fillStyle = color;

    // Strict NO shadow and NO filter on printed text and number
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.filter = 'none';

    ctx.fillText(text, 0, 0);
    ctx.restore();
  }

  // 4. Draw Brand Watermark
  ctx.save();
  const wmSize = Math.max(14, Math.round(width * 0.02));
  ctx.font = `600 ${wmSize}px "Outfit", sans-serif`;
  ctx.fillStyle = '#ffbe00';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.fillText('VN/34 COLLECTION • WEAR YOUR HOMETOWN', width - Math.round(20 * scale), height - Math.round(15 * scale));
  ctx.restore();

  // 5. Output
  let dataUrl;
  try {
    dataUrl = canvas.toDataURL('image/png');
  } catch (taintErr) {
    console.warn('Canvas toDataURL tainted on file:// protocol:', taintErr);
    const realImg = actualStage.querySelector('img');
    const imgSrc = realImg ? (realImg.getAttribute('src') || realImg.src) : '';
    
    let compositeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${rect.width} ${rect.height}" width="${rect.width}" height="${rect.height}">`;
    compositeSvg += `<rect width="100%" height="100%" fill="#0d1117"/>`;
    if (imgSrc) {
      compositeSvg += `<image href="${imgSrc}" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"/>`;
    }
    
    const printsSvg = Array.from(actualStage.querySelectorAll('.modal-draggable-print'));
    for (const printEl of printsSvg) {
      const valueEl = printEl.querySelector('.modal-print-value') || printEl;
      const text = (valueEl.innerText || valueEl.textContent || '').replace(/[\r\n]+/g, ' ').trim();
      if (!text) continue;
      const valRect = valueEl.getBoundingClientRect();
      const centerX = (valRect.left + valRect.width / 2 - rect.left);
      const centerY = (valRect.top + valRect.height / 2 - rect.top);
      const computed = window.getComputedStyle(valueEl);
      const fontSizePx = parseFloat(computed.fontSize) || 24;
      const color = computed.color || '#ffffff';
      const fontFamily = computed.fontFamily || 'sans-serif';
      const fontWeight = computed.fontWeight || 'bold';

      compositeSvg += `<text x="${centerX}" y="${centerY}" font-family="${fontFamily}" font-weight="${fontWeight}" font-size="${fontSizePx}" fill="${color}" text-anchor="middle" dominant-baseline="central">${text}</text>`;
    }
    compositeSvg += `</svg>`;

    dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(compositeSvg);
    if (action === 'download') {
      triggerDownload(dataUrl, filename.replace(/\.png$/i, '.svg'));
    }
    return { canvas, dataUrl };
  }

  if (action === 'download') {
    triggerDownload(dataUrl, filename);
  }
  return { canvas, dataUrl };
}

async function exportCustomizedJersey(stageElement, action = 'download', defaultFilename = 'vn34-thiet-ke-ao.png') {
  await document.fonts.ready;
  try {
    const modal = document.getElementById("detail-modal");
    const previewModal = document.querySelector(".final-preview-modal");
    const customizerElem = document.getElementById("personalization");

    // Case 1: Triggered from detail modal or final preview
    if (modal && modal.classList.contains("active") && (!stageElement || modal.contains(stageElement) || (previewModal && previewModal.contains(stageElement)))) {
      const modalContainer = modal.querySelector(".modal-content");
      const name = (document.getElementById("modal-custom-name")?.value || "VIETNAM").trim();
      const num = (document.getElementById("modal-custom-number")?.value || "34").trim();
      const slug = modalContainer?.dataset?.slug || "ao-dau";

      const frontView = modalContainer ? modalContainer.querySelectorAll(".modal-jersey-view")[0] : null;
      const backStage = modalContainer ? modalContainer.querySelector(".modal-back-print-stage") : null;
      const shortsStage = modalContainer ? modalContainer.querySelector(".modal-shorts-print-stage") : null;

      if (action === 'download') {
        let count = 0;
        if (frontView) {
          await exportSingleJerseyStage(frontView, `VN34-${slug}-${name}-${num}-MATTRUOC.png`, 'download');
          count++;
        }
        if (backStage) {
          await new Promise(r => setTimeout(r, 250));
          await exportSingleJerseyStage(backStage, `VN34-${slug}-${name}-${num}-MATSAU.png`, 'download');
          count++;
        }
        if (shortsStage) {
          await new Promise(r => setTimeout(r, 250));
          await exportSingleJerseyStage(shortsStage, `VN34-${slug}-${name}-${num}-QUAN.png`, 'download');
          count++;
        }
        if (count > 0) return;
      } else {
        // Copy action: copy back view (primary customized jersey)
        const targetStage = backStage || stageElement;
        const res = await exportSingleJerseyStage(targetStage, `VN34-${slug}-${name}-${num}.png`, 'copy');
        if (res && res.canvas) copyCanvasToClipboard(res.canvas, res.dataUrl, `VN34-${slug}-${name}-${num}.png`);
        return;
      }
    }

    // Case 2: Section 13 customizer
    const customizerSelect = document.getElementById("cust-province");
    if (customizerElem && (!stageElement || customizerElem.contains(stageElement))) {
      const name = (document.getElementById("cust-name")?.value || "VIETNAM").trim();
      const num = (document.getElementById("cust-number")?.value || "34").trim();
      const slug = customizerSelect?.value || "ao-dau";
      const province = PROVINCES_DATA.find(p => p.slug === slug) || state.customizerProvince || PROVINCES_DATA[0];

      if (action === 'download') {
        const images = province.images || DESIGN_ASSETS[province.slug] || {
          front: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATTRUOC.webp",
          back: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATSAU.webp",
          shorts: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-QUAN.webp"
        };

        // Render offscreen stages to capture all 3 views accurately
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '-9999px';
        tempContainer.style.top = '0';
        tempContainer.style.width = '600px';
        tempContainer.style.visibility = 'hidden';
        tempContainer.style.pointerEvents = 'none';

        const printStyle = (setting, garment = "shirt") => {
          const printColor = garment === "shorts"
            ? (province.shortsNumberColor || province.textColor || "#ffffff")
            : (province.shirtNumberColor || province.textColor || "#ffffff");
          return `--print-x:${setting.x}%;--print-y:${setting.y}%;--print-size:${setting.size}px;--print-color:${printColor};--number-font:${province.numberFont || "var(--font-headline)"};--number-weight:${province.numberFont ? 400 : 900};`;
        };
        const settings = customizerPrintSettings;

        tempContainer.innerHTML = `
          <div class="modal-jersey-view temp-front-stage" style="width: 360px; aspect-ratio: 2194/2092;">
            <img class="modal-product-photo" style="width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none" src="${images.front}" alt="Mặt trước">
          </div>
          <div class="modal-print-stage modal-back-print-stage temp-back-stage" style="width: 360px; aspect-ratio: 2194/2092; position: relative;">
            <img class="modal-product-photo" style="width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none" src="${images.back}" alt="Mặt sau">
            <span class="modal-print-name modal-draggable-print" style="${printStyle(settings.name)}"><span class="modal-print-value">${escapePrintText(name).toUpperCase()}</span></span>
            <span class="modal-print-number modal-draggable-print" style="${printStyle(settings.shirtNumber)}"><span class="modal-print-value">${escapePrintText(num)}</span></span>
          </div>
          <div class="modal-print-stage modal-shorts-print-stage temp-shorts-stage" style="width: 300px; aspect-ratio: 1/1; position: relative;">
            <img class="modal-shorts-photo" style="width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none" src="${images.shorts}" alt="Quần">
            <span class="modal-shorts-number modal-draggable-print" style="${printStyle(settings.shortsNumber, "shorts")}"><span class="modal-print-value">${escapePrintText(num)}</span></span>
          </div>
        `;
        document.body.appendChild(tempContainer);

        try {
          const frontStage = tempContainer.querySelector('.temp-front-stage');
          const backStage = tempContainer.querySelector('.temp-back-stage');
          const shortsStage = tempContainer.querySelector('.temp-shorts-stage');

          await exportSingleJerseyStage(frontStage, `VN34-${province.slug}-${name}-${num}-MATTRUOC.png`, 'download');
          await new Promise(r => setTimeout(r, 250));
          await exportSingleJerseyStage(backStage, `VN34-${province.slug}-${name}-${num}-MATSAU.png`, 'download');
          await new Promise(r => setTimeout(r, 250));
          await exportSingleJerseyStage(shortsStage, `VN34-${province.slug}-${name}-${num}-QUAN.png`, 'download');
        } finally {
          tempContainer.remove();
        }
        return;
      } else {
        // Copy action
        const currentStage = stageElement || document.querySelector("#customizer-preview .modal-print-stage") || document.getElementById("customizer-preview");
        const res = await exportSingleJerseyStage(currentStage, `VN34-${slug}-${name}-${num}.png`, 'copy');
        if (res && res.canvas) copyCanvasToClipboard(res.canvas, res.dataUrl, `VN34-${slug}-${name}-${num}.png`);
        return;
      }
    }

    // Default fallback single stage export
    const res = await exportSingleJerseyStage(stageElement, defaultFilename, action);
    if (action === 'copy' && res && res.canvas) {
      copyCanvasToClipboard(res.canvas, res.dataUrl, defaultFilename);
    }
  } catch (err) {
    console.error('exportCustomizedJersey error:', err);
    alert('Đã xử lý tải hình thiết kế áo!');
  }
}

function copyCanvasToClipboard(canvas, dataUrl, filename) {
  if (navigator.clipboard && window.ClipboardItem && canvas.toBlob) {
    canvas.toBlob(async blob => {
      if (!blob) {
        triggerDownload(dataUrl, filename);
        return;
      }
      try {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        alert('Đã sao chép ảnh áo HD vào Clipboard! Bạn có thể dán (Ctrl+V) trực tiếp vào Messenger, Zalo...');
        if (typeof playTactileSound === 'function') playTactileSound('success');
      } catch (clipErr) {
        console.warn('Clipboard write error, falling back to download:', clipErr);
        triggerDownload(dataUrl, filename);
      }
    }, 'image/png');
  } else {
    triggerDownload(dataUrl, filename);
  }
}

function triggerDownload(dataUrl, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  setTimeout(() => link.remove(), 200);
  if (typeof playTactileSound === 'function') playTactileSound('success');
}

function makeOrderReference() {
  const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(2, 12);
  return `VN34-${stamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function getLivePrintSettings(root) {
  const settings = {};
  root?.querySelectorAll('.modal-draggable-print[data-print-target]').forEach(element => {
    const computed = window.getComputedStyle(element);
    const target = element.dataset.printTarget;
    settings[target] = {
      x: parseFloat(computed.getPropertyValue('--print-x')) || 50,
      y: parseFloat(computed.getPropertyValue('--print-y')) || 50,
      size: parseFloat(computed.getPropertyValue('--print-size')) || parseFloat(computed.fontSize) || 24
    };
  });
  return settings;
}

function getOrderDesignSnapshot(source = 'customizer') {
  if (source === 'detail') {
    const modalContainer = document.querySelector('#detail-modal.active .modal-content');
    const province = PROVINCES_DATA.find(item => item.slug === modalContainer?.dataset?.slug) || PROVINCES_DATA[0];
    return {
      province: province.name,
      provinceSlug: province.slug,
      printName: (document.getElementById('modal-custom-name')?.value || 'NAME').trim().slice(0, 16),
      printNumber: String(document.getElementById('modal-custom-number')?.value || province.plateNumber).trim().slice(0, 2),
      printPositions: getLivePrintSettings(modalContainer),
      logos: {}
    };
  }
  const province = state.customizerProvince || PROVINCES_DATA[0];
  return {
    province: province.name,
    provinceSlug: province.slug,
    printName: (document.getElementById('cust-name')?.value || state.customizerName || 'VIETNAM').trim().slice(0, 16),
    printNumber: String(document.getElementById('cust-number')?.value || state.customizerNumber || '34').trim().slice(0, 2),
    printPositions: JSON.parse(JSON.stringify(customizerPrintSettings)),
    logos: Object.fromEntries(Object.entries(customizerLogos).map(([view, logo]) => [view, logo ? {
      filename: logo.filename || 'logo', x: logo.x, y: logo.y, size: logo.size
    } : null]))
  };
}

async function createOrderPreviewImages(source = 'customizer') {
  if (source === 'detail') {
    const modalContainer = document.querySelector('#detail-modal.active .modal-content');
    const frontView = modalContainer?.querySelectorAll('.modal-jersey-view')[0];
    const backStage = modalContainer?.querySelector('.modal-back-print-stage');
    const shortsStage = modalContainer?.querySelector('.modal-shorts-print-stage');
    const [front, back, shorts] = await Promise.all([
      exportSingleJerseyStage(frontView, 'front.png', 'preview'),
      exportSingleJerseyStage(backStage, 'back.png', 'preview'),
      exportSingleJerseyStage(shortsStage, 'shorts.png', 'preview')
    ]);
    if (!front?.dataUrl || !back?.dataUrl || !shorts?.dataUrl) throw new Error('Không thể tạo đủ ba ảnh của mẫu đang xem.');
    return {
      snapshot: getOrderDesignSnapshot('detail'),
      images: { front: front.dataUrl, back: back.dataUrl, shorts: shorts.dataUrl }
    };
  }
  const province = state.customizerProvince || PROVINCES_DATA[0];
  const snapshot = getOrderDesignSnapshot('customizer');
  const images = province.images || DESIGN_ASSETS[province.slug];
  if (!images) throw new Error('Không tìm thấy ảnh nguồn của mẫu áo.');

  const tempContainer = document.createElement('div');
  tempContainer.style.cssText = 'position:fixed;left:-9999px;top:0;width:600px;visibility:hidden;pointer-events:none;';
  const printStyle = (setting, garment = 'shirt') => {
    const color = garment === 'shorts' ? (province.shortsNumberColor || province.textColor || '#fff') : (province.shirtNumberColor || province.textColor || '#fff');
    return `--print-x:${setting.x}%;--print-y:${setting.y}%;--print-size:${setting.size}px;--print-color:${color};--number-font:${province.numberFont || 'var(--font-headline)'};--number-weight:${province.numberFont ? 400 : 900};`;
  };
  const logoMarkup = view => {
    const logo = customizerLogos[view];
    return logo?.src ? `<span class="customizer-logo" style="--logo-x:${logo.x}%;--logo-y:${logo.y}%;--logo-size:${logo.size}%"><img src="${logo.src}" alt="Logo tùy chỉnh"></span>` : '';
  };
  tempContainer.innerHTML = `
    <div class="modal-print-stage order-preview-front" style="width:360px;aspect-ratio:2194/2092;position:relative;"><img class="modal-product-photo" style="width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none" src="${images.front}" alt="Mặt trước">${logoMarkup('front')}</div>
    <div class="modal-print-stage modal-back-print-stage order-preview-back" style="width:360px;aspect-ratio:2194/2092;position:relative;"><img class="modal-product-photo" style="width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none" src="${images.back}" alt="Mặt sau">${logoMarkup('back')}<span class="modal-print-name modal-draggable-print" style="${printStyle(customizerPrintSettings.name)}"><span class="modal-print-value">${escapePrintText(snapshot.printName).toUpperCase()}</span></span><span class="modal-print-number modal-draggable-print" style="${printStyle(customizerPrintSettings.shirtNumber)}"><span class="modal-print-value">${escapePrintText(snapshot.printNumber)}</span></span></div>
    <div class="modal-print-stage modal-shorts-print-stage order-preview-shorts" style="width:300px;aspect-ratio:1;position:relative;"><img class="modal-shorts-photo" style="width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;filter:none" src="${images.shorts}" alt="Quần">${logoMarkup('shorts')}<span class="modal-shorts-number modal-draggable-print" style="${printStyle(customizerPrintSettings.shortsNumber, 'shorts')}"><span class="modal-print-value">${escapePrintText(snapshot.printNumber)}</span></span></div>`;
  document.body.appendChild(tempContainer);
  try {
    const [front, back, shorts] = await Promise.all([
      exportSingleJerseyStage(tempContainer.querySelector('.order-preview-front'), 'front.png', 'preview'),
      exportSingleJerseyStage(tempContainer.querySelector('.order-preview-back'), 'back.png', 'preview'),
      exportSingleJerseyStage(tempContainer.querySelector('.order-preview-shorts'), 'shorts.png', 'preview')
    ]);
    if (!front?.dataUrl || !back?.dataUrl || !shorts?.dataUrl) throw new Error('Không thể tạo đủ ba ảnh xem trước.');
    return { snapshot, images: { front: front.dataUrl, back: back.dataUrl, shorts: shorts.dataUrl } };
  } finally {
    tempContainer.remove();
  }
}

async function submitCustomizedOrder(form) {
  const message = document.getElementById('order-form-message');
  const submitButton = form.querySelector('.order-submit');
  if (window.location.protocol === 'file:') {
    message.textContent = 'Để gửi mẫu có ảnh, hãy mở website qua http://localhost:8080 bằng tệp MỞ-TRANG-LOCAL.cmd.';
    message.className = 'order-form-message error';
    return;
  }
  if (!ORDER_WEBHOOK_URL || ORDER_WEBHOOK_URL.includes('PASTE_GOOGLE')) {
    message.textContent = 'Chức năng nhận đơn đang chờ kết nối Google Sheets. Vui lòng liên hệ cửa hàng để đặt mẫu này.';
    message.className = 'order-form-message error';
    return;
  }
  const orderReference = makeOrderReference();
  submitButton.disabled = true;
  submitButton.textContent = 'ĐANG LƯU MẪU ÁO…';
  message.textContent = 'Đang tạo ảnh mẫu đã chỉnh để gửi cho đội ngũ…';
  message.className = 'order-form-message';
  try {
    const source = form.dataset.orderSource || 'customizer';
    const sourceName = source === 'detail' ? document.getElementById('modal-custom-name') : document.getElementById('cust-name');
    const sourceNumber = source === 'detail' ? document.getElementById('modal-custom-number') : document.getElementById('cust-number');
    if (sourceName && sourceNumber) {
      sourceName.value = form.elements.printName.value.trim().slice(0, 16);
      sourceNumber.value = String(form.elements.printNumber.value).replace(/\D/g, '').slice(0, 2);
      sourceName.dispatchEvent(new Event('input', { bubbles: true }));
      sourceNumber.dispatchEvent(new Event('input', { bubbles: true }));
    }
    const preview = await createOrderPreviewImages(source);
    const payload = {
      orderReference,
      submittedAt: new Date().toISOString(),
      customer: {
        fullName: form.elements.fullname.value.trim(),
        address: form.elements.address.value.trim(),
        phone: form.elements.phone.value.trim(),
        email: form.elements.email.value.trim()
      },
      design: preview.snapshot,
      previews: preview.images
    };
    await fetch(ORDER_WEBHOOK_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
    message.innerHTML = `Đã gửi mẫu thành công. Mã đơn của bạn: <strong>${orderReference}</strong>. Đội ngũ sẽ liên hệ để xác nhận.`;
    message.className = 'order-form-message success';
    submitButton.textContent = 'ĐÃ GỬI THÔNG TIN ✓';
    form.dataset.lastOrderReference = orderReference;
  } catch (error) {
    console.error('submitCustomizedOrder error:', error);
    message.textContent = 'Chưa thể gửi mẫu. Vui lòng kiểm tra kết nối và thử lại.';
    message.className = 'order-form-message error';
    submitButton.disabled = false;
    submitButton.innerHTML = 'GỬI THÔNG TIN ĐẶT ÁO <span>→</span>';
  }
}

window.openDetailsModal = function(slug) {
  const province = PROVINCES_DATA.find(p => p.slug === slug);
  if (!province || !detailModal) return;

  const printSettings = getDefaultPrintSettings();

  const modalContainer = detailModal.querySelector(".modal-content");
  modalContainer.dataset.slug = province.slug;
  modalContainer.innerHTML = `
    <button class="modal-close" onclick="closeDetailsModal()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="modal-visual">
      ${renderModalJerseyPair(province, 'NAME', province.plateNumber, printSettings)}
    </div>
    <div class="modal-info">
      <div class="modal-meta">
        <span class="modal-num">VN / COLLECTION ${province.id}</span>
        <span class="modal-region">${province.region === 'bac' ? 'Miền Bắc' : province.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
      <h2 class="modal-title">${province.name}</h2>
      <div class="modal-concept">${province.tagline}</div>
      <p class="modal-desc">${province.desc}</p>
      
      <ul class="modal-specs">
        <li>
          <span>Chất liệu vải</span>
          <span>Cool-Air Mesh / Polyester 100%</span>
        </li>
        <li>
          <span>Công nghệ in</span>
          <span>Sublimation Print (In chuyển nhiệt 3D)</span>
        </li>
        <li>
          <span>Form dáng</span>
          <span>Athletic Fit / Thể thao năng động</span>
        </li>
        <li>
          <span>Mã sản phẩm</span>
          <span>VTN-${province.id}</span>
        </li>
      </ul>

      <div class="modal-personalization" aria-label="Tùy chỉnh tên và số áo">
        <div class="modal-personalization-heading">
          <h3>THÊM TÊN / SỐ ÁO</h3>
          <span>Cập nhật tức thì trên áo</span>
        </div>
        <div class="modal-personalization-fields">
          <label>
            <span>Tên in áo</span>
            <input id="modal-custom-name" type="text" value="NAME" maxlength="16" autocomplete="off">
          </label>
          <label>
            <span>Số áo</span>
            <input id="modal-custom-number" type="text" value="${province.plateNumber}" maxlength="2" inputmode="numeric" autocomplete="off">
          </label>
        </div>
      </div>
      
      <div class="modal-action-box">
        <button class="btn-primary" onclick="orderJersey('${province.name}')">ĐẶT MUA NGAY</button>
        <button class="btn-secondary" id="modal-final-preview" type="button">XEM BẢN ĐÃ CHỈNH</button>
        <button class="btn-secondary" id="modal-reset-customization" type="button">ĐẶT LẠI</button>
      </div>
    </div>
  `;

  const jerseyPreview = modalContainer.querySelector(".modal-visual");
  const nameInput = modalContainer.querySelector("#modal-custom-name");
  const numberInput = modalContainer.querySelector("#modal-custom-number");
  const finalPreviewButton = modalContainer.querySelector("#modal-final-preview");
  const resetButton = modalContainer.querySelector("#modal-reset-customization");

  // Print settings are stored against the desktop artwork. Scale them from the
  // actual apparel frame on narrow screens, so name and numbers keep the same
  // visual proportion instead of retaining a fixed pixel size.
  const syncDetailPrintScale = () => {
    const isPhone = window.matchMedia?.('(max-width: 760px)').matches;
    modalContainer.querySelectorAll('.modal-print-stage').forEach(stage => {
      const referenceWidth = stage.classList.contains('modal-shorts-print-stage') ? 150 : 320;
      const frameWidth = stage.getBoundingClientRect().width;
      if (!frameWidth) return;
      stage.querySelectorAll('.modal-draggable-print[data-print-target]').forEach(element => {
        const target = element.dataset.printTarget;
        const setting = printSettings[target];
        if (!setting) return;
        const minimum = target === 'name' ? 10 : target === 'shirtNumber' ? 26 : 16;
        const displaySize = isPhone
          ? Math.max(minimum, Math.round(setting.size * frameWidth / referenceWidth))
          : setting.size;
        element.style.setProperty('--print-size', `${displaySize}px`);
      });
    });
  };


  const bindPrintDragging = () => {
    modalContainer.querySelectorAll(".modal-draggable-print").forEach(element => {
      const beginInteraction = (event, interactionType) => {
        const draggableElement = event.currentTarget;
        const target = draggableElement.dataset.printTarget;
        const stage = draggableElement.closest(".modal-print-stage");
        if (event.target.closest(".modal-inline-size-slider")) return;
        modalContainer.querySelectorAll(".modal-draggable-print").forEach(item => item.classList.remove("is-selected"));
        draggableElement.classList.add("is-selected");
        const pointFromEvent = source => source.touches ? (source.touches[0] || source.changedTouches[0]) : source;
        const initialPoint = pointFromEvent(event);
        const moveEventName = interactionType === "touch" ? "touchmove" : "mousemove";
        const endEventName = interactionType === "touch" ? "touchend" : "mouseup";
        event.preventDefault();
        const move = moveEvent => {
          const point = pointFromEvent(moveEvent);
          if (moveEvent.cancelable) moveEvent.preventDefault();
          const bounds = stage.getBoundingClientRect();
          printSettings[target].x = Math.max(5, Math.min(95, ((point.clientX - bounds.left) / bounds.width) * 100));
          printSettings[target].y = Math.max(5, Math.min(95, ((point.clientY - bounds.top) / bounds.height) * 100));
          draggableElement.style.setProperty("--print-x", `${printSettings[target].x}%`);
          draggableElement.style.setProperty("--print-y", `${printSettings[target].y}%`);
        };
        const stopMove = () => window.removeEventListener(moveEventName, move);
        window.addEventListener(moveEventName, move, { passive: false });
        window.addEventListener(endEventName, stopMove, { once: true });
      };
      element.addEventListener("mousedown", event => beginInteraction(event, "mouse"));
      element.addEventListener("touchstart", event => beginInteraction(event, "touch"), { passive: false });
      const sizeSlider = element.querySelector(".modal-inline-size-slider");
      sizeSlider.addEventListener("input", event => {
        const target = element.dataset.printTarget;
        printSettings[target].size = Number(event.target.value);
        syncDetailPrintScale();
      });
    });
  };
  const updateModalJersey = () => {
    const name = nameInput.value.trim() || 'NAME';
    numberInput.value = numberInput.value.replace(/\D/g, "").slice(0, 2);
    const number = numberInput.value || province.plateNumber;
    jerseyPreview.innerHTML = renderModalJerseyPair(province, name, number, printSettings);
    syncDetailPrintScale();
    bindPrintDragging();
  };

  syncDetailPrintScale();

  nameInput.addEventListener("input", updateModalJersey);
  numberInput.addEventListener("input", updateModalJersey);
  resetButton.addEventListener("click", () => {
    nameInput.value = 'NAME';
    numberInput.value = province.plateNumber;
    const defaults = getDefaultPrintSettings();
    Object.assign(printSettings.name, defaults.name);
    Object.assign(printSettings.shirtNumber, defaults.shirtNumber);
    Object.assign(printSettings.shortsNumber, defaults.shortsNumber);
    updateModalJersey();
  });
  finalPreviewButton.addEventListener("click", () => {
    const name = nameInput.value.trim() || 'NAME';
    const number = numberInput.value.replace(/\D/g, "").slice(0, 2) || province.plateNumber;
    const liveSnapshot = document.createElement("div");
    liveSnapshot.innerHTML = jerseyPreview.innerHTML;
    liveSnapshot.querySelectorAll(".is-selected").forEach(element => element.classList.remove("is-selected"));
    const preview = document.createElement("div");
    preview.className = "final-preview-modal";
    preview.innerHTML = `
      <div class="final-preview-panel" role="dialog" aria-modal="true" aria-label="Bản thiết kế đã chỉnh">
        <button class="final-preview-close" type="button" aria-label="Đóng xem trước">×</button>
        <div class="final-preview-header">
          <div><span>BẢN THIẾT KẾ ĐÃ CHỈNH</span><strong>${province.name}</strong></div>
          <div class="final-preview-tools">
            <button type="button" data-zoom="out" aria-label="Thu nhỏ">−</button>
            <output id="final-preview-zoom">100%</output>
            <button type="button" data-zoom="in" aria-label="Phóng to">+</button>
          </div>
        </div>
        <div class="final-preview-viewport">
          <div class="final-preview-artwork">
            ${liveSnapshot.innerHTML}
          </div>
        </div>
        ${province.images ? `
          <div class="final-preview-gallery" aria-label="Xem từng hình sản phẩm">
            <button type="button" data-preview-view="total"><span class="preview-total-icon">▦</span><span>TỔNG THỂ</span></button>
            <button type="button" data-preview-view="front"><img src="${province.images.front}" alt="Thân trước"><span>THÂN TRƯỚC</span></button>
            <button type="button" data-preview-view="back"><img src="${province.images.back}" alt="Thân sau"><span>THÂN SAU</span></button>
            <button type="button" data-preview-view="shorts"><img src="${province.images.shorts}" alt="Quần"><span>QUẦN</span></button>
          </div>
        ` : ""}
        <p>Dùng nút + / − hoặc lăn chuột để phóng to, thu nhỏ.</p>
      </div>
    `;
    document.body.appendChild(preview);
    let zoom = 1;
    let panX = 0;
    let panY = 0;
    const artwork = preview.querySelector(".final-preview-artwork");
    const zoomOutput = preview.querySelector("#final-preview-zoom");
    const viewport = preview.querySelector(".final-preview-viewport");


    const syncPrintScale = () => {
      artwork.querySelectorAll(".modal-draggable-print").forEach(print => {
        const target = print.dataset.printTarget;
        const original = jerseyPreview.querySelector(`.modal-draggable-print[data-print-target="${target}"]`);
        const originalStage = original?.closest(".modal-print-stage");
        const previewStage = print.closest(".modal-print-stage");
        if (!original || !originalStage || !previewStage) return;
        const originalSize = parseFloat(getComputedStyle(original).fontSize);
        const scale = previewStage.getBoundingClientRect().width / originalStage.getBoundingClientRect().width;
        print.style.setProperty("--print-size", `${originalSize * scale}px`);
      });
    };
    const setZoom = value => {
      zoom = Math.max(0.65, Math.min(2.5, value));
      if (zoom <= 1) { panX = 0; panY = 0; }
      artwork.style.setProperty("--preview-zoom", zoom);
      artwork.style.setProperty("--preview-pan-x", `${panX}px`);
      artwork.style.setProperty("--preview-pan-y", `${panY}px`);
      viewport.classList.toggle("is-zoomed", zoom > 1);
      zoomOutput.value = `${Math.round(zoom * 100)}%`;
      zoomOutput.textContent = `${Math.round(zoom * 100)}%`;
    };
    requestAnimationFrame(syncPrintScale);
    preview.querySelector(".final-preview-close").addEventListener("click", () => preview.remove());
    preview.addEventListener("click", event => { if (event.target === preview) preview.remove(); });
    preview.querySelectorAll("[data-zoom]").forEach(button => button.addEventListener("click", () => setZoom(zoom + (button.dataset.zoom === "in" ? 0.2 : -0.2))));
    viewport.addEventListener("wheel", event => {
      event.preventDefault();
      setZoom(zoom + (event.deltaY < 0 ? 0.1 : -0.1));
    }, { passive: false });
    const startPan = event => {
      if (zoom <= 1) return;
      const point = event.touches ? event.touches[0] : event;
      const startX = point.clientX;
      const startY = point.clientY;
      const initialPanX = panX;
      const initialPanY = panY;
      const move = moveEvent => {
        const movePoint = moveEvent.touches ? moveEvent.touches[0] : moveEvent;
        if (moveEvent.cancelable) moveEvent.preventDefault();
        panX = initialPanX + movePoint.clientX - startX;
        panY = initialPanY + movePoint.clientY - startY;
        artwork.style.setProperty("--preview-pan-x", `${panX}px`);
        artwork.style.setProperty("--preview-pan-y", `${panY}px`);
      };
      const stop = () => {
        window.removeEventListener(event.touches ? "touchmove" : "mousemove", move);
      };
      window.addEventListener(event.touches ? "touchmove" : "mousemove", move, { passive: false });
      window.addEventListener(event.touches ? "touchend" : "mouseup", stop, { once: true });
    };
    viewport.addEventListener("mousedown", startPan);
    viewport.addEventListener("touchstart", startPan, { passive: false });
    const renderPreviewView = view => {
      const source = document.createElement("div");
      source.innerHTML = jerseyPreview.innerHTML;
      source.querySelectorAll(".is-selected").forEach(element => element.classList.remove("is-selected"));
      if (view === "total") return source.innerHTML;
      const views = source.querySelectorAll(".modal-jersey-view");
      if (view === "front") return views[0].outerHTML;
      const productStage = view === "back" ? source.querySelector(".modal-back-print-stage") : source.querySelector(".modal-shorts-print-stage");
      const label = view === "back" ? "MẶT SAU" : "QUẦN";
      return `<div class="modal-jersey-view"><span class="modal-jersey-label">${label}</span><div class="modal-apparel-bottom modal-single-apparel">${productStage.outerHTML}</div></div>`;
    };
    preview.querySelectorAll("[data-preview-view]").forEach(button => button.addEventListener("click", () => {
      artwork.innerHTML = renderPreviewView(button.dataset.previewView);
      setZoom(1);
      requestAnimationFrame(syncPrintScale);
    }));
  });
  bindPrintDragging();

  detailModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll
};

window.closeDetailsModal = function() {
  if (!detailModal) return;
  detailModal.classList.remove("active");
  document.body.style.overflow = ""; // Enable scroll
};

window.addEventListener("load", () => {
  const provinceSlug = new URLSearchParams(window.location.search).get("province");
  if (provinceSlug) window.openDetailsModal(provinceSlug);
}, { once: true });

window.loadInCustomizer = function(slug) {
  closeDetailsModal();
  const selectProv = document.getElementById("cust-province");
  if (selectProv) {
    selectProv.value = slug;
    selectProv.dispatchEvent(new Event('change'));
    // Smooth scroll to customizer section
    document.getElementById("personalization").scrollIntoView({ behavior: 'smooth' });
  }
};

function getOrderDesignProvince(name) {
  return PROVINCES_DATA.find(province => province.name === name)
    || state.customizerProvince
    || PROVINCES_DATA[0];
}

function updateOrderDesignPreview(name) {
  const province = getOrderDesignProvince(name);
  const image = document.getElementById('order-design-preview-image');
  const title = document.getElementById('order-design-preview-name');
  if (!province || !image || !title) return;
  const images = province.images || DESIGN_ASSETS[province.slug];
  image.src = images?.front || '';
  image.alt = `Mẫu áo ${province.name}`;
  title.textContent = province.name;
}

function populateOrderDesignOptions(selectedName) {
  const select = document.getElementById('order-design');
  if (!select) return;
  select.innerHTML = PROVINCES_DATA.map(province =>
    `<option value="${province.name}">${String(province.id).padStart(2, '0')} — ${province.name}</option>`
  ).join('');
  const province = getOrderDesignProvince(selectedName);
  select.value = province.name;
  updateOrderDesignPreview(province.name);
}

window.orderJersey = function(provName) {
  const orderModal = document.getElementById('order-modal');
  if (!orderModal) return;
  const designInput = document.getElementById('order-design');
  const printNameInput = document.getElementById('order-print-name');
  const printNumberInput = document.getElementById('order-print-number');
  const modalPrintName = document.getElementById('modal-custom-name');
  const modalPrintNumber = document.getElementById('modal-custom-number');
  const message = document.getElementById('order-form-message');
  const submitButton = document.querySelector('#order-form .order-submit');

  populateOrderDesignOptions(provName);
  const isDetailOrder = Boolean(document.getElementById('detail-modal')?.classList.contains('active') && modalPrintName && modalPrintNumber);
  const orderForm = document.getElementById('order-form');
  if (orderForm) orderForm.dataset.orderSource = isDetailOrder ? 'detail' : 'customizer';
  printNameInput.value = modalPrintName?.value?.trim() || document.getElementById('cust-name')?.value?.trim() || provName;
  printNumberInput.value = modalPrintNumber?.value?.trim() || document.getElementById('cust-number')?.value?.trim() || '34';
  message.textContent = '';
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.innerHTML = 'GỬI THÔNG TIN ĐẶT ÁO <span>→</span>';
  }
  orderModal.classList.add('active');
  orderModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('order-fullname')?.focus(), 50);
};

function closeOrderForm() {
  const orderModal = document.getElementById('order-modal');
  if (!orderModal) return;
  orderModal.classList.remove('active');
  orderModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = document.getElementById('detail-modal')?.classList.contains('active') ? 'hidden' : '';
}

document.addEventListener('DOMContentLoaded', () => {
  const orderModal = document.getElementById('order-modal');
  const orderForm = document.getElementById('order-form');
  const orderFab = document.getElementById('order-fab');
  const orderNudge = document.getElementById('order-nudge');
  let skippedOrderClick = false;
  const sectionIntroductions = [
    ['34 BẢN SẮC', 'Bắt đầu hành trình khám phá 34 tỉnh thành.', 'KHÁM PHÁ<br>TRANG'],
    ['CÂU CHUYỆN VIỆT NAM', 'Nơi văn hoá địa phương gặp tinh thần thể thao.', 'CÂU CHUYỆN<br>VIỆT NAM'],
    ['BỘ SƯU TẬP 34 TỈNH', 'Tìm mẫu áo mang màu sắc quê hương bạn.', 'XEM 34<br>THIẾT KẾ'],
    ['THIẾT KẾ TIÊU BIỂU', 'Khám phá câu chuyện của mẫu áo Cà Mau.', 'MẪU ÁO<br>TIÊU BIỂU'],
    ['DNA THIẾT KẾ', 'Từ vùng đất đến từng đường nét trên áo đấu.', 'DNA<br>THIẾT KẾ'],
    ['CÔNG NGHỆ ÁO ĐẤU', 'Xem những chi tiết tạo nên sự thoải mái khi vận động.', 'CÔNG NGHỆ<br>ÁO ĐẤU'],
    ['34 SẮC MÀU', 'Mỗi mẫu áo là một mảnh ghép của Việt Nam.', '34 SẮC MÀU<br>VIỆT NAM'],
    ['MỘT TINH THẦN', 'Khác biệt bản sắc, thống nhất niềm tự hào.', 'MỘT TINH THẦN<br>VIỆT NAM'],
    ['CHI TIẾT CẬN CẢNH', 'Ngắm kỹ chất liệu, họa tiết và phom dáng.', 'XEM CHI TIẾT<br>CẬN CẢNH'],
    ['PHÒNG THIẾT KẾ', 'Tự cá nhân hoá mẫu áo của đội bóng bạn.', 'TỰ TẠO<br>MẪU ÁO'],
    ['CỘNG ĐỒNG 34 TỈNH', 'Xem niềm tự hào quê hương được lan toả.', 'CỘNG ĐỒNG<br>34 TỈNH'],
    ['BÌNH CHỌN CỘNG ĐỒNG', 'Góp tiếng nói cho mẫu áo quê hương tiếp theo.', 'BÌNH CHỌN<br>QUÊ HƯƠNG'],
    ['HÀNH TRÌNH TIẾP NỐI', 'Tìm màu áo đại diện cho nơi bạn thuộc về.', 'TÌM MÀU ÁO<br>CỦA BẠN']
  ];
  let sectionCtaTimer;
  let sectionNudgeTimer;
  const showOrderCta = () => {
    if (!orderFab) return;
    orderFab.innerHTML = 'ĐẶT HÀNG<br>NGAY';
    orderFab.setAttribute('aria-label', 'Mở form đặt hàng');
    orderFab.title = 'Đặt hàng mẫu áo này';
    if (orderNudge) orderNudge.innerHTML = '<strong>ĐẶT MẪU ÁO RIÊNG</strong><span class="order-nudge-copy">Đội ngũ sẽ hỗ trợ bạn từ ý tưởng đến thành phẩm.</span>';
  };
  const showSectionCta = index => {
    const [heading, description, fabLabel] = sectionIntroductions[index] || sectionIntroductions[0];
    window.clearTimeout(sectionCtaTimer);
    orderFab.innerHTML = fabLabel;
    orderFab.setAttribute('aria-label', `${heading}. Bấm để mở form đặt hàng.`);
    orderFab.title = 'Đặt hàng mẫu áo này';
    if (orderNudge) {
      orderNudge.innerHTML = `<strong>${heading}</strong><span class="order-nudge-copy">${description}</span>`;
      orderNudge.classList.add('show');
      window.clearTimeout(sectionNudgeTimer);
      sectionNudgeTimer = window.setTimeout(() => orderNudge.classList.remove('show'), 5500);
    }
    sectionCtaTimer = window.setTimeout(showOrderCta, 4500);
  };
  const placeOrderNudge = () => {
    if (!orderFab || !orderNudge) return;
    const fab = orderFab.getBoundingClientRect();
    const width = Math.min(orderNudge.offsetWidth || 260, window.innerWidth - 24);
    const height = orderNudge.offsetHeight || 54;
    orderNudge.classList.toggle('arrow-right', fab.left + fab.width / 2 > window.innerWidth / 2);
    orderNudge.classList.toggle('arrow-left', fab.left + fab.width / 2 <= window.innerWidth / 2);
    orderNudge.style.left = `${Math.max(12, Math.min(window.innerWidth - width - 12, fab.left + (fab.width - width) / 2))}px`;
    orderNudge.style.right = 'auto';
    orderNudge.style.bottom = 'auto';
    orderNudge.style.top = `${Math.max(12, fab.top - height - 6)}px`;
  };
  const openQuickOrder = () => {
    if (skippedOrderClick) { skippedOrderClick = false; return; }
    const province = state.customizerProvince?.name || 'Mẫu áo tự thiết kế';
    window.orderJersey(province);
    orderNudge?.classList.remove('show');
  };
  orderFab?.addEventListener('click', openQuickOrder);
  if (orderFab) {
    try {
      const savedPosition = JSON.parse(localStorage.getItem('vn34-order-fab-position') || 'null');
      if (savedPosition) { orderFab.style.left = `${savedPosition.x}px`; orderFab.style.top = `${savedPosition.y}px`; orderFab.style.right = 'auto'; orderFab.style.bottom = 'auto'; }
    } catch { /* Ignore unavailable storage. */ }
    let pointerStart = null;
    const resetFabParallax = () => {
      orderFab.style.setProperty('--fab-parallax-x', '0px');
      orderFab.style.setProperty('--fab-parallax-y', '0px');
      orderFab.style.setProperty('--fab-parallax-r', '0deg');
    };
    let fabLandingTimer;
    const playFabLanding = () => {
      orderFab.classList.remove('landing');
      void orderFab.offsetWidth;
      orderFab.classList.add('landing');
    };
    const scheduleFabLanding = () => {
      window.clearTimeout(fabLandingTimer);
      fabLandingTimer = window.setTimeout(playFabLanding, 20);
    };
    orderFab.addEventListener('animationend', event => {
      if (event.animationName === 'orderFabLand') orderFab.classList.remove('landing');
    });
    orderFab.addEventListener('transitionend', event => {
      if (event.target === orderFab && (event.propertyName === 'left' || event.propertyName === 'top')) scheduleFabLanding();
    });
    window.addEventListener('pointermove', event => {
      if (pointerStart) return;
      const rect = orderFab.getBoundingClientRect();
      const horizontal = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2)));
      const vertical = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2)));
      orderFab.style.setProperty('--fab-parallax-x', `${horizontal * 7}px`);
      orderFab.style.setProperty('--fab-parallax-y', `${vertical * 7}px`);
      orderFab.style.setProperty('--fab-parallax-r', `${horizontal * 5}deg`);
    }, { passive: true });
    const sections = Array.from(document.querySelectorAll('section'));
    let activeSectionIndex = -1;
    const moveFabAcrossSections = () => {
      if (pointerStart || !sections.length) return;
      const viewportCenter = window.innerHeight / 2;
      const nextIndex = Math.max(0, sections.findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
      }));
      if (nextIndex === activeSectionIndex) return;
      activeSectionIndex = nextIndex;
      showSectionCta(nextIndex);
      const rect = orderFab.getBoundingClientRect();
      const margin = Math.max(14, window.innerWidth * 0.035);
      const destinationX = nextIndex % 2 === 0 ? margin : window.innerWidth - rect.width - margin;
      const verticalStops = [0.7, 0.22, 0.62, 0.32];
      const destinationY = margin + (window.innerHeight - rect.height - margin * 2) * verticalStops[nextIndex % verticalStops.length];
      orderFab.style.left = `${destinationX}px`;
      orderFab.style.top = `${destinationY}px`;
      orderFab.style.right = 'auto';
      orderFab.style.bottom = 'auto';
      orderFab.style.setProperty('--fab-route-r', `${nextIndex % 2 === 0 ? -4 : 4}deg`);
      placeOrderNudge();
      setTimeout(placeOrderNudge, 850);
    };
    let fabRouteFrame = null;
    const scheduleFabRoute = () => {
      if (fabRouteFrame) return;
      fabRouteFrame = window.requestAnimationFrame(() => {
        fabRouteFrame = null;
        moveFabAcrossSections();
      });
    };
    window.addEventListener('scroll', scheduleFabRoute, { passive: true });
    moveFabAcrossSections();
    window.addEventListener('blur', resetFabParallax);
    orderFab.addEventListener('pointerdown', event => {
      pointerStart = { x: event.clientX, y: event.clientY, left: orderFab.getBoundingClientRect().left, top: orderFab.getBoundingClientRect().top, moved: false };
      orderFab.setPointerCapture(event.pointerId);
    });
    orderFab.addEventListener('pointermove', event => {
      if (!pointerStart) return;
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      if (Math.abs(dx) + Math.abs(dy) > 5) pointerStart.moved = true;
      if (!pointerStart.moved) return;
      const bounds = orderFab.getBoundingClientRect();
      const x = Math.max(8, Math.min(window.innerWidth - bounds.width - 8, pointerStart.left + dx));
      const y = Math.max(8, Math.min(window.innerHeight - bounds.height - 8, pointerStart.top + dy));
      orderFab.classList.add('dragging');
      resetFabParallax();
      orderFab.style.left = `${x}px`; orderFab.style.top = `${y}px`; orderFab.style.right = 'auto'; orderFab.style.bottom = 'auto';
      placeOrderNudge();
    });
    orderFab.addEventListener('pointerup', () => {
      if (!pointerStart) return;
      if (pointerStart.moved) {
        skippedOrderClick = true;
        try { localStorage.setItem('vn34-order-fab-position', JSON.stringify({ x: orderFab.offsetLeft, y: orderFab.offsetTop })); } catch { /* Ignore unavailable storage. */ }
        setTimeout(() => { skippedOrderClick = false; }, 150);
      }
      orderFab.classList.remove('dragging');
      if (pointerStart.moved) playFabLanding();
      pointerStart = null;
    });
  }
  if (orderNudge) {
    const showOrderNudge = () => {
      placeOrderNudge();
      orderNudge.classList.add('show');
      setTimeout(() => orderNudge.classList.remove('show'), 6500);
    };
    setTimeout(showOrderNudge, 9000);
    setInterval(showOrderNudge, 32000);
  }
  orderModal?.querySelector('.order-form-close')?.addEventListener('click', closeOrderForm);
  orderModal?.addEventListener('click', event => {
    if (event.target === orderModal) closeOrderForm();
  });
  document.getElementById('order-design')?.addEventListener('change', event => {
    const province = getOrderDesignProvince(event.target.value);
    updateOrderDesignPreview(province.name);
    state.customizerProvince = province;
    const customizerProvinceSelect = document.getElementById('cust-province');
    if (customizerProvinceSelect) customizerProvinceSelect.value = province.slug;
    updateCustomizerPreview();
  });
  orderForm?.addEventListener('submit', event => {
    event.preventDefault();
    submitCustomizedOrder(orderForm);
  });
  document.getElementById('customizer-order-button')?.addEventListener('click', () => {
    const province = state.customizerProvince?.name || 'Mẫu áo tự thiết kế';
    window.orderJersey(province);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && orderModal?.classList.contains('active')) closeOrderForm();
  });
});

// --- SHOWCASE MARQUEE COMPONENT ---
function initShowcaseMarquee() {
  const marquee = document.getElementById("marquee-content");
  if (!marquee) return;

  // Clear original
  marquee.innerHTML = "";

  // Remove duplicate clone if exists
  const existingClone = document.getElementById("marquee-content-clone");
  if (existingClone) existingClone.remove();

  // Render all 34 jerseys inside marquee
  PROVINCES_DATA.forEach(p => {
    const item = document.createElement("div");
    item.className = "marquee-item";
    item.setAttribute("data-slug", p.slug);
    
    const frontImg = p.images?.front || (DESIGN_ASSETS[p.slug]?.front);
    const visualHTML = frontImg
      ? `<img src="${frontImg}" alt="${p.name}" class="marquee-jersey-img">`
      : generateJerseySVG(p, 'front');

    item.innerHTML = `
      ${visualHTML}
      <div style="text-align: center;">
        <h4 class="marquee-name">${p.name}</h4>
        <span class="marquee-region">${p.region === 'bac' ? 'Miền Bắc' : p.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
    `;
    marquee.appendChild(item);
  });

  // Duplicate the children to make scrolling continuous
  const cloned = marquee.cloneNode(true);
  cloned.id = "marquee-content-clone";
  marquee.parentNode.appendChild(cloned);

  // Click delegation so both original and cloned 34 items open details modal
  const container = document.querySelector(".showcase-marquee-container");
  if (container && !container.dataset.boundMarqueeClick) {
    container.dataset.boundMarqueeClick = "true";
    container.addEventListener("click", (e) => {
      const targetItem = e.target.closest(".marquee-item");
      if (targetItem && targetItem.dataset.slug) {
        openDetailsModal(targetItem.dataset.slug);
      }
    });
  }
}

// --- PRODUCT TECHNOLOGY HOTSPOTS ---
function initProductTech() {
  const hotspots = document.querySelectorAll(".tech-hotspot");
  const cards = document.querySelectorAll(".tech-card");

  if (hotspots.length === 0) return;

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("click", () => {
      const point = hotspot.getAttribute("data-point");
      
      // Active states for hotspots
      hotspots.forEach(h => h.classList.remove("active"));
      hotspot.classList.add("active");

      // Active states for descriptions
      cards.forEach(card => {
        card.classList.remove("active");
        if (card.getAttribute("data-point") === point) {
          card.classList.add("active");
          // Smooth scroll inside details box if needed
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const point = card.getAttribute("data-point");

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      hotspots.forEach(h => {
        h.classList.remove("active");
        if (h.getAttribute("data-point") === point) {
          h.classList.add("active");
        }
      });
    });
  });
}

// --- SCROLL ANIMATIONS (INTERSECTION OBSERVER) ---
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// --- PREMIUM CUSTOM CURSOR INTERACTION ---
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");
  if (!cursor || !cursorDot) return;

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.opacity = "1";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorDot.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorDot.style.opacity = "0";
  });

  const updateHoverElements = () => {
    const hoverTargets = document.querySelectorAll("a, button, select, input, .map-hotspot, .card-perspective, .tech-card, .marquee-item, .view-btn");
    hoverTargets.forEach(el => {
      el.removeEventListener("mouseenter", addHoverClass);
      el.removeEventListener("mouseleave", removeHoverClass);
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });
  };

  function addHoverClass() {
    cursor.classList.add("hovering");
    cursorDot.classList.add("hovering");
    playTactileSound('hover');
  }

  function removeHoverClass() {
    cursor.classList.remove("hovering");
    cursorDot.classList.remove("hovering");
  }

  const observer = new MutationObserver(() => {
    updateHoverElements();
  });
  const grid = document.getElementById("collection-grid");
  if (grid) {
    observer.observe(grid, { childList: true });
  }

  updateHoverElements();
}

// --- SYNTHESIZED TACTILE SOUND ENGINE ---
let audioCtx = null;
let isSoundMuted = true;

function initTactileAudio() {
  const toggleBtn = document.getElementById("sound-toggle");
  const icon = document.getElementById("sound-icon");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    isSoundMuted = !isSoundMuted;
    if (isSoundMuted) {
      if (icon) icon.textContent = "🔇";
      toggleBtn.style.color = "var(--color-muted)";
      toggleBtn.style.borderColor = "var(--color-light-gray)";
    } else {
      if (icon) icon.textContent = "🔊";
      toggleBtn.style.color = "var(--color-vietnam-gold)";
      toggleBtn.style.borderColor = "var(--color-vietnam-gold)";
      
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      playTactileSound('success');
    }
  });

  // Bind inputs
  setTimeout(() => {
    const inputs = document.querySelectorAll("#cust-name, #cust-number, #cust-province, .view-btn, input[type='color']");
    inputs.forEach(input => {
      input.addEventListener("input", () => playTactileSound('click'));
      input.addEventListener("change", () => playTactileSound('click'));
    });
  }, 100);
}

function playTactileSound(type = 'click') {
  if (isSoundMuted || !audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'hover') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.02);
    
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
    
    osc.start(now);
    osc.stop(now + 0.02);
  } else if (type === 'click') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.05);

    gainNode.gain.setValueAtTime(0.05, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'success') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    
    gainNode.gain.setValueAtTime(0.04, now);
    gainNode.gain.setValueAtTime(0.04, now + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.start(now);
    osc.stop(now + 0.35);
  }
}

// --- 3D PERSPECTIVE TILT ---
function initCardTiltEffect() {
  const cards = document.querySelectorAll(".card-perspective");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;

      const xc = (x / width) - 0.5;
      const yc = (y / height) - 0.5;

      const rotateY = xc * 16;
      const rotateX = -yc * 16;

      card.classList.add("tilting");
      // Appends tilt offset to the 180deg card flip
      cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${180 - rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      card.classList.remove("tilting");
      cardInner.style.transform = "";
    });
  });
}

// --- CONFETTI EMITTER BURST ---
function initConfettiBurst() {
  const submitBtn = document.querySelector("#customizer-form .btn-primary");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", () => {
    // Play Victory Sound
    playTactileSound('success');

    const rect = submitBtn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const colors = ['#da251d', '#ffbe00', '#ffffff', '#00f0ff', '#ff007f', '#2ecc71'];

    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      p.className = "confetti-particle";
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 80 + Math.random() * 120;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 40;
      const rot = 180 + Math.random() * 360;

      p.style.setProperty("--tx", tx + "px");
      p.style.setProperty("--ty", ty + "px");
      p.style.setProperty("--rot", rot + "deg");

      p.style.left = startX + "px";
      p.style.top = startY + "px";
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 6 + Math.random() * 8;
      p.style.width = size + "px";
      p.style.height = size + "px";
      
      document.body.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 1200);
    }
  });
}

// --- VN/34 FUSION EXPERIENCE: journey progress + province personality match ---
document.addEventListener('DOMContentLoaded', () => {
  const fusionProgress = document.querySelector('.fusion-progress i');
  if (fusionProgress) {
    const updateFusionProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      fusionProgress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    window.addEventListener('scroll', updateFusionProgress, { passive: true });
    updateFusionProgress();
  }

  const modal = document.getElementById('fusion-match');
  const openButton = document.getElementById('fusion-match-open');
  if (!modal || !openButton) return;

  const closeButton = modal.querySelector('.fusion-match-close');
  const jerseySlot = document.getElementById('fusion-match-jersey');
  const resultName = document.getElementById('fusion-result-name');
  const resultCopy = document.getElementById('fusion-result-copy');
  const resultView = document.getElementById('fusion-result-view');
  let selectedProvince = PROVINCES_DATA[0];
  let folkRound = 0;
  let currentHomeNode = 'root';
  let journeyChoices = [];

  // Adaptive decision tree. Every terminal answer maps to exactly one province.
  const HOME_TREE = {
    root: { question: 'QUÊ BẠN NẰM Ở VÙNG NÀO?', hint: 'Chọn vùng địa lý gần nhất với nơi bạn sinh ra hoặc lớn lên.', choices: [
      { text: 'Phía Bắc — nơi có mùa đông và những lớp di sản lâu đời', label: 'MIỀN BẮC', next: 'north_group' },
      { text: 'Dải miền Trung — nắng gió, di sản và đường bờ biển dài', label: 'MIỀN TRUNG', next: 'central_group' },
      { text: 'Phương Nam — phù sa, miệt vườn và nhịp sống hào sảng', label: 'MIỀN NAM', next: 'south_group' },
      { text: 'Cao nguyên — đất đỏ, rừng thông, cà phê và đại ngàn', label: 'TÂY NGUYÊN', next: 'highland_leaf' }
    ]},
    north_group: { question: 'KÝ ỨC BẮC BỘ NÀO GẦN QUÊ BẠN?', hint: 'Lựa chọn này sẽ mở đúng nhóm địa phương liên quan.', choices: [
      { text: 'Kinh kỳ, quan họ, cố đô và những lớp văn hóa cổ', label: 'VÙNG DI SẢN', next: 'north_culture' },
      { text: 'Cảng biển, vịnh đá, cánh đồng ven biển và nhà thờ cổ', label: 'VÙNG DUYÊN HẢI', next: 'north_coast' },
      { text: 'Đá tai mèo, ruộng bậc thang, thác lớn và núi biên cương', label: 'VÙNG NÚI PHÍA BẮC', next: 'north_mountain' },
      { text: 'Non nước đá vôi, sông Mã và miền chuyển tiếp Bắc–Trung', label: 'VÙNG CỬA NGÕ', next: 'north_gateway' }
    ]},
    north_culture: { question: 'BIỂU TƯỢNG NÀO LÀ QUÊ BẠN?', hint: 'Mỗi lựa chọn chỉ thuộc về một địa phương.', choices: [
      { text: 'Hồ Gươm, cầu Thê Húc và ba mươi sáu phố phường', label: 'NGHÌN NĂM VĂN HIẾN', result: 'ha-noi' },
      { text: 'Dân ca quan họ, áo tứ thân và miền Kinh Bắc', label: 'LIỀN ANH LIỀN CHỊ', result: 'bac-ninh' },
      { text: 'Tràng An, Tam Cốc và núi đá vôi soi bóng sông', label: 'NON NƯỚC TRÀNG AN', result: 'ninh-binh' },
      { text: 'Thành Nhà Hồ, trống đồng Đông Sơn và dòng sông Mã', label: 'ĐỊA LINH XỨ THANH', result: 'thanh-hoa' }
    ]},
    north_coast: { question: 'HÌNH ẢNH NÀO THUỘC QUÊ BẠN?', hint: 'Chọn ký ức địa phương rõ nhất.', choices: [
      { text: 'Hoa phượng đỏ, bến cảng và dòng Tam Bạc', label: 'THÀNH PHỐ CẢNG', result: 'hai-phong' },
      { text: 'Vịnh Hạ Long, than đá và những đảo đá giữa biển', label: 'KỲ QUAN VỊNH RỒNG', result: 'quang-ninh' },
      { text: 'Cánh đồng lúa, bánh cáy và chùa Keo cổ kính', label: 'QUÊ LÚA', result: 'thai-binh' },
      { text: 'Tháp Phổ Minh, nhà thờ và tiếng sóng vùng cửa biển', label: 'ĐẤT HỌC THÀNH NAM', result: 'nam-dinh' }
    ]},
    north_mountain: { question: 'DẤU ẤN NÀO LÀ QUÊ BẠN?', hint: 'Bốn biểu tượng của bốn miền biên cương khác nhau.', choices: [
      { text: 'Cột cờ Lũng Cú, cao nguyên đá và hoa tam giác mạch', label: 'MIỀN ĐÁ NỞ HOA', result: 'ha-giang' },
      { text: 'Fansipan, Sa Pa và ruộng bậc thang trong mây', label: 'NƠI GẶP GỠ ĐẤT TRỜI', result: 'lao-cai' },
      { text: 'Thác Bản Giốc, động Ngườm Ngao và miền non nước xanh', label: 'NON NƯỚC BIÊN CƯƠNG', result: 'cao-bang' },
      { text: 'Phố Kỳ Lừa, nàng Tô Thị và chùa Tam Thanh', label: 'XỨ LẠNG', result: 'lang-son' }
    ]},
    north_gateway: { question: 'ĐỊA DANH NÀO KÉO BẠN VỀ QUÊ?', hint: 'Hai miền cửa ngõ với hai bản sắc rất riêng.', choices: [
      { text: 'Tràng An, cố đô Hoa Lư và những dòng sông xuyên núi', label: 'NINH BÌNH', result: 'ninh-binh' },
      { text: 'Sông Mã, Lam Sơn và những lớp trầm tích Đông Sơn', label: 'THANH HÓA', result: 'thanh-hoa' },
      { text: 'Chùa Keo, đồng lúa và vị ngọt của bánh cáy', label: 'THÁI BÌNH', result: 'thai-binh' },
      { text: 'Phố Hiến xưa, nhãn lồng và bãi bồi sông Hồng', label: 'GẦN PHỐ HIẾN', result: 'nam-dinh' }
    ]},
    central_group: { question: 'MIỀN TRUNG TRONG BẠN CÓ HÌNH DÁNG NÀO?', hint: 'Chọn cụm ký ức gần với quê bạn nhất.', choices: [
      { text: 'Kinh thành, phố cổ, thành lũy và văn hóa lâu đời', label: 'MIỀN DI SẢN', next: 'central_heritage' },
      { text: 'Thành phố biển, vịnh xanh, ghềnh đá và võ đường', label: 'MIỀN DUYÊN HẢI', next: 'central_coast' },
      { text: 'Ví giặm, gió Lào và những miền đất nhiều thử thách', label: 'BẮC TRUNG BỘ', next: 'central_north' },
      { text: 'Đồi cát, thanh long và dải biển nhiều nắng nhất', label: 'CỰC NAM TRUNG BỘ', next: 'central_south' }
    ]},
    central_heritage: { question: 'DI SẢN NÀO GẮN VỚI QUÊ BẠN?', hint: 'Mỗi lựa chọn là một căn cước địa phương.', choices: [
      { text: 'Kinh thành, sông Hương, núi Ngự và nón bài thơ', label: 'XỨ HUẾ', result: 'hue' },
      { text: 'Phố cổ Hội An, thánh địa Mỹ Sơn và rượu Hồng Đào', label: 'ĐẤT QUẢNG', result: 'quang-nam' },
      { text: 'Vĩ tuyến 17, cầu Hiền Lương và dòng Bến Hải', label: 'ĐẤT LỬA', result: 'quang-tri' },
      { text: 'Núi Ấn, sông Trà và đảo Lý Sơn giữa biển', label: 'NÚI ẤN SÔNG TRÀ', result: 'quang-ngai' }
    ]},
    central_coast: { question: 'ĐƯỜNG BỜ BIỂN NÀO LÀ QUÊ BẠN?', hint: 'Những biểu tượng không thể nhầm lẫn của duyên hải miền Trung.', choices: [
      { text: 'Cầu Rồng, sông Hàn và thành phố đáng sống', label: 'ĐÀ NẴNG', result: 'da-nang' },
      { text: 'Vịnh Nha Trang, trầm hương và tháp Bà Ponagar', label: 'XỨ TRẦM HƯƠNG', result: 'khanh-hoa' },
      { text: 'Gành Đá Đĩa, hoa vàng cỏ xanh và đầm Ô Loan', label: 'XỨ NẪU', result: 'phu-yen' },
      { text: 'Eo Gió, Kỳ Co và miền đất võ Tây Sơn', label: 'ĐẤT VÕ TRỜI VĂN', result: 'binh-dinh' }
    ]},
    central_north: { question: 'CÂU NÀO NHẮC ĐÚNG QUÊ BẠN?', hint: 'Nhận diện qua giọng nói, lịch sử và cảnh sắc.', choices: [
      { text: 'Ví giặm, quê Bác, núi Hồng và dòng Lam', label: 'XỨ NGHỆ', result: 'nghe-an' },
      { text: 'Cầu Hiền Lương, địa đạo Vịnh Mốc và đất lửa anh hùng', label: 'QUẢNG TRỊ', result: 'quang-tri' },
      { text: 'Sông Trà Khúc, núi Thiên Ấn và tỏi Lý Sơn', label: 'QUẢNG NGÃI', result: 'quang-ngai' },
      { text: 'Thành Nhà Hồ, biển Sầm Sơn và dòng sông Mã', label: 'XỨ THANH', result: 'thanh-hoa' }
    ]},
    central_south: { question: 'NẮNG GIÓ NÀO LÀ QUÊ BẠN?', hint: 'Chọn dấu hiệu bạn gặp thường xuyên nhất.', choices: [
      { text: 'Đồi cát bay, thanh long và tháp Chăm bên biển', label: 'MIỀN CÁT TRẮNG', result: 'binh-thuan' },
      { text: 'Gành Đá Đĩa và những bờ biển xanh như ngọc', label: 'PHÚ YÊN', result: 'phu-yen' },
      { text: 'Eo Gió, tháp Chăm và tiếng trống võ Tây Sơn', label: 'BÌNH ĐỊNH', result: 'binh-dinh' },
      { text: 'Vịnh biển, trầm hương và những hòn đảo đầy nắng', label: 'KHÁNH HÒA', result: 'khanh-hoa' }
    ]},
    highland_leaf: { question: 'CAO NGUYÊN NÀO LÀ QUÊ BẠN?', hint: 'Hai miền cao nguyên với hai nhịp sống rất khác.', choices: [
      { text: 'Rừng thông, sương lạnh, hoa và những đồi chè', label: 'THÀNH PHỐ NGÀN HOA', result: 'lam-dong' },
      { text: 'Cà phê, voi, cồng chiêng và sử thi đại ngàn', label: 'THỦ PHỦ CÀ PHÊ', result: 'dak-lak' },
      { text: 'Biển xanh và trầm hương — có lẽ bạn gần duyên hải hơn', label: 'VỀ DUYÊN HẢI', result: 'khanh-hoa' },
      { text: 'Nắng, cát và thanh long — có lẽ bạn ở phía đông cao nguyên', label: 'VỀ MIỀN CÁT', result: 'binh-thuan' }
    ]},
    south_group: { question: 'PHƯƠNG NAM TRONG BẠN LÀ KHUNG CẢNH NÀO?', hint: 'Chọn nhóm ký ức gần nhất với nơi bạn lớn lên.', choices: [
      { text: 'Đô thị lớn, khu công nghiệp, núi thiêng và biển nghỉ dưỡng', label: 'ĐÔNG NAM BỘ', next: 'south_urban' },
      { text: 'Chợ nổi, vườn cây, cù lao và những dòng sông phù sa', label: 'MIỀN SÔNG NƯỚC', next: 'south_mekong' },
      { text: 'Biển Tây, đảo ngọc, rừng ngập mặn và đất tận cùng', label: 'MIỀN BIỂN TÂY', next: 'south_coast' },
      { text: 'Núi Bà, hồ Dầu Tiếng và miền biên giới đầy nắng', label: 'MIỀN BIÊN GIỚI', next: 'south_border' }
    ]},
    south_urban: { question: 'BIỂU TƯỢNG ĐÔNG NAM BỘ NÀO LÀ QUÊ BẠN?', hint: 'Bốn nhịp sống, bốn căn cước khác nhau.', choices: [
      { text: 'Chợ Bến Thành, sông Sài Gòn và thành phố không ngủ', label: 'TP. HỒ CHÍ MINH', result: 'tp-hcm' },
      { text: 'Một dòng sông lớn, làng bưởi và những khu công nghiệp lâu đời', label: 'ĐỒNG NAI', result: 'dong-nai' },
      { text: 'Bãi Sau, ngọn hải đăng và những giàn khoan ngoài biển', label: 'VŨNG TÀU', result: 'vung-tau' },
      { text: 'Núi Bà Đen, bánh tráng phơi sương và hồ Dầu Tiếng', label: 'TÂY NINH', result: 'tay-ninh' }
    ]},
    south_mekong: { question: 'DÒNG SÔNG NÀO CHẢY QUA KÝ ỨC BẠN?', hint: 'Mỗi miền Tây có một dấu ấn rất riêng.', choices: [
      { text: 'Bến Ninh Kiều, chợ nổi Cái Răng và gạo trắng nước trong', label: 'TÂY ĐÔ', result: 'can-tho' },
      { text: 'Xứ dừa, những cù lao xanh và dòng Hàm Luông', label: 'XỨ DỪA', result: 'ben-tre' },
      { text: 'Chợ nổi Cái Bè, vú sữa Lò Rèn và sông Tiền', label: 'MIỀN TRÁI NGỌT', result: 'tien-giang' },
      { text: 'Núi Sam, rừng tràm Trà Sư và miền Thất Sơn', label: 'BẢY NÚI', result: 'an-giang' }
    ]},
    south_coast: { question: 'BIỂN PHƯƠNG NAM NÀO LÀ QUÊ BẠN?', hint: 'Chọn cảnh biển thân thuộc nhất.', choices: [
      { text: 'Mũi đất tận cùng, rừng đước và nơi đất nở về phương Nam', label: 'ĐẤT MŨI', result: 'ca-mau' },
      { text: 'Phú Quốc, Hà Tiên và hoàng hôn trên biển Tây', label: 'ĐẢO NGỌC', result: 'kien-giang' },
      { text: 'Bãi Sau, mũi Nghinh Phong và ngọn hải đăng', label: 'THÀNH PHỐ BIỂN', result: 'vung-tau' },
      { text: 'Sông Hậu, rừng tràm và mùa nước nổi', label: 'MIỀN THẤT SƠN', result: 'an-giang' }
    ]},
    south_border: { question: 'DẤU ẤN BIÊN GIỚI NÀO LÀ QUÊ BẠN?', hint: 'Chọn biểu tượng gần với tuổi thơ nhất.', choices: [
      { text: 'Núi Bà Đen và bánh tráng phơi sương', label: 'TÂY NINH', result: 'tay-ninh' },
      { text: 'Núi Sam, miếu Bà Chúa Xứ và rừng tràm Trà Sư', label: 'AN GIANG', result: 'an-giang' },
      { text: 'Hà Tiên, Phú Quốc và biển trời Tây Nam', label: 'KIÊN GIANG', result: 'kien-giang' },
      { text: 'Rừng đước, Đất Mũi và những con sông chảy ra biển', label: 'CÀ MAU', result: 'ca-mau' }
    ]}
  };

  const showStep = step => modal.querySelectorAll('.fusion-step').forEach(el => {
    el.classList.toggle('active', el.dataset.step === String(step));
  });
  const openMatcher = () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    startFolkQuiz();
    showStep(1);
  };
  const closeMatcher = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  openButton.addEventListener('click', openMatcher);
  if (closeButton) closeButton.addEventListener('click', closeMatcher);
  modal.addEventListener('click', event => { if (event.target === modal) closeMatcher(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMatcher(); });

  // Invite visitors after three seconds without interrupting their reading.
  const guessNudge = document.getElementById('guess-nudge');
  if (guessNudge) {
    const guessNudgeClose = guessNudge.querySelector('.guess-nudge-close');
    const hideGuessNudge = () => guessNudge.classList.remove('show', 'attention');
    const launchFromNudge = () => { hideGuessNudge(); openMatcher(); };
    const showGuessNudge = () => {
      if (modal.classList.contains('open')) return;
      guessNudge.classList.add('show', 'attention');
      openButton.classList.add('attention');
      setTimeout(() => openButton.classList.remove('attention'), 900);
      setTimeout(hideGuessNudge, 10000);
    };
    setTimeout(showGuessNudge, 3000);
    setTimeout(showGuessNudge, 120000);
    guessNudge.addEventListener('click', event => { if (!event.target.closest('.guess-nudge-close')) launchFromNudge(); });
    guessNudge.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') launchFromNudge(); });
    if (guessNudgeClose) guessNudgeClose.addEventListener('click', event => { event.stopPropagation(); hideGuessNudge(); });
  }

  function startFolkQuiz() {
    folkRound = 1;
    currentHomeNode = 'root';
    journeyChoices = [];
    renderFolkQuestion();
  }

  function renderFolkQuestion() {
    const step = HOME_TREE[currentHomeNode];
    document.getElementById('folk-progress').textContent = `CÂU ${String(folkRound).padStart(2, '0')} · ĐANG THU HẸP BẢN ĐỒ`;
    document.getElementById('folk-question').innerHTML = step.question.replace(' NÀO ', ' NÀO<br>');
    document.getElementById('folk-quote').textContent = step.hint;
    const feedback = document.getElementById('folk-feedback');
    feedback.textContent = '';
    feedback.className = 'folk-feedback';
    const options = document.getElementById('folk-options');
    options.innerHTML = step.choices.map((choice, index) => `<button data-option="${index}" data-label="DẤU HIỆU ${String(index + 1).padStart(2, '0')}">${choice.text}</button>`).join('');
    options.querySelectorAll('button').forEach(button => button.addEventListener('click', () => chooseFolkPath(button, step.choices[Number(button.dataset.option)])));
  }

  function chooseFolkPath(button, choice) {
    const buttons = [...document.querySelectorAll('#folk-options button')];
    buttons.forEach(item => item.disabled = true);
    button.classList.add('chosen-answer');
    journeyChoices.push(choice.label);
    const feedback = document.getElementById('folk-feedback');
    feedback.textContent = 'Đã ghi nhận lựa chọn — đang mở nhánh câu hỏi tiếp theo…';
    feedback.classList.add('correct');
    setTimeout(() => {
      if (choice.next) {
        folkRound += 1;
        currentHomeNode = choice.next;
        return renderFolkQuestion();
      }
      selectedProvince = PROVINCES_DATA.find(province => province.slug === choice.result);
      if (!selectedProvince) return;
      resultName.textContent = selectedProvince.name;
      resultCopy.textContent = `Qua nhánh ký ức “${journeyChoices.join(' → ').toLowerCase()}”, hệ thống dự đoán quê hương của bạn là ${selectedProvince.name}. ${selectedProvince.desc}`;
      if (selectedProvince.images && selectedProvince.images.front) {
        jerseySlot.innerHTML = `<img src="${selectedProvince.images.front}" alt="Mẫu áo ${selectedProvince.name}" class="fusion-real-jersey-img">`;
      } else {
        jerseySlot.innerHTML = generateJerseySVG(selectedProvince, 'front');
      }
      showStep(3);
    }, 560);
  }

  if (resultView) {
    resultView.addEventListener('click', () => {
      closeMatcher();
      document.getElementById('collection-grid-sec').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const card = document.querySelector(`.card-perspective[data-slug="${selectedProvince.slug}"]`);
        if (!card) return openDetailsModal(selectedProvince.slug);
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('fusion-highlight');
        setTimeout(() => card.classList.remove('fusion-highlight'), 1100);
      }, 700);
    });
  }

  const againBtn = document.getElementById('fusion-match-again');
  if (againBtn) {
    againBtn.addEventListener('click', () => { startFolkQuiz(); showStep(1); });
  }
});

// --- COMMUNITY VOTE: simulated campaign baseline + real local browser vote ---
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('vote-province');
  const submit = document.getElementById('vote-submit');
  const list = document.getElementById('vote-list');
  const total = document.getElementById('vote-total');
  const message = document.getElementById('vote-message');
  const selectedResult = document.getElementById('vote-selected-result');
  if (!select || !submit || !list || !total) return;

  const uniqueProvinces = [...new Map(PROVINCES_DATA.map(province => [province.slug, province])).values()];
  const storageKey = 'vn34-community-votes-v1';
  const voterKey = 'vn34-community-voter-v1';
  const oneDay = 24 * 60 * 60 * 1000;
  const hashSeed = text => [...text].reduce((value, char) => ((value << 5) - value + char.charCodeAt(0)) | 0, 0);
  const demoBase = Object.fromEntries(uniqueProvinces.map(province => [province.slug, 160 + Math.abs(hashSeed(province.slug)) % 740]));
  let localVotes = {};
  let lastVote = null;
  try {
    localVotes = JSON.parse(localStorage.getItem(storageKey) || '{}');
    lastVote = JSON.parse(localStorage.getItem(voterKey) || 'null');
  } catch (_) {
    localVotes = {};
  }

  select.innerHTML = '<option value="">— Chọn tỉnh / thành phố —</option>' + uniqueProvinces
    .slice().sort((a, b) => a.name.localeCompare(b.name, 'vi'))
    .map(province => `<option value="${province.slug}">${province.name}</option>`).join('');

  const voteCount = province => demoBase[province.slug] + Number(localVotes[province.slug] || 0);
  const renderVotes = () => {
    const ranking = uniqueProvinces.slice().sort((a, b) => voteCount(b) - voteCount(a));
    const max = voteCount(ranking[0]);
    total.textContent = ranking.reduce((sum, province) => sum + voteCount(province), 0).toLocaleString('vi-VN');
    list.innerHTML = ranking.slice(0, 5).map((province, index) => `
      <div class="vote-row">
        <span class="vote-rank">${String(index + 1).padStart(2, '0')}</span>
        <span class="vote-name">${province.name}</span>
        <span class="vote-count">${voteCount(province).toLocaleString('vi-VN')} phiếu</span>
        <span class="vote-meter"><i style="width:${Math.round(voteCount(province) / max * 100)}%"></i></span>
      </div>`).join('');
    return ranking;
  };
  const showSelectedResult = province => {
    if (!province || !selectedResult) return;
    const ranking = renderVotes();
    const rank = ranking.findIndex(item => item.slug === province.slug) + 1;
    const image = province.images?.front
      ? `<img src="${province.images.front}" alt="Mẫu áo ${province.name}">`
      : (typeof generateJerseySVG === 'function' ? generateJerseySVG(province, 'front') : '');
    selectedResult.hidden = false;
    selectedResult.innerHTML = `
      <div class="vote-selected-jersey">${image}</div>
      <div class="vote-selected-copy"><span>LỰA CHỌN CỦA BẠN</span><strong>${province.name}</strong><p>Đang ở vị trí <b>#${String(rank).padStart(2, '0')}</b> với ${voteCount(province).toLocaleString('vi-VN')} phiếu.</p></div>`;
  };

  submit.addEventListener('click', () => {
    const slug = select.value;
    if (!slug) {
      message.className = 'vote-message';
      message.textContent = 'Hãy chọn quê hương bạn muốn được ưu tiên thiết kế.';
      return;
    }
    if (lastVote?.time && Date.now() - lastVote.time < oneDay) {
      const votedProvince = uniqueProvinces.find(province => province.slug === lastVote.slug);
      message.className = 'vote-message';
      message.textContent = `Bạn đã bình chọn cho ${votedProvince?.name || 'quê hương của mình'} hôm nay. Hẹn bạn quay lại vào ngày mai.`;
      showSelectedResult(uniqueProvinces.find(province => province.slug === slug));
      return;
    }
    localVotes[slug] = Number(localVotes[slug] || 0) + 1;
    lastVote = { slug, time: Date.now() };
    try {
      localStorage.setItem(storageKey, JSON.stringify(localVotes));
      localStorage.setItem(voterKey, JSON.stringify(lastVote));
    } catch (_) {}
    const province = uniqueProvinces.find(item => item.slug === slug);
    message.className = 'vote-message success';
    message.textContent = `Đã ghi nhận! ${province.name} vừa nhận thêm một tiếng nói từ cộng đồng.`;
    showSelectedResult(province);
    const box = document.querySelector('.vote-box');
    if (box) {
      box.classList.add('vote-burst');
      setTimeout(() => box.classList.remove('vote-burst'), 750);
    }
    if (typeof playTactileSound === 'function') playTactileSound('success');
  });

  renderVotes();
});

// --- PRIMARY APPLICATION INITIALIZER ---
document.addEventListener('DOMContentLoaded', () => {
  if (typeof initShowcaseMarquee === 'function') initShowcaseMarquee();
  if (typeof initScrollAnimations === 'function') initScrollAnimations();
  if (typeof initTactileAudio === 'function') initTactileAudio();
  if (typeof initProductTech === 'function') initProductTech();
  if (typeof initCardTilt === 'function') initCardTilt();
  if (typeof initConfettiBurst === 'function') initConfettiBurst();

  if (typeof attachAvailableDesignAssets === 'function') {
    attachAvailableDesignAssets().then(didAttach => {
      if (didAttach && typeof initShowcaseMarquee === 'function') {
        initShowcaseMarquee();
      }
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('share-hometown');
  const modal = document.getElementById('share-modal');
  const status = document.getElementById('share-status');
  if (!trigger || !modal) return;

  const shareUrl = () => window.location.href;
  const shareText = 'Khám phá bộ sưu tập áo đấu 34 tỉnh thành — 34 bản sắc, một Việt Nam.';
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    trigger.focus();
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      status.textContent = 'Đã sao chép liên kết — sẵn sàng để gửi cho bạn bè.';
    } catch {
      status.textContent = 'Không thể tự sao chép. Hãy dùng địa chỉ trên thanh trình duyệt.';
    }
  };
  const nativeShare = async () => {
    if (!navigator.share) return copyLink();
    try {
      await navigator.share({ title: '34 Tỉnh Thành', text: shareText, url: shareUrl() });
    } catch { /* Người dùng có thể đã đóng bảng chia sẻ hệ thống. */ }
  };

  trigger.addEventListener('click', () => {
    status.textContent = '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.share-close')?.focus();
  });
  modal.querySelector('.share-close')?.addEventListener('click', close);
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) close();
  });
  modal.querySelectorAll('[data-share]').forEach(button => button.addEventListener('click', async () => {
    const destination = button.dataset.share;
    const url = encodeURIComponent(shareUrl());
    if (destination === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer,width=640,height=520');
    if (destination === 'zalo') window.open(`https://zalo.me/share?url=${url}`, '_blank', 'noopener,noreferrer,width=640,height=520');
    if (destination === 'messenger' || destination === 'native') await nativeShare();
    if (destination === 'copy') await copyLink();
  }));
});

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('contact-tailoring');
  const modal = document.getElementById('contact-modal');
  if (!trigger || !modal) return;
  const status = modal.querySelector('.share-status');
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    trigger.focus();
  };
  trigger.addEventListener('click', () => {
    status.textContent = '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.share-close')?.focus();
  });
  modal.querySelector('.share-close')?.addEventListener('click', close);
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
  modal.querySelector('.contact-copy')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('0909362079');
      status.textContent = 'Đã sao chép số Zalo.';
    } catch {
      status.textContent = 'Zalo: 0909 362 079';
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) close();
  });
});

// Navigation and quick actions purpose-built for touch screens.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-nav');
  const setMenu = open => {
    if (!toggle || !menu) return;
    menu.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('mobile-nav-open', open);
  };

  toggle?.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.classList.contains('open')) setMenu(false);
  });

  document.getElementById('mobile-order-open')?.addEventListener('click', () => {
    const designName = state.customizerProvince?.name || 'Mẫu áo tự thiết kế';
    window.orderJersey?.(designName);
  });
  document.getElementById('mobile-fusion-open')?.addEventListener('click', () => {
    document.getElementById('fusion-match-open')?.click();
  });
});

// Gallery images open in a focused full-size viewer on both touch and desktop.
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('gallery-lightbox');
  const image = lightbox?.querySelector('.gallery-lightbox-image');
  const caption = lightbox?.querySelector('.gallery-lightbox-caption');
  const closeButton = lightbox?.querySelector('.gallery-lightbox-close');
  const items = document.querySelectorAll('#gallery .gallery-item');
  let lastFocusedItem = null;
  let savedBodyOverflow = '';

  if (!lightbox || !image || !caption || !closeButton || !items.length) return;

  const closeViewer = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = savedBodyOverflow;
    lastFocusedItem?.focus();
  };

  const openViewer = item => {
    const sourceImage = item.querySelector('img');
    const title = item.querySelector('h4')?.textContent?.trim() || sourceImage?.alt || 'Xem ảnh thiết kế';
    if (!sourceImage) return;
    lastFocusedItem = item;
    savedBodyOverflow = document.body.style.overflow;
    image.src = sourceImage.currentSrc || sourceImage.src;
    image.alt = sourceImage.alt;
    caption.textContent = title;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  };

  items.forEach(item => {
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Xem ảnh lớn: ${item.querySelector('h4')?.textContent?.trim() || 'thiết kế áo'}`);
    item.addEventListener('click', () => openViewer(item));
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openViewer(item);
      }
    });
  });

  closeButton.addEventListener('click', closeViewer);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeViewer(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeViewer();
  });
});

// On phones, place the live jersey preview directly between the introduction and form.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.customizer-grid');
  const preview = grid?.querySelector('.customizer-preview');
  const options = grid?.querySelector('.customizer-options');
  const form = options?.querySelector('.customizer-form');
  const mobileLayout = window.matchMedia?.('(max-width: 767px)');
  if (!grid || !preview || !options || !form || !mobileLayout) return;

  const positionPreview = () => {
    if (mobileLayout.matches) {
      if (preview.parentElement !== options) options.insertBefore(preview, form);
    } else if (preview.parentElement !== grid) {
      grid.insertBefore(preview, options);
    }
  };

  positionPreview();
  mobileLayout.addEventListener?.('change', positionPreview);
});
