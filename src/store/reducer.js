import createReducer from 'utils/createReducer';

const defaultState = () => ({
  isLogin: false,
  user: {},
});

const getLoginState = (state, action) => ({
  ...state,
  isLogin: false,
  user: {}
});

export default createReducer(defaultState, {
  USER_SET_USER_SUCCESS: getLoginState,
});
