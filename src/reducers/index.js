import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import SignUpReducer from "./SignUpReducer";
import AddItemReducer from "./AddItemReducer";
import ItemReducer from "./ItemReducer";

export default combineReducers({
    auth: AuthReducer,
    signup: SignUpReducer,
    addItems: AddItemReducer,
    items: ItemReducer
});