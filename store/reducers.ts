// third-party
import { combineReducers } from "redux";

// project imports
import themeReducer from "./slices/theme";
import authReducer from "./slices/auth";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  themeReducer,
  authReducer,
});

export default reducer;
