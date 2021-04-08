import { createStore, combineReducers } from "redux"
import { AuthReducer } from "./reducer"

const rootReducer = combineReducers({
  auth: AuthReducer,
})

export default createStore(rootReducer)