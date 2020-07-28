import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        default:
            return state;
    }
};
