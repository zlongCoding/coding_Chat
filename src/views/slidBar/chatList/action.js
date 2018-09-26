import Api from "utils/api";

function getWeChatList(data, index) {
  return (dispatch) => {
    Api.get({
      url: "/wechat/avator",
      params: {
        img: data.HeadImgUrl,
        title: data.UserName,
      },
    }).then((res) => {
      dispatch({
        type: "CHATLIST_LOAD",
        index,
        data: `data:image/jpeg;base64, ${res}`,
      });
    });
  };
}

function dispatchChatlist(data) {
  return (dispatch) => {
    dispatch({
      type: "CHATLIST_PUSH",
      data,
    });
  };
}

export default {
  getWeChatList,
  dispatchChatlist,
};
