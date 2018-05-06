import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_USER,
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    VERIFY_CHANGED,
    SWITCH_TO_LOGIN
} from "../actions/types";

const INITIAL_STATE = {
  username: '',
  password: '',
  verify: '',
  loading: false,
  error: '',
  user: null
};

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case USERNAME_CHANGED:
            return {...state, username: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case VERIFY_CHANGED:
            return {...state, verify: action.payload };
        case SIGNUP_USER:
            return {...state, loading: true, error: ''};
        case SIGNUP_SUCCESS:
            return {...state,
                ...INITIAL_STATE,
                user: action.payload
            };
        case SIGNUP_FAIL:
            return {...state,
                error: 'Passwords do not match',
                loading: false,
                password: ''
            };
        case SWITCH_TO_LOGIN:
            return INITIAL_STATE;
        default:
            return state;
    }
};