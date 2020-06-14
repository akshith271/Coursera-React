import React, { Component } from 'react'
//gives our component access to React.Component's functions.
import DishDetail from './DishdetailComponent'
import {
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
} from 'reactstrap'
import { DISHES as dish } from '../shared/dishes'

class Menu extends Component {
    //this is how we define a component
    // (name should start with uppercase)
    constructor(props) {
        // props will make the constructor inherit the parent component(React.Component) properties
        super(props)

        //	component properties should be kept in an object called state
        this.state = {
            selectedDish: null,
        }
    }

    onDishSelect(dish) {
        //takes dish as input
        this.setState({ selectedDish: dish })
    }

    render() {
        const { selectedDish } = this.state; //object re-structuring
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1 ">
                    <Card onClick={() => this.onDishSelect(dish)} tag="li">
                        <CardImg
                            width="100%"
                            src={dish.image}
                            alt={dish.name}
                        />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">{menu}</div>
                <div className="row">
                    {selectedDish ? (
                        <DishDetail dish={this.state.selectedDish} />
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Menu
