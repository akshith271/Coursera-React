import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from "./forms";
import {createForms} from "react-redux-form";
//enables us to add the form state into the store
//it creates a reducer that takes care of the form

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback : InitialFeedback
            })
            //this will add the important reducers needed to add the form to the store
        }),
        applyMiddleware(thunk, logger) //both of these are supplied to our store
    );
    
    return store;
};
