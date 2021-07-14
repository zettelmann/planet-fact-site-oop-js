/* 
    MOBILE NAVIGATION TOGGLE
*/
const mobileMenuBtn = document.querySelector('.mobile-menu__button');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenuNav = document.querySelector('.nav');


const showMobileNavigation = () => {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuNav.classList.toggle('show-mobile-menu');
        mobileMenuBtn.classList.toggle('close-button')
    })
}
showMobileNavigation();
/* 
    MOBILE SUB-NAVIGATION 
*/
const mobileSubNavContainer = document.querySelector('.section-planet-facts');


mobileSubNavContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.planet-facts__tab-btn');
    if(!clicked) return;

    clicked
        .parentElement
        .parentElement
        .querySelectorAll('.planet-facts__tab-btn')
        .forEach(btn => btn.classList.remove('show-planet-facts'));

    clicked.classList.add('show-planet-facts');
});


/* 

import '../sass/main.scss';
// import './mobileMenu';

const planetFactsContainer = document.querySelector('.section-planet-facts');
const navBtnContainer = document.querySelector('.nav__list');
const mobileMenuNav = document.querySelector('.nav');
const mobileMenuBtn = document.querySelector('.mobile-menu__button');

class App {
  

  constructor(planetName) {
    this.planetName = planetName; 
  }

  #getPlanetName() {

  }

  #toggleMobileNav() {

  }

  #newPlanet() {

  }
}

const app = new App('mercury');

console.log(app.planetName);





    MOBILE NAVIGATION TOGGLE

const mobileMenuBtn = document.querySelector('.mobile-menu__button');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenuNav = document.querySelector('.nav');


const showMobileNavigation = () => {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuNav.classList.toggle('show-mobile-menu');
        mobileMenuBtn.classList.toggle('close-button')
    })
}
showMobileNavigation();
/
    MOBILE SUB-NAVIGATION 

const mobileSubNavContainer = document.querySelector('.section-planet-facts');


mobileSubNavContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.planet-facts__tab-btn');
    if(!clicked) return;

    clicked
        .parentElement
        .parentElement
        .querySelectorAll('.planet-facts__tab-btn')
        .forEach(btn => btn.classList.remove('show-planet-facts'));

    clicked.classList.add('show-planet-facts');
});


let planetData = 'mercury';
let content = 'overview';
let geologyImg = '';




class PlanetFacts {
  // public field (instances (this))
  planetData = 'mercury';
  content = 'overview';
  geologyImg;

  constructor(planetData, content) {
    this.planetData = planetData;
    this.content = content;
  }
}


// const planet = new PlanetFacts()


navBtnContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.nav__item');

    if(!clicked) return;

    const [planet] = clicked.children;
    planetData = planet.dataset.planet;

    showPlanetFacts(planetData, content);
    const planetInst = new PlanetFacts(planetData, content);
    

    mobileMenuNav.classList.remove('show-mobile-menu');
});


planetFactsContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.planet-facts__tab-btn');
    if(!clicked) return;

    content = clicked.dataset.content;
    

  showPlanetFacts(planetData, content);

});

const showPlanetFacts = async (planet,content) => {
    try {
        const res = await fetch(
            '../../data.json'
        );
        const data = await res.json();

        if(!res.ok) throw new Error(`${data.message} (${res.status})`)



        const [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune] = data;

        if(planet === 'mercury') planet = mercury;
        if(planet === 'venus') planet = venus;
        if(planet === 'earth') planet = earth;
        if(planet === 'mars') planet = mars;
        if(planet === 'jupiter') planet = jupiter;
        if(planet === 'saturn') planet = saturn;
        if(planet === 'uranus') planet = uranus;
        if(planet === 'neptune') planet = neptune;

        const btnShowCondition = content;
   
        
       if(content === 'overview') {
           content = planet.overview.content;

       }
       if(content === 'structure') content = planet.structure.content;
       if(content === 'geology') content = planet.geology.content;

       if(btnShowCondition === 'geology')  geologyImg = `<img src="../src/img/geology-${planetData}.png"/>`



       let source;

       if(btnShowCondition === 'overview') source = planet.overview.source;
       if(btnShowCondition === 'structure') source = planet.structure.source;
       if(btnShowCondition === 'geology') source = planet.geology.source;


            // Rendering Markup
            const marktup = `
            <div class="planet-facts__tab-container">
                <div class="planet-facts__tab">
                    <button class="
                        planet-facts__tab-btn 
                        planet-facts__tab-btn--${planet.name.toLowerCase()} 
                        planet-facts__tab-btn--overview ${btnShowCondition === 'overview' ? 'show-planet-facts' : ''}" 
                        data-content="overview">
                            <h4>Overview</h4> 
                    </button>
                </div>
                <div class="planet-facts__tab">
                    <button class="
                        planet-facts__tab-btn 
                        planet-facts__tab-btn--${planet.name.toLowerCase()} 
                        planet-facts__tab-btn--structure ${btnShowCondition === 'structure' ? 'show-planet-facts' : ''}" 
                        data-content="structure">
                            <h4>Structure</h4>
                    </button>
                </div>
                <div class="planet-facts__tab">
                    <button class="
                        planet-facts__tab-btn 
                        planet-facts__tab-btn--${planet.name.toLowerCase()} 
                        planet-facts__tab-btn--surface ${btnShowCondition === 'geology' ? 'show-planet-facts' : ''}" 
                        data-content="geology">
                            <h4>Surface</h4>
                    </button>
                </div>
            </div>

        <div class="planet-facts__img">
  
 
              <img 
                src="
                  ${btnShowCondition === 'overview'  ? planet.images.planet : ''}
                  ${btnShowCondition === 'structure' ? planet.images.internal : ''}
                  ${btnShowCondition === 'geology' ? planet.images.planet  : ''}
                " 
                alt="${planet.name}"
              >
              ${btnShowCondition === 'geology' ? geologyImg : ''}


        </div>
        <div class="planet-facts__content">
          <h1 class="planet-facts__name">${planet.name}</h1>
          <p class="planet-facts__info">
            ${content}
          </p>
          <p class="planet-facts__source">Source: <a href="${source}" target="_blank">Wikipedia</a></p>
        </div>

      <div class="planet-facts__datas">

        <div class="planet-facts__data">
          <p class="planet-facts__data-name">
            Rotation Time
          </p>
          <p class="planet-facts__data-value">
            ${planet.rotation}
          </p>
        </div>

        <div class="planet-facts__data">
          <p class="planet-facts__data-name">
            Revolution Time
          </p>
          <p class="planet-facts__data-value">
            ${planet.revolution}
          </p>
        </div>

        <div class="planet-facts__data">
          <p class="planet-facts__data-name">
            Radius
          </p>
          <p class="planet-facts__data-value">
            ${planet.radius}
          </p>
        </div>

        <div class="planet-facts__data">
          <p class="planet-facts__data-name">
            Average Temp.
          </p>
          <p class="planet-facts__data-value">
            ${planet.temperature}
          </p>
        </div>

      </div>
            `;
        planetFactsContainer.innerHTML ='';
        planetFactsContainer.insertAdjacentHTML('afterbegin', marktup);


    } catch(err) {
       // alert(err)
    }
    mobileMenuBtn.classList.remove('close-button');

}
showPlanetFacts(planetData, content);









*/


