const mobileMenuBtn = document.querySelector('.mobile-menu__button');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenuNav = document.querySelector('.nav');


const showMobileNavigation = () => {
    mobileMenuBtn.addEventListener('click', ()=> {
        mobileMenuNav.classList.toggle('show-mobile-menu');
    })
}
showMobileNavigation();
