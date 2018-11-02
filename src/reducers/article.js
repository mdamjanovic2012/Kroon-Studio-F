/**
 * Created by milos on 02-Nov-18.
 */
import * as article from '../actions/article'

const initialState = {
  message: ""
}

export default (state=initialState, action) => {
  switch(action.type) {
    case article.ARTICLE_SUCCESS:
      return {
        message: action.payload
      }
    default:
      return state
  }
}

export const serverMessage = (state) => state.message;