// third-party
import { combineReducers } from "redux";

// project imports
import themeReducer from "./slices/theme";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  themeReducer,
});

export default reducer;
