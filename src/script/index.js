import '../style/main.scss';
import './mobileMenu';

const planetFactsContainer = document.querySelector('.section-planet-facts');
const navBtnContainer = document.querySelector('.nav__list');
const mobileMenuNav = document.querySelector('.nav');
const planetFactsBtn = document.querySelector('.planet-facts__btns-list');

navBtnContainer.addEventListener('click', e => {
    const clicked = e.target.closest('.nav__item');

    if(!clicked) return;

    const [planet] = clicked.children;
    const planetData = planet.dataset.planet;

    showPlanetFacts(planetData);

    mobileMenuNav.classList.remove('show-mobile-menu');
});

planetFactsBtn.addEventListener('click', e => {
    const clicked = e.target.closest('.planet-facts__btn');
    if(!clicked) return;

    const content = clicked.dataset.content;

    console.log(content);
})



const showPlanetFacts = async planet => {
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

            // Rendering Markup
            const marktup = `
            <ul class="planet-facts__btns-list">
                <li class="planet-facts__btns-item">
                    <button class="planet-facts__btn planet-facts__btn--${planet.name.toLowerCase()} 
                        planet-facts__btn--overview show-planet-facts" data-content="overview">
                        <h4>Overview</h4> 
                    </button>
                </li>
                <li class="planet-facts__btns-item">
                <button class="planet-facts__btn planet-facts__btn--${planet.name.toLowerCase()} planet-facts__btn--structure" data-content="structure"><h4>Structure</h4></button>
                </li>
                <li class="planet-facts__btns-item">
                <button class="planet-facts__btn planet-facts__btn--${planet.name.toLowerCase()} planet-facts__btn--surface" data-content="surface"><h4>Surface</h4></button>
                </li>
            </ul>

        <div class="planet-facts__img">
            <img src="${planet.images.planet}" alt="${planet.name}">
        </div>
        <div class="planet-facts__content">
          <h1 class="planet-facts__name">${planet.name}</h1>
          <p class="planet-facts__info">
            ${planet.overview.content}
          </p>
          <p class="planet-facts__source">Source: <a href="${planet.overview.source}">Wikipedia</a></p>
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
}






