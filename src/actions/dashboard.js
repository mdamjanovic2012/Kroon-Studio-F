/**
 * Created by milos on 30-Oct-18.
 */
import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers/index'

export const ECHO_REQUEST = '@@dashboard/DASHBOARD_REQUEST';
export const ECHO_SUCCESS = '@@dashboard/DASHBOARD_SUCCESS';
export const ECHO_FAILURE = '@@dashboard/DASHBOARD_FAILURE';

export const dashboard = (message) => ({
  [RSAA]: {
      endpoint: '/api/articles/',
      method: 'GET',
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        ECHO_REQUEST, ECHO_SUCCESS, ECHO_FAILURE
      ]
  }
})