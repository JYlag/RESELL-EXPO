import {
    CLOTHING_CREATE,
    CLOTHING_UPDATED
} from "../../actions/types";

const INITIAL_STATE = {
    name: "",
    size: "",
    retailPrice: 0,
    resellPrice: 0,
    brand: "",
    condition: "",
    buyer: "",
    otherInfo: ""

};

export default (state = INITIAL_STATE, action ) => {

    switch ( action.type ) {
        case CLOTHING_UPDATED:
            return {...state, [action.payload.prop]: action.payload.value};
        case CLOTHING_CREATE:
            return INITIAL_STATE;
        default:
            return state;

    }

};