import createReducer from 'utils/createReducer';

const defaultState = () => ({
  wechatAccout: {},
});

const getWeChatSuccess = (state, action) => ({
  ...state,
  wechatAccout: action.payload.data,
});

export default createReducer(defaultState, {
  HOME_GET_WECHAT_SUCCESS: getWeChatSuccess,
});
