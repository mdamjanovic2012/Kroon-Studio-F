/**
 * Created by milos on 02-Nov-18.
 */
import * as delar from '../actions/delar'

const initialState = {
  message: ""
}

export default (state=initialState, action) => {
    console.log('TU SAAM')
    console.log(state)
    switch(action.type) {
        case delar.DEl_AR_SUCCESS:
            //logoutTokens;
          return {
            message: action.payload
          }
        default:
          return state
  }
}

export const serverMessageDel = (state) => state.message;