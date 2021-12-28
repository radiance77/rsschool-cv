// Menu

(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav');
  const menuClose = document.querySelector('.header-close-nav');
  const menuLinks = document.querySelectorAll('.nav-link');
  burger.addEventListener('click', () => {
    menu.classList.add('header-nav-active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  });

  if (window.innerWidth <= 870) {
    for (let i = 0; i < menuLinks.length; ++i) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
      });
    }
  }
})();

console.log(`
Score: 130/130

1. студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10
2. вёрстка валидная +10
3. вёрстка семантическая +20
4. в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10
5. для оформления СV используются css-стили +10
6. при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
7. на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10
8. навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10
9. Содержание CV +30
    CV содержит:
      краткую информацию о себе +5
      контакты для связи +5
      перечень навыков +5
      пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5
      перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5
      информацию об образовании и уровне английского +5
10. CV выполнено на английском языке +10
`)