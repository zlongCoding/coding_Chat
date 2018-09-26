import Api from "utils/api";

function getWeFreindList(data, index, type) {
  return (dispatch) => {
    Api.get({
      url: "/wechat/avator",
      params: {
        img: data.HeadImgUrl,
        title: data.UserName,
      },
    }).then((res) => {
      dispatch({
        type,
        index,
        data: `data:image/jpeg;base64, ${res}`,
      });
    });
  };
}

function dispatchFreindList(data) {
  return (dispatch) => {
    dispatch({
      type: "FRIENDLIST_PUSH",
      data,
    });
  };
}

export default {
  getWeFreindList,
  dispatchFreindList,
};
