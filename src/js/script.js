


// عند تغيير اللغة من القائمة
document.getElementById("languageSwitcher").addEventListener("change", function () {
    const selectedLang = this.value; // الحصول على اللغة المختارة
    translatePage(selectedLang); // تنفيذ الترجمة
    localStorage.setItem("lang", selectedLang); // تخزين اللغة المختارة
});

// دالة لتحديث النصوص بناءً على اللغة المختارة
function translatePage(lang) {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // تغيير اتجاه الصفحة
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate"); // الحصول على المفتاح من data-translate
        element.textContent = translations[lang][key]; // تعيين النص الجديد
    });
}

// تحميل اللغة المحفوظة عند فتح الموقع
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en"; // جلب اللغة المحفوظة أو الافتراضية
    document.getElementById("languageSwitcher").value = savedLang; // ضبط قائمة الاختيار
    translatePage(savedLang); // تنفيذ الترجمة تلقائيًا
});


// ----------------

// كائن يحتوي على الترجمات لكل النصوص
const translations = {
    en: {

              home: "HOME",
              contact: "Contact Us",
              about: "ABOUT US",
              Services: "SERVICES",
              Whyus: "WHY US",

        title: "Welcome to our website",
        description: "We provide the best services.",
        contact: "Contact Us"
        
    },
    ar: {


        home: "الرئيسه",
        contact: "تواصل معنا",
        about: "من نحن",
        Services: "خدماتنا",
        Whyus: "لماذا نحن",
        
        title: "مرحبًا بكم في موقعنا",
        description: "نحن نقدم أفضل الخدمات.",
        contact: "اتصل بنا"
    }
};