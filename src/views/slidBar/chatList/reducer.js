import createReducer from 'utils/createReducer';

const defaultState = () => ({
  chatList: [],
});

const getListSuccess = (state, action) => ({
  ...state,
  chatList: action.payload.data,
});

export default createReducer(defaultState, {
  CHATLIST_SUCCESS: getListSuccess,
});
