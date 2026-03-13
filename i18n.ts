export type Language = "en" | "id" | "zh" | "ru" | "ar";
export type Currency = "USD" | "IDR" | "CNY" | "GBP" | "EUR" | "RUB";

export const LANGUAGES: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia" },
  { code: "zh", label: "Chinese", nativeLabel: "中文" },
  { code: "ru", label: "Russian", nativeLabel: "Русский" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
];

export const CURRENCIES: { code: Currency; symbol: string; label: string }[] = [
  { code: "USD", symbol: "$", label: "US Dollar" },
  { code: "IDR", symbol: "Rp", label: "Indonesian Rupiah" },
  { code: "CNY", symbol: "¥", label: "Chinese Yuan" },
  { code: "GBP", symbol: "£", label: "British Pound" },
  { code: "EUR", symbol: "€", label: "Euro" },
  { code: "RUB", symbol: "₽", label: "Russian Ruble" },
];

export const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  IDR: 15700,
  CNY: 7.24,
  GBP: 0.79,
  EUR: 0.92,
  RUB: 92.5,
};

export function convertPrice(usd: number, currency: Currency): number {
  return Math.round(usd * EXCHANGE_RATES[currency]);
}

export function formatPrice(amount: number, currency: Currency): string {
  const cur = CURRENCIES.find((c) => c.code === currency)!;
  if (currency === "IDR") {
    return `${cur.symbol} ${amount.toLocaleString("id-ID")}`;
  }
  return `${cur.symbol}${amount.toLocaleString("en-US")}`;
}

type TranslationKeys =
  | "nav.home" | "nav.configurator" | "nav.listings" | "nav.about" | "nav.careers" | "nav.support"
  | "hero.title" | "hero.subtitle" | "hero.cta" | "hero.explore"
  | "config.title" | "config.subtitle" | "config.land" | "config.bedrooms" | "config.floors"
  | "config.style" | "config.material" | "config.generate" | "config.results"
  | "config.area" | "config.time" | "config.price" | "config.view"
  | "listings.title" | "listings.subtitle" | "listings.beds" | "listings.baths" | "listings.time"
  | "about.title" | "about.founded" | "about.founder" | "about.mission"
  | "careers.title" | "careers.apply" | "careers.name" | "careers.email" | "careers.resume" | "careers.submit"
  | "support.title" | "support.subtitle" | "support.email" | "support.address" | "support.faq"
  | "common.from" | "common.sqm" | "common.months" | "common.viewDetails";

