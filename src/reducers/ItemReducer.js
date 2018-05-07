import {
    CLOTHING_FETCH_SUCCESS,
    ELECTRONICS_FETCH_SUCCESS,
    SHOES_FETCH_SUCCESS,
    TICKET_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
      case TICKET_FETCH_SUCCESS:
          console.log(action);
          return action.payload;
      case SHOES_FETCH_SUCCESS:
          return action.payload;
      case ELECTRONICS_FETCH_SUCCESS:
          return action.payload;
      case CLOTHING_FETCH_SUCCESS:
          return action.payload;
      default:
          return state;
  }
};