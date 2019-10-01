import React from "react";
import Context from "./Context";

class Provider extends React.Component {
  state = {
    cars: [
      { name: "Honda", modal: "001" },
      { name: "Maruti", modal: "002" },
      { name: "BMW", modal: "003" }
    ]
  };
  render() {
    return (
      <Context.Provider
        value={{
          cars: this.state.cars
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