const translations: Record<Language, Record<TranslationKeys, string>> = {
  en: {
    "nav.home": "Home", "nav.configurator": "Configurator", "nav.listings": "Listings",
    "nav.about": "About", "nav.careers": "Careers", "nav.support": "Support",
    "hero.title": "Design Your Modular Future",
    "hero.subtitle": "Modern modular homes designed for contemporary living",
    "hero.cta": "Configure Your Home", "hero.explore": "Explore Listings",
    "config.title": "Modular House Configurator",
    "config.subtitle": "Design your perfect home in minutes",
    "config.land": "Land Size", "config.bedrooms": "Bedrooms", "config.floors": "Floors",
    "config.style": "Architectural Style", "config.material": "Material Quality",
    "config.generate": "Generate Concepts", "config.results": "Generated Concepts",
    "config.area": "Floor Area", "config.time": "Build Time", "config.price": "Est. Price",
    "config.view": "View Details",
    "listings.title": "Modular House Models", "listings.subtitle": "Browse our collection of modular homes",
    "listings.beds": "Beds", "listings.baths": "Baths", "listings.time": "Build Time",
    "about.title": "About Calvin Edge Property",
    "about.founded": "Founded in 2018 in Shanghai, China",
    "about.founder": "Our Founder",
    "about.mission": "Creating modern modular housing systems that are efficient, customizable, and accessible for global markets.",
    "careers.title": "Join Our Team", "careers.apply": "Apply Now",
    "careers.name": "Full Name", "careers.email": "Email", "careers.resume": "Resume",
    "careers.submit": "Submit Application",
    "support.title": "Customer Support", "support.subtitle": "We're here to help",
    "support.email": "Email Us", "support.address": "Visit Us", "support.faq": "FAQ",
    "common.from": "From", "common.sqm": "sqm", "common.months": "months",
    "common.viewDetails": "View Details",
  },
  id: {
    "nav.home": "Beranda", "nav.configurator": "Konfigurator", "nav.listings": "Daftar",
    "nav.about": "Tentang", "nav.careers": "Karir", "nav.support": "Dukungan",
    "hero.title": "Desain Masa Depan Modular Anda",
    "hero.subtitle": "Rumah modular modern yang dirancang untuk kehidupan kontemporer",
    "hero.cta": "Konfigurasikan Rumah Anda", "hero.explore": "Jelajahi Daftar",
    "config.title": "Konfigurator Rumah Modular",
    "config.subtitle": "Desain rumah sempurna Anda dalam hitungan menit",
    "config.land": "Ukuran Tanah", "config.bedrooms": "Kamar Tidur", "config.floors": "Lantai",
    "config.style": "Gaya Arsitektur", "config.material": "Kualitas Material",
    "config.generate": "Hasilkan Konsep", "config.results": "Konsep Dihasilkan",
    "config.area": "Luas Lantai", "config.time": "Waktu Bangun", "config.price": "Harga Est.",
    "config.view": "Lihat Detail",
    "listings.title": "Model Rumah Modular", "listings.subtitle": "Jelajahi koleksi rumah modular kami",
    "listings.beds": "K. Tidur", "listings.baths": "K. Mandi", "listings.time": "Waktu Bangun",
    "about.title": "Tentang Calvin Edge Property",
    "about.founded": "Didirikan pada 2018 di Shanghai, Tiongkok",
    "about.founder": "Pendiri Kami",
    "about.mission": "Menciptakan sistem perumahan modular modern yang efisien, dapat disesuaikan, dan dapat diakses untuk pasar global.",
    "careers.title": "Bergabunglah dengan Tim Kami", "careers.apply": "Lamar Sekarang",
    "careers.name": "Nama Lengkap", "careers.email": "Email", "careers.resume": "Resume",
    "careers.submit": "Kirim Lamaran",
    "support.title": "Dukungan Pelanggan", "support.subtitle": "Kami siap membantu",
    "support.email": "Email Kami", "support.address": "Kunjungi Kami", "support.faq": "FAQ",
    "common.from": "Dari", "common.sqm": "m²", "common.months": "bulan",
    "common.viewDetails": "Lihat Detail",
  },
  zh: {
    "nav.home": "首页", "nav.configurator": "配置器", "nav.listings": "房源",
    "nav.about": "关于", "nav.careers": "招聘", "nav.support": "支持",
    "hero.title": "设计你的模块化未来",
    "hero.subtitle": "为现代生活设计的模块化住宅",
    "hero.cta": "配置您的住宅", "hero.explore": "浏览房源",
    "config.title": "模块化住宅配置器",
    "config.subtitle": "几分钟内设计您的完美住宅",
    "config.land": "土地面积", "config.bedrooms": "卧室", "config.floors": "楼层",
    "config.style": "建筑风格", "config.material": "材料等级",
    "config.generate": "生成方案", "config.results": "生成的方案",
    "config.area": "建筑面积", "config.time": "建造时间", "config.price": "预估价格",
    "config.view": "查看详情",
    "listings.title": "模块化住宅模型", "listings.subtitle": "浏览我们的模块化住宅系列",
    "listings.beds": "卧室", "listings.baths": "浴室", "listings.time": "建造时间",
    "about.title": "关于Calvin Edge Property",
    "about.founded": "2018年成立于中国上海",
    "about.founder": "我们的创始人",
    "about.mission": "创建高效、可定制且面向全球市场的现代模块化住房系统。",
    "careers.title": "加入我们的团队", "careers.apply": "立即申请",
    "careers.name": "姓名", "careers.email": "电子邮件", "careers.resume": "简历",
    "careers.submit": "提交申请",
    "support.title": "客户支持", "support.subtitle": "我们随时为您服务",
    "support.email": "发送邮件", "support.address": "访问我们", "support.faq": "常见问题",
    "common.from": "起价", "common.sqm": "平方米", "common.months": "个月",
    "common.viewDetails": "查看详情",
  },
  ru: {
    "nav.home": "Главная", "nav.configurator": "Конфигуратор", "nav.listings": "Каталог",
    "nav.about": "О нас", "nav.careers": "Карьера", "nav.support": "Поддержка",
    "hero.title": "Спроектируйте своё модульное будущее",
    "hero.subtitle": "Современные модульные дома для современной жизни",
    "hero.cta": "Настроить дом", "hero.explore": "Каталог домов",
    "config.title": "Конфигуратор модульного дома",
    "config.subtitle": "Спроектируйте идеальный дом за минуты",
    "config.land": "Площадь участка", "config.bedrooms": "Спальни", "config.floors": "Этажи",
    "config.style": "Архитектурный стиль", "config.material": "Качество материалов",
    "config.generate": "Сгенерировать", "config.results": "Результаты",
    "config.area": "Площадь", "config.time": "Срок строительства", "config.price": "Цена",
    "config.view": "Подробнее",
    "listings.title": "Модели модульных домов", "listings.subtitle": "Просмотрите нашу коллекцию",
    "listings.beds": "Спальни", "listings.baths": "Ванные", "listings.time": "Срок",
    "about.title": "О Calvin Edge Property",
    "about.founded": "Основана в 2018 году в Шанхае, Китай",
    "about.founder": "Наш основатель",
    "about.mission": "Создание современных модульных жилищных систем — эффективных, настраиваемых и доступных для мировых рынков.",
    "careers.title": "Присоединяйтесь к команде", "careers.apply": "Подать заявку",
    "careers.name": "ФИО", "careers.email": "Email", "careers.resume": "Резюме",
    "careers.submit": "Отправить заявку",
    "support.title": "Служба поддержки", "support.subtitle": "Мы всегда готовы помочь",
    "support.email": "Написать нам", "support.address": "Посетить нас", "support.faq": "ЧЗВ",
    "common.from": "От", "common.sqm": "м²", "common.months": "мес.",
    "common.viewDetails": "Подробнее",
  },
  ar: {
    "nav.home": "الرئيسية", "nav.configurator": "المُكوِّن", "nav.listings": "العقارات",
    "nav.about": "عن الشركة", "nav.careers": "الوظائف", "nav.support": "الدعم",
    "hero.title": "صمم مستقبلك المعياري",
    "hero.subtitle": "منازل معيارية حديثة مصممة للحياة المعاصرة",
    "hero.cta": "صمم منزلك", "hero.explore": "تصفح العقارات",
    "config.title": "مُكوِّن المنزل المعياري",
    "config.subtitle": "صمم منزلك المثالي في دقائق",
    "config.land": "مساحة الأرض", "config.bedrooms": "غرف النوم", "config.floors": "الطوابق",
    "config.style": "النمط المعماري", "config.material": "جودة المواد",
    "config.generate": "إنشاء التصاميم", "config.results": "التصاميم المُنشأة",
    "config.area": "المساحة", "config.time": "مدة البناء", "config.price": "السعر التقديري",
    "config.view": "عرض التفاصيل",
    "listings.title": "نماذج المنازل المعيارية", "listings.subtitle": "تصفح مجموعتنا",
    "listings.beds": "غرف", "listings.baths": "حمامات", "listings.time": "مدة البناء",
    "about.title": "عن Calvin Edge Property",
    "about.founded": "تأسست في 2018 في شنغهاي، الصين",
    "about.founder": "مؤسسنا",
    "about.mission": "إنشاء أنظمة إسكان معيارية حديثة فعالة وقابلة للتخصيص ومتاحة للأسواق العالمية.",
    "careers.title": "انضم إلى فريقنا", "careers.apply": "قدم الآن",
    "careers.name": "الاسم الكامل", "careers.email": "البريد الإلكتروني", "careers.resume": "السيرة الذاتية",
    "careers.submit": "إرسال الطلب",
    "support.title": "دعم العملاء", "support.subtitle": "نحن هنا للمساعدة",
    "support.email": "راسلنا", "support.address": "زرنا", "support.faq": "الأسئلة الشائعة",
    "common.from": "من", "common.sqm": "م²", "common.months": "أشهر",
    "common.viewDetails": "عرض التفاصيل",
  },
};

export function t(key: TranslationKeys, lang: Language): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}
