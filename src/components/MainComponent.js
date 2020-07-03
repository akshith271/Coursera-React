import React, { Component } from 'react'
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: 0,
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <div>
                <Header/>
                <Menu
                    dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)}
                />
                <DishDetail
                    dish={
                        this.state.dishes.find(
                            (dish) => dish.id === this.state.selectedDish
                        )
                    }
                />
                <Footer/>
            </div>
            
        )
    }
}

export default Main
