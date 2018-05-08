import {
    SHOES_UPDATED,
    SHOES_FETCH_SUCCESS,
    SHOES_CREATE
} from "../types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const shoeUpdated = ({ prop, value}) => {
    return {
        type: SHOES_UPDATED,
        payload: { prop, value}
    };
};

export const shoeCreate = ({ name, size, retailPrice, resellPrice, brand, condition, buyer, sellDate }) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/shoes`)
            .push({
                name,
                size,
                retailPrice,
                resellPrice,
                brand,
                condition,
                buyer,
                sellDate

            })
            .then( () => {
                dispatch({ type: SHOES_CREATE });
                Actions.shoes_inventory();
            });
    };
};

export const fetchShoes = () => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`users/${currentUser.uid}/shoes`)
            .on( 'value', snapshot => {
                dispatch({ type: SHOES_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};