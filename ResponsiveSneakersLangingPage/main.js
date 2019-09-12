/*function toggle(){
     toggle('.menu-toggle, .fa-times').on('click',function(){
          toggle('nav').toggleClass('active');
          toggle('.overlay').toggleClass('menu-open');
     });

     toggle('.overlay').on('click',function(){
          toggle('nav').removeClass('.active');
          toggle('.overlay').removeClass('menu-open');
     });
};*/
const navSlide = () => {
     const burger = document.querySelector('.fa-bars');
     const nav = document.querySelector('nav');
     const x = document.querySelector('.fa-times')
     const navLinks = document.querySelectorAll('.nav-links li')
     //toggle nav
     burger.addEventListener('click', () => {
          nav.classList.toggle('active');

     });
     x.addEventListener('click', () => {
          nav.classList.toggle('active');
     });


}

navSlide();
