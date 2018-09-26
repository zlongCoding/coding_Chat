const defaultState = {
  chatList: [],
};

const getListSuccess = (state = defaultState, action) => {
  switch (action.type) {
    case "CHATLIST_PUSH":
      return {
        ...state,
        chatList: [...state.chatList, ...action.data],
      };
    case "CHATLIST_LOAD": {
      const array = [...state.chatList];
      if (array[action.index].HeadImgUrl.includes("data:image/jpeg;base64,")) {
        return {
          ...state,
        };
      }
      array[action.index].HeadImgUrl = action.data;
      return {
        ...state,
        chatList: array,
      };
    }
    default:
      return state;
  }
};

export default getListSuccess;
