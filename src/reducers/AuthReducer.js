import {
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SWITCH_TO_SIGNUP, SIGN_OUT
} from "../actions/types";

const INITIAL_STATE = {
    username: '',
    password: '',
    error: '',
    loading: false,
    user: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case USERNAME_CHANGED:
            return {...state, username: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return {...state,
                ...INITIAL_STATE,
                user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state,
                error: 'Username or Password is invalid',
                password: '',
                loading: false};
        case SWITCH_TO_SIGNUP:
            return INITIAL_STATE;
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};