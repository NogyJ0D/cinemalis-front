const types = {
  login: 'login',
  logout: 'logout',
  setMovie: 'setMovie',
  resetMovie: 'resetMovie'
}

const initialState = {
  user: {},
  movie: {}
}

const globalReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, user: action.payload }
    case types.loginFail:
      return { ...state, user: null }
    case types.logout:
      return { ...state, user: null }

    case types.setMovie:
      return { ...state, movie: action.payload }
    case types.resetMovie:
      return { ...state, movie: null }

    default:
      break
  }
}

export { initialState, types }
export default globalReducer
