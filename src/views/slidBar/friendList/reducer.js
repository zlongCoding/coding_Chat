import createReducer from 'utils/createReducer';

const defaultState = () => ({
  friendList: [],
});

const getMessageSuccess = (state, action) => ({
  ...state,
  friendList: action.payload.data,
});

export default createReducer(defaultState, {
  FRIENDLIST_SUCCESS: getMessageSuccess,
});
