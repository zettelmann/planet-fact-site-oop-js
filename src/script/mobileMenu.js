/* 
    MOBILE NAVIGATION TOGGLE
*/
const mobileMenuBtn = document.querySelector('.mobile-menu__button');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenuNav = document.querySelector('.nav');


const showMobileNavigation = () => {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuNav.classList.toggle('show-mobile-menu');
    })
}
showMobileNavigation();
/* 
    MOBILE SUB-NAVIGATION 
*/
const mobileSubNavContainer = document.querySelector('.section-planet-facts');


mobileSubNavContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.planet-facts__btn');
    if(!clicked) return;

    clicked
        .parentElement
        .parentElement
        .querySelectorAll('.planet-facts__btn')
        .forEach(btn => btn.classList.remove('show-planet-facts'));

    clicked.classList.add('show-planet-facts');

    
});


