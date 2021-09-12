// Menu

(function () {
    const burger= document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuClose = document.querySelector('.header-close-nav');
    const menuLinks = document.querySelectorAll('.nav-link')
    burger.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    })

    menuClose.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    })

    if (window.innerWidth <= 870) {
        for(let i = 0; i < menuLinks.length; ++i){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
            })
        }
    }

}());
