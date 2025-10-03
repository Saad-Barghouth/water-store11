const BAR_PRODUCTS = [
  {
    "id": "p1",
    "name": "Barghouth 500ml",
    "brand": "Barghouth",
    "size": "500 مل",
    "price": 6,
    "stock": 240,
    "pack": "كرتون 12",
    "desc": "مياه معدنية معقّاة ومعبأة بمعايير جودة صارمة، مناسبة للاستخدام اليومي.",
    "image": "images/barghouth-500.svg",
    "origin": "مصر"
  },
  {
    "id": "p2",
    "name": "Barghouth 1.5L",
    "brand": "Barghouth",
    "size": "1.5 لتر",
    "price": 13,
    "stock": 160,
    "pack": "كرتون 6",
    "desc": "حجم عائلي عملي. مناسب للمنازل والمكاتب.",
    "image": "images/barghouth-1500.svg",
    "origin": "مصر"
  },
  {
    "id": "p3",
    "name": "Barghouth 19L Gallon",
    "brand": "Barghouth",
    "size": "18.9 لتر",
    "price": 180,
    "stock": 60,
    "pack": "قطعة",
    "desc": "برميل منزلي للتوصيل والتركيب على موزعات المياه.",
    "image": "images/barghouth-19.svg",
    "origin": "مصر"
  },
  {
    "id": "p4",
    "name": "Evian 750ml (Imported)",
    "brand": "Evian",
    "size": "750 مل",
    "price": 30,
    "stock": 42,
    "pack": "كرتون 6",
    "desc": "مياه معدنية طبيعية من جبال الألب - طعم ناعم ونقي.",
    "image": "images/evian.svg",
    "origin": "فرنسا"
  },
  {
    "id": "p5",
    "name": "Perrier Sparkling 330ml",
    "brand": "Perrier",
    "size": "330 مل",
    "price": 18,
    "stock": 50,
    "pack": "صندوق 24",
    "desc": "مياه فوارة فاخرة، مثالية للمناسبات.",
    "image": "images/perrier.svg",
    "origin": "فرنسا"
  },
  {
    "id": "p6",
    "name": "Nestlé Pure Life 1.5L",
    "brand": "Nestlé",
    "size": "1.5 لتر",
    "price": 10,
    "stock": 220,
    "pack": "كرتون 6",
    "desc": "خيار اقتصادي مع جودة مضمونة.",
    "image": "images/nestle.svg",
    "origin": "سويسرا"
  },
  {
    "id": "p7",
    "name": "Aquafina 500ml",
    "brand": "Aquafina",
    "size": "500 مل",
    "price": 7,
    "stock": 200,
    "pack": "كرتون 12",
    "desc": "مياه معبأة من مصادر موثوقة، تعبئة نظيفة.",
    "image": "images/aquafina.svg",
    "origin": "أمريكا"
  },
  {
    "id": "p8",
    "name": "Dasani Sport 750ml",
    "brand": "Dasani",
    "size": "750 مل",
    "price": 11,
    "stock": 110,
    "pack": "قطعة",
    "desc": "زجاجة رياضية مريحة للمجهود والنشاطات.",
    "image": "images/dasani.svg",
    "origin": "أمريكا"
  },
  {
    "id": "p9",
    "name": "Sparkling 330ml - Flavored",
    "brand": "Barghouth",
    "size": "330 مل",
    "price": 9,
    "stock": 150,
    "pack": "صندوق 24",
    "desc": "مياه فوارة بنكهات خفيفة للحفلات والمناسبات.",
    "image": "images/sparkling.svg",
    "origin": "مصر"
  },
  {
    "id": "p10",
    "name": "Bulk Box 24×500ml",
    "brand": "Barghouth",
    "size": "6×500 مل",
    "price": 95,
    "stock": 70,
    "pack": "صندوق 24",
    "desc": "صندوق اقتصادي مناسب للتجار والمنزل.",
    "image": "images/bulk24.svg",
    "origin": "مصر"
  }
];
function formatPrice(n){return n.toLocaleString() + ' ج.م';}
function getProductById(id){return BAR_PRODUCTS.find(p=>p.id===id);}