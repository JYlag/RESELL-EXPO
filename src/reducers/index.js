import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import SignUpReducer from "./SignUpReducer";
import AddTicketReducer from "./AddItemReducers/AddTicketReducer";
import ItemReducer from "./ItemReducer";
import AddShoesReducer from "./AddItemReducers/AddShoesReducer";
import AddElectronicsReducer from "./AddItemReducers/AddElectronicsReducer";
import AddClothingReducer from "./AddItemReducers/AddClothingReducer";
import SizeDataReducer from "./SizeDataReducer";
import BrandDataReducer from "./BrandDataReducer";
import ConditionDataReducer from "./ConditionDataReducer";

export default combineReducers({
    auth: AuthReducer,
    signup: SignUpReducer,
    addTickets: AddTicketReducer,
    addShoes: AddShoesReducer,
    addElectronics: AddElectronicsReducer,
    addClothing: AddClothingReducer,
    items: ItemReducer,
    sizeData: SizeDataReducer,
    brandData: BrandDataReducer,
    conditionData: ConditionDataReducer
});