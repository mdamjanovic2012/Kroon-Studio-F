/**
 * Created by milos on 02-Nov-18.
 */
import * as logout from '../actions/logout'

const initialState = {
  message: ""
}

export default (state=initialState, action) => {
    switch(action.type) {
        case logout.LOGOUT_SUCCESS:
            //logoutTokens;
          return {
            message: action.payload
          }
        default:
          return state
  }
}

export const serverMessage = (state) => state.message;