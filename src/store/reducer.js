import createReducer from 'utils/createReducer';

const defaultState = () => ({
  isLogin: '',
});

const getLoginState = (state, action) => ({
  ...state,
  isLogin: action.payload.data,
});

export default createReducer(defaultState, {
  USER_GET_USERS_SUCCESS: getLoginState,
});
