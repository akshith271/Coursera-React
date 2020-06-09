import React, { Component } from "react";
//gives our component access to React.Component's functions.
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Media,
} from "reactstrap";
import { DISHES as dish } from "../shared/dishes";

class Menu extends Component {
  //this is how we define a component
  // (name should start with uppercase)
  constructor(props) {
    // initiate the component's properties
    super(props);

    //	component properties should be kept in an object called state
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    //takes dish as input
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  //	component also requires a render() method, this method returns HTML.
  render() {
      const {selectedDish} = this.state; //object se-structuring
    const menu = this.props.dishes.map((dish) => {
      //here state is changed to props (since we are passing dishes as props but not as a state)
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1 ">
          <Card onClick={() => this.onDishSelect(dish)} tag="li">
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
