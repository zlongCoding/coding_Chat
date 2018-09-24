import createAsyncAction from 'utils/createAsyncAction';
import Api from "utils/api";

function getWeChatAccount(data) {
  return createAsyncAction('HOME_GET_WECHAT', () => (
    Promise.resolve({
      data: data
    })
  ));
}

export default {
  getWeChatAccount,
};
