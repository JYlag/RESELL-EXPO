import {
    ELECTRONICS_CREATE,
    ELECTRONICS_UPDATED
} from "../../actions/types";

const INITIAL_STATE = {
    name: "",
    retailPrice: 0,
    resellPrice: 0,
    brand: "",
    condition: "",
    buyer: "",
    otherInfo: "",
    sellDate: ""
};

export default (state = INITIAL_STATE, action ) => {

    switch ( action.type ) {
        case ELECTRONICS_UPDATED:
            return {...state, [action.payload.prop]: action.payload.value};
        case ELECTRONICS_CREATE:
            return INITIAL_STATE;
        default:
            return state;

    }

};