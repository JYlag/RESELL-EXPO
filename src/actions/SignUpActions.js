import {
    SIGNUP_USER,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    VERIFY_CHANGED,
    SWITCH_TO_LOGIN
} from "./types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const verifyChanged = (text) => {
    return {
        type: VERIFY_CHANGED,
        payload: text
    };
};

export const signupUser = ({ username, password, verify}) => {

    console.log(username);
    console.log(password);
    console.log(verify);

    if (password == verify) {
        console.log("Success");

        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(username, password)
                .then(user => signupSuccess(dispatch, user))
                .catch(() => signupFail(dispatch));
        };
    }

    else {
        return ( dispatch ) => { signupFail(dispatch) };
    }
};

const signupSuccess = ( dispatch, user ) => {
      dispatch({
         type: SIGNUP_SUCCESS,
         payload: user
      });

      Actions.main();
};

const signupFail = ( dispatch ) => {
      dispatch({ type: SIGNUP_FAIL });
      console.log("Failed");
};

export const navigateLogin = () => {
    return (dispatch) => {
        dispatch({ type: SWITCH_TO_LOGIN });
        Actions.login();
    };

};