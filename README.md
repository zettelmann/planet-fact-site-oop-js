# Solar System web application (OOP with JS)

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). 

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

[&rarr; Here you can try the hosted solution](https://condescending-hermann-37d9b6.netlify.app/).

## Planning Process

### Flowchart

The API approach, that fetch ```data.json``` from the server, updates the section of the webpage by requesting the planet data.

![](https://raw.githubusercontent.com/zettelmann/planet-fact-site-oop-js/main/planets-fact-site-flowchart.jpg)

If the user clicks on navigation for a new planet, the asynchronous fetching starts again and updates the section container again. The same applies to the content buttons.

app.js
```javascript 
import Data from '../data.json'
import { Planet } from './planet';

  async #loadPlanetData() {
    try {
      const res = await fetch(Data);        // Data = data.json
      this.#planetData = await res.json();
      if (!res.ok)
        throw new Error(`${this.#planetData.message} (${res.status})`);

        this.#planet = new Planet(;        // creating new Planet instance 
        this.#planetData,                  // dafault patameter = "earth";
        this.#planetName,                  // dafault patameter = "overview";
        this.#planetContent
      );

      this.#renderPlanet();               // render content
    } catch (err) {
      console.error(err);
    }
  }
```

### Architecture

The object-oriented programming paradigm is the selected concept of this application. It allows to seperate data in ```planet.js``` and behavior in ```app.js``` from each other.

![](https://raw.githubusercontent.com/zettelmann/planet-fact-site-oop-js/main/planets-fact-site-architecture.jpg)

## Getting Started

1. Clone the repo
```
git clone https://github.com/zettelmann/planet-fact-site-oop-js.git
```

2. Install NPM packages
```
npm install
```

3. Start development mode
```
npm start
```

OR

3. Start production mode
```
npm run build
```
