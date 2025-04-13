document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    const menuLinks = mobileMenu.querySelectorAll('a');  // Получаем все ссылки в меню

    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            burger.classList.toggle('active');
            body.classList.toggle('menu-open');  // Добавляем или убираем класс для блокировки скроллинга и блюра
        });
    }

    // Закрытие меню при клике вне его или на ссылку
    document.addEventListener('click', (event) => {
        // Если клик был не по меню и не по бургеру, закрываем меню
        if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
            mobileMenu.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Если клик был по ссылке, закрываем меню
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burger.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
    });
});
