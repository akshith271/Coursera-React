import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap"; //react implementation of bootstrap
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes"; //importing the const

class App extends Component {
  constructor(props) {
    //we need to define state in the constructor
    super(props);

    this.state = {
      //we can simply use the DISHES const in the state instead of writing it here
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> {/*making dishes available as props to the menu component*/}
        
      </div>
    );
  }
}

export default App;
