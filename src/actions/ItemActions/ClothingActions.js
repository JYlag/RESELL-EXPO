import {
    TICKET_UPDATED,
    TICKET_FETCH_SUCCESS,
    TICKET_CREATE
} from "../types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const ticketUpdated = ({ prop, value}) => {
    return {
        type: TICKET_UPDATED,
        payload: { prop, value}
    };
};

export const ticketCreate = ({ eventName, quantity, retailPrice, resellPrice, section, row, seat, otherInfo, eventDate, sellDate}) => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/tickets`)
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
                dispatch({ type: TICKET_CREATE });
                Actions.ticket_inventory();
            });
    };
};

export const fetchTickets = () => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`users/${currentUser.uid}/tickets`)
            .on( 'value', snapshot => {
                dispatch({ type: TICKET_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};