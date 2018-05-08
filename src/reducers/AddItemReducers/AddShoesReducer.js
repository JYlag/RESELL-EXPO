import {
    SHOES_CREATE,
    SHOES_UPDATED
} from "../../actions/types";

const INITIAL_STATE = {
    name: "",
    size: "",
    retailPrice: 0,
    resellPrice: 0,
    brand: "",
    condition: "",
    buyer: ""
};

export default (state = INITIAL_STATE, action ) => {

    switch ( action.type ) {
        case SHOES_UPDATED:
            return {...state, [action.payload.prop]: action.payload.value};
        case SHOES_CREATE:
            return INITIAL_STATE;
        default:
            return state;

    }

};