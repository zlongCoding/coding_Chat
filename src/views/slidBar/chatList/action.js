import createAsyncAction from 'utils/createAsyncAction';
import Api from "utils/api";

function getWeChatList() {
  return createAsyncAction('CHATLIST', () => (
    Api.get({
      url: "/wechat/account"
    }).then(res => {
      console.log(res)
    })
  ));
}

function dispatchChatlist(data) {
  return createAsyncAction('CHATLIST', () => (
    Promise.resolve({
      data: data,
    })
  ));
}

export default {
  getWeChatList,
  dispatchChatlist
};
