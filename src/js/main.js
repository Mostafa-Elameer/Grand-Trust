// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // فتح القائمة
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('show'); // إضافة أو إزالة كلاس العرض
                }
            });
        }
    }

    // إغلاق القائمة
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    function closeMenu() {
        for (let j = 0; j < menu.length; j++) {
            menu[j].classList.remove('show'); // إخفاء القائمة بسلاسة
        }
    }

    if (close.length) {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', closeMenu);
        }
    }

    if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', closeMenu);
        }
    }
});




var typed = new Typed("#text-", {
    strings: ["We Rise Above !", "We Start !", "We Create identity !"],
    typeSpeed: 70,
    loop: true,
    loopCount: Infinity,
    backSpeed: 40,
  });




  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionBody = button.nextElementSibling;
        const isOpen = accordionBody.classList.contains('opacity-100');

        // إغلاق جميع العناصر الأخرى
        document.querySelectorAll('.accordion-body').forEach(body => {
            body.classList.remove('opacity-100', 'max-h-96');
            body.classList.add('opacity-0', 'max-h-0');
        });

        // فتح/إغلاق العنصر الحالي مع التأثير السلس
        if (!isOpen) {
            accordionBody.classList.remove('opacity-0', 'max-h-0');
            accordionBody.classList.add('opacity-100', 'max-h-96');
        }
    });
});




  // استخدام Intersection Observer لكشف العناصر عند التمرير
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
}, { threshold: 0.2 });

// تطبيق المراقب على كل العناصر المخفية
document.querySelectorAll('.hidden-element').forEach(element => {
    observer.observe(element);
});