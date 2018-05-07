import {
    ELECTRONICS_CREATE,
    ELECTRONICS_UPDATED
} from "../../actions/types";

const INITIAL_STATE = {
    entity: "",
    retailPrice: 0,
    resellPrice: 0,
    brand: "",
    condition: "",
    seller: "",
    otherInfo: ""
};

export default (state = INITIAL_STATE, action ) => {

    switch ( action.type ) {
        case ELECTRONICS_CREATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case ELECTRONICS_UPDATED:
            return INITIAL_STATE;
        default:
            return state;

    }

};