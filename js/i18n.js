// قاموس الترجمة — عربي / إنجليزي / صيني
// لإضافة نص جديد: أضف مفتاحاً هنا بنفس الاسم في اللغات الثلاث،
// ثم استخدم data-i18n="المفتاح" على عنصر HTML، أو data-i18n-placeholder للحقول.

const translations = {
  ar: {
    brandName: "سوق وحدة السودان",
    navCategories: "الأقسام",
    navMerchants: "للتجار",
    navTrust: "لماذا نحن",
    navContact: "تواصل",
    heroTagline: "معاً.. لسودان أقوى وأفضل",
    heroTitle: "سوقك السوداني الرقمي، بلا وسيط دفع معقّد",
    heroSub: "اعرض بضاعتك أو خدمتك، وتواصل مع الزبون مباشرة — كما اعتدت في السوق، لكن على الإنترنت.",
    searchPlaceholder: "ابحث عن منتج، خدمة، أو تاجر...",
    searchBtn: "بحث",
    ctaMerchant: "افتح دكانك الرقمي",
    ctaBrowse: "تصفّح الأقسام",
    categoriesTitle: "الأقسام",
    catFood: "مواد غذائية",
    catClothes: "ملابس وأزياء",
    catElectronics: "إلكترونيات",
    catHome: "أدوات منزلية",
    catServices: "خدمات حرفية",
    catMore: "قطاعات أخرى",
    trustTitle: "لماذا سوق وحدة السودان",
    trustDirectTitle: "تواصل مباشر",
    trustDirectBody: "تتفق مع التاجر مباشرة على السعر والتسليم، بدون وسيط دفع إلكتروني معقّد.",
    trustFreeTitle: "مجاني للجميع",
    trustFreeBody: "عرض دكانك ومنتجاتك بلا رسوم اشتراك في هذه المرحلة.",
    trustNationalTitle: "منصة وطنية",
    trustNationalBody: "تجمع تجار السودان ومناطقه المختلفة في مكان واحد يسهل الوصول إليه.",
    merchantTitle: "هل تملك تجارة أو تقدّم خدمة؟",
    merchantBody: "افتح دكانك الرقمي في دقائق: أضف منتجاتك، صورك، وأسعارك، ودع الزبائن يصلون إليك مباشرة.",
    merchantCta: "سجّل كتاجر الآن",
    footerTagline: "معاً.. لسودان أقوى وأفضل",
    footerContact: "راسلنا",
    footerComplaints: "الشكاوى والاقتراحات"
  },
  en: {
    brandName: "Suq Wahdat Alsudan",
    navCategories: "Categories",
    navMerchants: "For Merchants",
    navTrust: "Why Us",
    navContact: "Contact",
    heroTagline: "Together.. for a stronger Sudan",
    heroTitle: "Sudan's digital marketplace, no complicated payment gateway",
    heroSub: "List your goods or services, and connect with buyers directly — just like the market you know, online.",
    searchPlaceholder: "Search for a product, service, or merchant...",
    searchBtn: "Search",
    ctaMerchant: "Open Your Shop",
    ctaBrowse: "Browse Categories",
    categoriesTitle: "Categories",
    catFood: "Groceries",
    catClothes: "Clothing & Fashion",
    catElectronics: "Electronics",
    catHome: "Home Goods",
    catServices: "Skilled Services",
    catMore: "Other Sectors",
    trustTitle: "Why Suq Wahdat Alsudan",
    trustDirectTitle: "Direct Contact",
    trustDirectBody: "Agree on price and delivery directly with the merchant, no complicated payment gateway.",
    trustFreeTitle: "Free For Everyone",
    trustFreeBody: "List your shop and products with no subscription fees at this stage.",
    trustNationalTitle: "A National Platform",
    trustNationalBody: "Bringing together merchants from across Sudan's regions in one accessible place.",
    merchantTitle: "Do you run a business or offer a service?",
    merchantBody: "Open your digital shop in minutes: add your products, photos, and prices, and let customers reach you directly.",
    merchantCta: "Register as a Merchant",
    footerTagline: "Together.. for a stronger Sudan",
    footerContact: "Contact Us",
    footerComplaints: "Complaints & Suggestions"
  },
  zh: {
    brandName: "苏丹团结市场",
    navCategories: "分类",
    navMerchants: "商家入驻",
    navTrust: "为什么选择我们",
    navContact: "联系我们",
    heroTagline: "团结一致，共建更强大的苏丹",
    heroTitle: "苏丹的数字市场，无需复杂的支付网关",
    heroSub: "展示您的商品或服务，与买家直接联系——就像您熟悉的市场，只是搬到了线上。",
    searchPlaceholder: "搜索商品、服务或商家...",
    searchBtn: "搜索",
    ctaMerchant: "开设您的店铺",
    ctaBrowse: "浏览分类",
    categoriesTitle: "分类",
    catFood: "食品杂货",
    catClothes: "服装与时尚",
    catElectronics: "电子产品",
    catHome: "家居用品",
    catServices: "专业服务",
    catMore: "其他行业",
    trustTitle: "为什么选择苏丹团结市场",
    trustDirectTitle: "直接联系",
    trustDirectBody: "直接与商家商定价格和交付方式，无需复杂的支付网关。",
    trustFreeTitle: "完全免费",
    trustFreeBody: "现阶段展示您的店铺和产品，无需支付任何订阅费用。",
    trustNationalTitle: "全国性平台",
    trustNationalBody: "汇聚苏丹各地区的商家，集中在一个便于访问的平台。",
    merchantTitle: "您有生意或提供服务吗？",
    merchantBody: "几分钟内开设您的数字店铺：添加产品、照片和价格，让顾客直接联系您。",
    merchantCta: "立即注册为商家",
    footerTagline: "团结一致，共建更强大的苏丹",
    footerContact: "联系我们",
    footerComplaints: "投诉与建议"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ar;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("preferredLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("preferredLang") || "ar";
  applyLanguage(saved);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
  });
});
