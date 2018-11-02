/**
 * Created by milos on 30-Oct-18.
 */
import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers/index'

export const DASHBOARD_REQUEST = '@@dashboard/DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = '@@dashboard/DASHBOARD_SUCCESS';
export const DASHBOARD_FAILURE = '@@dashboard/DASHBOARD_FAILURE';

export const dashboard = (message) => ({
  [RSAA]: {
      endpoint: '/api/articles/',
      method: 'GET',
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        DASHBOARD_REQUEST, DASHBOARD_SUCCESS, DASHBOARD_FAILURE
      ]
  }
})