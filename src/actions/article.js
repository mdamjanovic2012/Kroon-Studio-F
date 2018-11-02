/**
 * Created by milos on 02-Nov-18.
 */
import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers/index'

export const ARTICLE_REQUEST = '@@article/DASHBOARD_REQUEST';
export const ARTICLE_SUCCESS = '@@article/DASHBOARD_SUCCESS';
export const ARTICLE_FAILURE = '@@article/DASHBOARD_FAILURE';

export const article = (message) => ({
  [RSAA]: {
      endpoint: '/api/articles/message',
      method: 'GET',
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE
      ]
  }
})