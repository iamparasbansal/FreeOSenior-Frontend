import { UPDATE_AUTH } from "../actions/Auth"

export default function AuthReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_AUTH:
      return action.data
    default:
      return state
  }
}
