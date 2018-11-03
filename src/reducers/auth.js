import jwtDecode from 'jwt-decode'
import * as auth from '../actions/auth'
import * as logout from '../actions/logout'


const initialState = {
  access: undefined,
  refresh: undefined,
  errors: {},
  currentUser: undefined
}


export default (state=initialState, action) => {
    switch(action.type) {
        case auth.LOGIN_SUCCESS:
            return {
                access: {
                    token: action.payload.token,
                    ...jwtDecode(action.payload.token)
                },
                refresh: {
                    token: action.payload.token,
                    ...jwtDecode(action.payload.token)
                },
                errors: {},
                currentUser: action.payload.user
            }
        case auth.TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: action.payload.token,
                    ...jwtDecode(action.payload.token)
                },
                currentUser: action.payload.user
            }
        case auth.LOGIN_FAILURE:
        case auth.TOKEN_FAILURE:
            return {
                access: undefined,
                refresh: undefined,
                errors: action.payload.response || {'non_field_errors': action.payload.statusText},
            }
        case logout.LOGOUT_SUCCESS:
            return {
                access: undefined,
                refresh: undefined,
                errors: action.payload.response || {'non_field_errors': action.payload.statusText},
            }
        default:
            return state
    }

}

export function accessToken(state) {
    console.log('POZVAN ACCESS')
    console.log(state)
    return  state.access.token
}

export function isAccessTokenExpired(state) {
  if (state.access && state.access.exp) {
    return 1000 * state.access.exp - (new Date()).getTime() < 5000
  }
  return true
}

export function refreshToken(state) {
  if (state.refresh) {
    return  state.refresh.token
  }
}

export function isRefreshTokenExpired(state) {
  if (state.refresh && state.refresh.exp) {
    return 1000 * state.refresh.exp - (new Date()).getTime() < 5000
  }
  return true
}

export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
}

export function getCurrentUser(state) {
    if (state.currentUser){
        return {
            user_id: state.currentUser.user_id,
            username: state.currentUser.username,
            email: state.currentUser.email
        }
    }
    if (state.access) {
        return {
            user_id: state.access.user_id,
            username: state.access.username,
            email: state.access.email
        }
    }

}

export function errors(state) {
  return  state.errors
}