import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SWITCH_TO_SIGNUP,
    SIGNUP_SUCCESS,
    SIGN_OUT
} from "./types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ username, password }) => {
    return (dispatch) => {

        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch( () => loginUserFail(dispatch));
    };
};

const loginUserSuccess = ( dispatch, user ) => {
  dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
  });

  dispatch({ type: SIGNUP_SUCCESS });

  Actions.main();

};

const loginUserFail = (dispatch) => {
  dispatch({
      type: LOGIN_USER_FAIL
  });

  console.log("failing");
};

export const navigateSignup = () => {
    return (dispatch) => {
        dispatch({type: SWITCH_TO_SIGNUP});
        Actions.auth({ type: 'reset' });
    };
};

export const signOut = () => {
    return (dispatch) => {
      dispatch({type: SIGN_OUT});
      Actions.login();
    };
};