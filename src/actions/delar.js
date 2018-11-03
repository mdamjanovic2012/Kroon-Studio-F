/**
 * Created by milos on 02-Nov-18.
 */
import { RSAA } from 'redux-api-middleware';
import withAuth from '../reducers/index'

export const DEl_AR_REQUEST = '@@delar/DEl_AR_REQUEST';
export const DEl_AR_SUCCESS = '@@delar/DEl_AR_SUCCESS';
export const DEl_AR_FAILURE = '@@delar/DEl_AR_FAILURE';


export const delar = (message) => ({
  [RSAA]: {
      endpoint: '/api/categories/',
      method: 'GET',
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        DEl_AR_REQUEST, DEl_AR_SUCCESS, DEl_AR_FAILURE
      ]
  }
})