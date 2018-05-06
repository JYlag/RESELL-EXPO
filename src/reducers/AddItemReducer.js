import {
    ITEM_CREATE,
    ITEM_UPDATED,
    ITEM_RESET
} from "../actions/types";

const INITIAL_STATE = {
    eventName: "",
    quantity: 0,
    retailPrice: 0,
    resellPrice: 0,
    section: "",
    row: "",
    seat: "",
    otherInfo: ""
};

export default (state = INITIAL_STATE, action ) => {

    switch ( action.type ) {
        case ITEM_UPDATED:
            return {...state, [action.payload.prop]: action.payload.value};
        case ITEM_CREATE:
            return INITIAL_STATE;
        case ITEM_RESET:
            return INITIAL_STATE;
        default:
            return state;

    }

};