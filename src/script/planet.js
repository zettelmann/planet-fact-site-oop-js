import "core-js/stable";

import EarthPlanet from "../svg/planet-earth.svg";
import EarthInternal from "../svg/planet-earth-internal.svg";
import EarthGeology from "../img/geology-earth.png";

import JupiterPlanet from "../svg/planet-jupiter.svg";
import JupiterInternal from "../svg/planet-jupiter-internal.svg";
import JupiterGeology from "../img/geology-jupiter.png";

import MarsPlanet from "../svg/planet-mars.svg";
import MarsInternal from "../svg/planet-mars-internal.svg";
import MarsGeology from "../img/geology-mars.png";

import MercuryPlanet from "../svg/planet-mercury.svg";
import MercuryInternal from "../svg/planet-mercury-internal.svg";
import MercuryGeology from "../img/geology-mercury.png";

import NeptunePlanet from "../svg/planet-neptune.svg";
import NeptuneInternal from "../svg/planet-neptune-internal.svg";
import NeptuneGeology from "../img/geology-neptune.png";

import SaturnPlanet from "../svg/planet-saturn.svg";
import SaturnInternal from "../svg/planet-saturn-internal.svg";
import SaturnGeology from "../img/geology-saturn.png";

import UranusPlanet from "../svg/planet-uranus.svg";
import UranusInternal from "../svg/planet-uranus-internal.svg";
import UranusGeology from "../img/geology-uranus.png";

import VenusPlanet from "../svg/planet-venus.svg";
import VenusInternal from "../svg/planet-venus-internal.svg";
import VenusGeology from "../img/geology-venus.png";

export class Planet {
  #data;

  constructor(data, id, content) {
    this.#data = data;
    this.id = id;
    this.content = content;
    this.#createPlanet(this.id, this.content, this.#data);
  }

  #createPlanet(id, content, data) {
    const [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune] =
      data;
    // assigning planet data from data.json to this.#data
    if (this.id === "mercury") {
      this.#data = mercury;
      this.#data.images.planet = MercuryPlanet;
      this.#data.images.internal = MercuryInternal;
      this.#data.images.geology = MercuryGeology;
    }

    if (this.id === "venus") {
      this.#data = venus;
      this.#data.images.planet = VenusPlanet;
      this.#data.images.internal = VenusInternal;
      this.#data.images.geology = VenusGeology;
    }
    if (this.id === "earth") {
      this.#data = earth;
      this.#data.images.planet = EarthPlanet;
      this.#data.images.internal = EarthInternal;
      this.#data.images.geology = EarthGeology;
    }
    if (this.id === "mars") {
      this.#data = mars;
      this.#data.images.planet = MarsPlanet;
      this.#data.images.internal = MarsInternal;
      this.#data.images.geology = MarsGeology;
    }
    if (this.id === "jupiter") {
      this.#data = jupiter;
      this.#data.images.planet = JupiterPlanet;
      this.#data.images.internal = JupiterInternal;
      this.#data.images.geology = JupiterGeology;
    }
    if (this.id === "saturn") {
      this.#data = saturn;
      this.#data.images.planet = SaturnPlanet;
      this.#data.images.internal = SaturnInternal;
      this.#data.images.geology = SaturnGeology;
    }
    if (this.id === "uranus") {
      this.#data = uranus;
      this.#data.images.planet = UranusPlanet;
      this.#data.images.internal = UranusInternal;
      this.#data.images.geology = UranusGeology;
    }
    if (this.id === "neptune") {
      this.#data = neptune;
      this.#data.images.planet = NeptunePlanet;
      this.#data.images.internal = NeptuneInternal;
      this.#data.images.geology = NeptuneGeology;
    }
    // generate planet name
    this.id = id;
    // generate planet content
    if (content === "overview") {
      this.content = this.#data.overview.content;
      this.source = this.#data.overview.source;
      this.image = this.#data.images.planet;
    }
    if (content === "structure") {
      this.content = this.#data.structure.content;
      this.source = this.#data.structure.source;
      this.image = this.#data.images.internal;
    }
    if (content === "geology") {
      this.content = this.#data.geology.content;
      this.source = this.#data.geology.source;
      this.image = this.#data.images.planet;
    }
    // condition for geology image
    this.geologyImgage = `<img src="${this.#data.images.geology}"/>`;
    // generate planet values
    this.rotation = this.#data.rotation;
    this.revolution = this.#data.revolution;
    this.radius = this.#data.radius;
    this.temperature = this.#data.temperature;
  }
}
