import {
    TICKET_CREATE,
    TICKET_UPDATED
} from "../../actions/types";

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
        case TICKET_UPDATED:
            return {...state, [action.payload.prop]: action.payload.value};
        case TICKET_CREATE:
            return INITIAL_STATE;
        default:
            return state;

    }

};