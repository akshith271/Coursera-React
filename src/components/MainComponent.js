import React, { Component } from 'react'
import Home from './HomeComponent'
import Menu from './MenuComponent'
import Contact from './ContactComponent'
import {connect} from 'react-redux'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import DishDetail from './DishDetailComponent.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './AboutComponent'
import withRouter from "react-router-dom/es/withRouter";

const mapStateToProps = state => {
    //will make redux's store's state to props that become available to components
    return {
        dishes: state.dishes, //dishes now will become available from store's state
        comments : state.comments,
        promotions: state.promotions,
        leaders: state.leaders
        
    }
}

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={
                        this.props.promotions.filter(
                            (promo) => promo.featured
                        )[0]
                    }
                    leader={
                        this.props.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                />
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={
                        this.props.dishes.filter(
                            (dish) =>
                                dish.id === parseInt(match.params.dishId, 10)
                        )[0]
                    }
                    comments={this.props.comments.filter(
                        (comment) =>
                            comment.dishId === parseInt(match.params.dishId, 10)
                    )}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route
                        exact
                        path="/menu"
                        component={() => <Menu dishes={this.props.dishes} />}
                    />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route
                        exact
                        path="/aboutus"
                        component={() => <About leaders={this.props.leaders} />}
                    />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

//to connect the component to the redux store, we have to use Connect()

export default withRouter(connect(mapStateToProps)(Main));
