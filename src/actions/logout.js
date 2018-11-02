/**
 * Created by milos on 02-Nov-18.
 */
import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers/index'

export const LOGOUT_REQUEST = '@@logout/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = '@@logout/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = '@@logout/LOGOUT_FAILURE';

export const logout = (message) => ({
  [RSAA]: {
      endpoint: '/api-auth/logout/',
      method: 'POST',
      types: [
        LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
      ]
  }
})