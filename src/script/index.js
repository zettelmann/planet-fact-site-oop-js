import "../sass/main.scss";

const planetFactsContainer = document.querySelector(".section-planet-facts");
const navBtnContainer = document.querySelector(".nav__list");
const navBtn = document.querySelectorAll(".nav__btn");
const mobileMenuNav = document.querySelector(".nav");
const mobileMenuBtn = document.querySelector(".mobile-menu__button");

class App {
  #planetName = "earth";
  #planetContent = "overview";
  #planetData;
  #source;
  #geologyImg;

  constructor() {
    this.#loadPlanetData();

    navBtnContainer.addEventListener("click", this.#getPlanetName.bind(this));
    planetFactsContainer.addEventListener("click", this.#getPlanetContent.bind(this));
    mobileMenuBtn.addEventListener("click", this.#toggleMobileNav.bind(this));
  }

  async #loadPlanetData() {
    try {
      const res = await fetch("../../data.json");
      this.#planetData = await res.json();
      if (!res.ok) throw new Error(`${this.#planetData.message} (${res.status})`);

      this.#renderPlanet(this.#planetName, this.#planetContent);
    } catch (err) {
      console.error(err);
    }
  }

  #getPlanetName(e) {
      const clicked = e.target.closest(".nav__item");
      if (!clicked) return;

      const [planet] = clicked.children;
      this.data = planet.dataset.planet;
      this.#planetName = this.data;

      this.#renderPlanet(this.#planetName, this.#planetContent);
      this.#toggleMobileNav();
  }

  #getPlanetContent(e) {
      const clicked = e.target.closest(".planet-facts__tab-btn");
      if (!clicked) return;

      this.#planetContent = clicked.dataset.content;
      this.#renderPlanet(this.#planetName, this.#planetContent);
  }

  #toggleMobileNav() {
    mobileMenuNav.classList.toggle("show-mobile-menu");
    mobileMenuBtn.classList.toggle("close-button");
  }

  #renderPlanet(planet, content) {
    const [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune] =
      this.#planetData;

    if (planet === "mercury") planet = mercury;
    if (planet === "venus") planet = venus;
    if (planet === "earth")  planet = earth;
    if (planet === "mars") planet = mars;
    if (planet === "jupiter") planet = jupiter;
    if (planet === "saturn") planet = saturn;
    if (planet === "uranus") planet = uranus;
    if (planet === "neptune") planet = neptune;

    if (content === "overview") content = planet.overview.content;
    if (content === "structure") content = planet.structure.content;
    if (content === "geology") content = planet.geology.content;


    if (this.#planetContent === "geology")
      this.#geologyImg = `<img src="../src/img/geology-${this.#planetName}.png"/>`;

    if (this.#planetContent === "overview") this.#source = planet.overview.source;
    if (this.#planetContent === "structure") this.#source = planet.structure.source;
    if (this.#planetContent === "geology") this.#source = planet.geology.source;
/* 
    const btn = [...navBtn];

    console.log(...btn);
 */

  
    const marktup = `
              <div class="planet-facts__tab-container">
                  <div class="planet-facts__tab">
                      <button class="
                          planet-facts__tab-btn 
                          planet-facts__tab-btn--${planet.name.toLowerCase()} 
                          planet-facts__tab-btn--overview ${
                            this.#planetContent === "overview"
                              ? "show-planet-facts"
                              : ""
                          }" 
                          data-content="overview">
                              <h4>Overview</h4> 
                      </button>
                  </div>
                  <div class="planet-facts__tab">
                      <button class="
                          planet-facts__tab-btn 
                          planet-facts__tab-btn--${planet.name.toLowerCase()} 
                          planet-facts__tab-btn--structure ${
                            this.#planetContent === "structure"
                              ? "show-planet-facts"
                              : ""
                          }" 
                          data-content="structure">
                              <h4>Structure</h4>
                      </button>
                  </div>
                  <div class="planet-facts__tab">
                      <button class="
                          planet-facts__tab-btn 
                          planet-facts__tab-btn--${planet.name.toLowerCase()} 
                          planet-facts__tab-btn--surface ${
                            this.#planetContent === "geology"
                              ? "show-planet-facts"
                              : ""
                          }" 
                          data-content="geology">
                              <h4>Surface</h4>
                      </button>
                  </div>
              </div>

          <div class="planet-facts__img">


                <img 
                  src="
                    ${
                      this.#planetContent === "overview"
                        ? planet.images.planet
                        : ""
                    }
                    ${
                      this.#planetContent === "structure"
                        ? planet.images.internal
                        : ""
                    }
                    ${
                      this.#planetContent === "geology"
                        ? planet.images.planet
                        : ""
                    }
                  " 
                  alt="${planet.name}"
                >
                ${this.#planetContent === "geology" ? this.#geologyImg : ""}


          </div>
          <div class="planet-facts__content">
            <h1 class="planet-facts__name">${planet.name}</h1>
            <p class="planet-facts__info">
              ${content}
            </p>
            <p class="planet-facts__source">Source: <a href="${
              this.#source
            }" target="_blank">Wikipedia</a></p>
          </div>

        <div class="planet-facts__datas">

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Rotation Time
            </h3>
            <h3 class="planet-facts__data-value">
              ${planet.rotation}
            </h3>
          </div>

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Revolution Time
            </h3>
            <h3 class="planet-facts__data-value">
              ${planet.revolution}
            </h3>
          </div>

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Radius
            </h3>
            <h3 class="planet-facts__data-value">
              ${planet.radius}
            </h3>
          </div>

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Average Temp.
            </h3>
            <h3 class="planet-facts__data-value">
              ${planet.temperature}
            </h3>
          </div>

        </div>
              `;
    planetFactsContainer.innerHTML = "";
    planetFactsContainer.insertAdjacentHTML("afterbegin", marktup);
  }
}

const app = new App();


