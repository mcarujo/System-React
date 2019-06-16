# [React](https://reactjs.org/) &middot; [PureCSS](https://purecss.io/)

React is a JavaScript library for building user interfaces. PureCSS is a CSS library to help developers build their pages in an easier way.
I used too the [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) to start this repository.

## Installation

- At first, you must install the dependencies,
  for that you can use the command `npm install` inside the folder `my-app`, to be honest, I recommend you change the name of this folder.

- At dev environment, you just need to run the command `npm start run`, and go to your browser and see the port 3000, put the URL classic: [http://localhost:3000/](http://localhost:3000/).

## Documentation

- You can find the React documentation [on the website](https://reactjs.org/docs).
- You can find the PureCSS Get Started [on the website](https://purecss.io/start/).

And about my project structure

- Screen

  - For creating a new screen you must put inside the screen folder, the path is `src/screen`. Don't forget to add the import and export on index.js inside the screen folder.
  - For use this new screen you must import him as well, you must specify the class import like that inside in your index.js with is located in `src/index.js`:

    ```jsx
    import { TableGeneric, FormGeneric, Home, YourNewScreen } from "./screen";
    ```

    And to set this new screen you must change some variables, yet your `src/index.js`pay attention with this part of the code:

    ```xml
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/table" component={TableGeneric} />
        <Route path="/form" component={FormGeneric} />
        <Route path="/newpath" component={YourNewScreen} /> // Here comes your new line
      </Route>
    </Router>
    ```

    Now you probably wanna go to this screen, right? So for do that you must add this new screen in your side menu. You can do this change the state variable in `scr/App.js`:

    ```js
    constructor() {
    super();
    this.state = {
      SystemTitle: "Carujo's System",
      SystemSubTitle:
        "One single page application to use for starting your project",
      menuTitle: "Home",
      menuItems: [
        { name: "Table", link: "/table" },
        { name: "Form", link: "/form" },
        { name: "New Screen", link: "/newpath" } // And here you add a new item in your side menu
      ]
    };
    }
    ```

- Components
  - For creating a new component you must put inside the components folder, the path is `src/components`. Don't forget to add the import and export on index.js inside the components folder.
  - For use this new component you must import him, of course, you must specify the class import like that:
    ```jsx
    import { Component } from "../components";
    ```
