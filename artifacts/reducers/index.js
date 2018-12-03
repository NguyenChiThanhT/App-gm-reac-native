import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import homeReducer from "../container/HomeContainer/reducer";
import profileReducer from "../container/ProfileContainer/reducer";
import homeDetailReducer from "../container/HomeDetailContainer/reducer";
export default combineReducers({
    form: formReducer,
    profileReducer,
    homeDetailReducer,
    homeReducer,
});
//# sourceMappingURL=index.js.map