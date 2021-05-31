import { createStore, combineReducers } from "redux"
import { AuthReducer } from "./reducer"

const rootReducer = combineReducers({
  auth: AuthReducer,
  
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)