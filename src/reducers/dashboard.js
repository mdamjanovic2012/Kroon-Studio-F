import * as dashboard from '../actions/dashboard'

const initialState = {
  message: ""
}

export default (state=initialState, action) => {
    console.log('TU SAAM2')
    console.log(state)
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