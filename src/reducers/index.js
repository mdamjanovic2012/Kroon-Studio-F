import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth, * as fromAuth from './auth.js'
import dashboard, * as fromDashboard from './dashboard.js'

export default combineReducers({
  auth: auth,
  dashboard: dashboard,
  router: routerReducer
})


export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const getCurrentUser = state => fromAuth.getCurrentUser(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const serverMessage = state => fromDashboard.serverMessage(state.dashboard)

export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `JWT ${accessToken(state)}`
  })
}