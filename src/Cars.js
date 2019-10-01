import React from "react";
import Context from "./Context";

const Cars = props => (
  <ul>
    <Context.Consumer>
      {context =>
        context.cars.map((c, i) => (
          <li key={i}>
            {c.name} - {c.modal}
          </li>
        ))
      }
    </Context.Consumer>
  </ul>
);

export default Cars;
