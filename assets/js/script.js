// add or remove the open class depending on the current state of the button

const btnMobileMenu = document.querySelector('#btn-mobile-menu');
const header = document.querySelector('.header');
const menuElems = document.querySelectorAll('.menu-visibile');

btnMobileMenu.addEventListener('click', function() {
    console.log('click mobile menu');

    if (header.classList.contains('open')) {
        header.classList.remove('open');
        menuElems.forEach(function(element){
            element.classList.remove('fade-in');
        });    
    }
    else {
        header.classList.add('open');
        menuElems.forEach(function(element){
            element.classList.add('fade-in');
        });
    }
});