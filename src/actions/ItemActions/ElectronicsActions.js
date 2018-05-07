import {
    ELECTRONICS_UPDATED,
    ELECTRONICS_FETCH_SUCCESS,
    ELECTRONICS_CREATE
} from "../types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const electronicsUpdated = ({ prop, value}) => {
    return {
        type: ELECTRONICS_UPDATED,
        payload: { prop, value}
    };
};

export const electronicsCreate = ({ entity, retailPrice, resellPrice, brand, condition, buyer, otherInfo }) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/electronics`)
            .push({
                entity: "",
                retailPrice,
                resellPrice,
                brand: "",
                condition: "",
                buyer: "",
                otherInfo: ""
            })
            .then( () => {
                dispatch({ type: ELECTRONICS_CREATE });
                Actions.electronics_inventory();
            });
    };
};

export const fetchElectronics = () => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`users/${currentUser.uid}/electronics`)
            .on( 'value', snapshot => {
                dispatch({ type: ELECTRONICS_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};