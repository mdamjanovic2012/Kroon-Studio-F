import * as dashboard from '../actions/dashboard'

const initialState = {
  message: ""
}

export default (state=initialState, action) => {
  switch(action.type) {
    case dashboard.DASHBOARD_SUCCESS:
      return {
        message: action.payload
      }
    default:
      return state
  }
}

export const serverMessage = (state) => state.message;