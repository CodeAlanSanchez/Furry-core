import { FETCH_DOGS, CHOOSE_OPTION } from "../actions/types";

const dogReducer = (dogs = [], action: {type: '', payload: {}}) => {
    switch(action.type as String) {
        case FETCH_DOGS:
            return action.payload;
        case CHOOSE_OPTION:
            return action.payload;
        default:
            return dogs;
    }
}

export default dogReducer;