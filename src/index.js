import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Provider from "./Provider";
import Products from "./Products";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>Hello</h1>
          <Products />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
