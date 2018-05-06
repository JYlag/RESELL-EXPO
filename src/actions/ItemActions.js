import {
    ITEM_UPDATED,
    ITEM_CREATE,
    ITEM_FETCH_SUCCESS,
    SELECTED_LIBRARY
} from "./types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const itemUpdated = ({ prop, value}) => {
  return {
      type: ITEM_UPDATED,
      payload: { prop, value}
  };
};

export const itemCreate = ({ eventName, quantity, retailPrice, resellPrice, section, row, seat, otherInfo, eventDate, sellDate}) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/items`)
            .push({
                eventName,
                quantity,
                retailPrice,
                resellPrice,
                section,
                row,
                seat,
                otherInfo,
                eventDate,
                sellDate
            })
            .then( () => {
                dispatch({ type: ITEM_CREATE });
                Actions.inventory();
            });
    };
};

export const fetchItems = () => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`users/${currentUser.uid}/items`)
            .on( 'value', snapshot => {
                dispatch({ type: ITEM_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};

export const selectedItem = (id) => {
    return {
      type: SELECTED_LIBRARY,
      payload: id
    };
};