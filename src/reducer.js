import { combineReducers } from "redux";
import { agreeReducer } from "./Agree/reducer";
import { detailReducer } from "./Detail/reducer";
const rootReducer = combineReducers({
  agreeReducer: agreeReducer,
  detailReducer: detailReducer,
});

export default rootReducer;
