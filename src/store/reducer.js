import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/component/recommend/store"

const reducer = combineReducers({
  recommend: recommendReducer
})

export default reducer