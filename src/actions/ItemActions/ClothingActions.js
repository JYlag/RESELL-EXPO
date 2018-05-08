import {
    CLOTHING_UPDATED,
    CLOTHING_CREATE,
    CLOTHING_FETCH_SUCCESS
} from "../types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const clothingUpdated = ({ prop, value}) => {
    return {
        type: CLOTHING_UPDATED,
        payload: { prop, value}
    };
};

export const clothingCreate = ({ name, size, retailPrice, resellPrice, brand, condition, buyer, sellDate, otherInfo }) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/clothing`)
            .push({
                name,
                size,
                retailPrice,
                resellPrice,
                brand,
                condition,
                buyer,
                sellDate,
                otherInfo
            })
            .then( () => {
                dispatch({ type: CLOTHING_CREATE });
                Actions.clothing_inventory();
            });
    };
};

export const fetchClothing = () => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`users/${currentUser.uid}/clothing`)
            .on( 'value', snapshot => {
                dispatch({ type: CLOTHING_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};