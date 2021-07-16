// importing stylesheet
import "../sass/main.scss";
import Data from '../data.json'
import { Planet } from './planet';


// DOM elements
const planetFactsContainer = document.querySelector(".section-planet-facts");
const navBtnContainer = document.querySelector(".nav__list");
const navBtn = document.querySelectorAll(".nav__btn");
const mobileMenuNav = document.querySelector(".nav");
const mobileMenuBtn = document.querySelector(".mobile-menu__button");
// DOM elements

class App {
  #planetName = "earth";
  #planetContent = "overview";
  #planetData;
  #planet;

  constructor() {
    this.#loadPlanetData();

    navBtnContainer.addEventListener("click", this.#getPlanetName.bind(this));
    planetFactsContainer.addEventListener(
      "click",
      this.#getPlanetContent.bind(this)
    );
    mobileMenuBtn.addEventListener("click", this.#toggleMobileNav.bind(this));
  }

  async #loadPlanetData() {
    try {
      const res = await fetch(Data);
      this.#planetData = await res.json();
      if (!res.ok)
        throw new Error(`${this.#planetData.message} (${res.status})`);

        this.#planet = new Planet(
        this.#planetData,
        this.#planetName,
        this.#planetContent
      );

      this.#renderPlanet();
    } catch (err) {
      console.error(err);
    }
  }

  #getPlanetName(e) {
    const clicked = e.target.closest(".nav__item");
    if (!clicked) return;

    const [planet] = clicked.children;
    const data = planet.dataset.planet;
    this.#planetName = data;

    this.#loadPlanetData();
    this.#toggleMobileNav();

    this.#indicatorNav();
  }

  #getPlanetContent(e) {
    const clicked = e.target.closest(".planet-facts__tab-btn");
    if (!clicked) return;

    this.#planetContent = clicked.dataset.content;
    this.#loadPlanetData();
  }

  #toggleMobileNav() {
    mobileMenuNav.classList.toggle("show-mobile-menu");
    mobileMenuBtn.classList.toggle("close-button");
  }

  #indicatorNav() {
    navBtn.forEach((btn) => {
      btn.classList.remove("active");
    });

    const btnContainer = Array.prototype.slice.call(navBtn);
    const btnItem = btnContainer.find(
      (item) => item.dataset.planet === this.#planetName
    );
    btnItem.classList.add("active");
  }

  #renderPlanet() {
    const renderTabIndicator = (content, indicator) =>
      content === indicator ? "show-planet-facts" : "";

    const marktup = `
              <div class="planet-facts__tab-container">
                  <div class="planet-facts__tab">
                      <button class="
                          planet-facts__tab-btn 
                          planet-facts__tab-btn--${this.#planet.id} 
                          planet-facts__tab-btn--overview ${renderTabIndicator(
                            this.#planetContent,
                            "overview"
                          )}" 
                          data-content="overview">
                              <h4>Overview</h4> 
                      </button>
                  </div>
                  <div class="planet-facts__tab">
                      <button class="
                          planet-facts__tab-btn 
                          planet-facts__tab-btn--${this.#planet.id} 
                          planet-facts__tab-btn--structure ${renderTabIndicator(
                            this.#planetContent,
                            "structure"
                          )}" 
                          data-content="structure">
                              <h4>Structure</h4>
                      </button>
                  </div>
                  <div class="planet-facts__tab">
                      <button class="
                          planet-facts__tab-btn 
                          planet-facts__tab-btn--${this.#planet.id} 
                          planet-facts__tab-btn--surface ${renderTabIndicator(
                            this.#planetContent,
                            "geology"
                          )}" 
                          data-content="geology">
                              <h4>Surface</h4>
                      </button>
                  </div>
              </div>

          <div class="planet-facts__img">
                <img src="${this.#planet.image}" alt="${this.#planet.id}">
                ${
                  this.#planetContent === "geology"
                    ? this.#planet.geologyImgage
                    : ""
                }
          </div>
          <div class="planet-facts__content">
            <h1 class="planet-facts__name">${this.#planet.id}</h1>
            <p class="planet-facts__info">
              ${this.#planet.content}
            </p>
            <p class="planet-facts__source">Source: <a href="${
              this.#planet.source
            }" target="_blank">Wikipedia</a></p>
          </div>

        <div class="planet-facts__datas">

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Rotation Time
            </h3>
            <h3 class="planet-facts__data-value">
              ${this.#planet.rotation}
            </h3>
          </div>

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Revolution Time
            </h3>
            <h3 class="planet-facts__data-value">
              ${this.#planet.revolution}
            </h3>
          </div>

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Radius
            </h3>
            <h3 class="planet-facts__data-value">
              ${this.#planet.radius}
            </h3>
          </div>

          <div class="planet-facts__data">
            <h3 class="planet-facts__data-name">
              Average Temp.
            </h3>
            <h3 class="planet-facts__data-value">
              ${this.#planet.temperature}
            </h3>
          </div>

        </div>
              `;
    planetFactsContainer.innerHTML = "";
    planetFactsContainer.insertAdjacentHTML("afterbegin", marktup);
  }
}

const app = new App();


