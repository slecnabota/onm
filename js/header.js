const iconMenu = document.querySelector('.header__menu');
const menuBody = document.querySelector('.header__mob-wrp');
const languages = document.querySelector('.header__languages');
const logo = document.querySelector('.header-logo-wrp');
const link = document.getElementById('close');


iconMenu.addEventListener('click', function(e){
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active3');
    menuBody.classList.toggle('active3');
    languages.classList.toggle('fixed');
    logo.classList.toggle('width');
});
link.addEventListener('click', function(){
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active3');
    menuBody.classList.toggle('active3');
    languages.classList.toggle('fixed');
    logo.classList.toggle('width');
})