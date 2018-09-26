const defaultState = {
  friendList: [],
  publicList: [],
  friendCount: 0,
  publicCount: 0,
};

const getFriendSuccess = (state = defaultState, action) => {
  switch (action.type) {
    case "FRIENDLIST_PUSH": {
      console.log(action.data);
      const friendArray = [];
      const publicArray = [];
      action.data.MemberList.forEach((item) => {
        if (item.AttrStatus === 0) {
          publicArray.push(item);
        } else {
          friendArray.push(item);
        }
      });
      return {
        ...state,
        friendList: friendArray,
        publicList: publicArray,
        friendCount: friendArray.length,
        publicCount: publicArray.length,
      };
    }
    case "FRIENDLIST_LOAD": {
      const array = [...state.friendList];
      if (array[action.index].HeadImgUrl.includes("data:image/jpeg;base64,")) {
        return {
          ...state,
        };
      }
      array[action.index].HeadImgUrl = action.data;
      return {
        ...state,
        friendList: array,
      };
    }
    case "PUBLICLIST_LOAD": {
      const array = [...state.publicList];
      if (array[action.index].HeadImgUrl.includes("data:image/jpeg;base64,")) {
        return {
          ...state,
        };
      }
      array[action.index].HeadImgUrl = action.data;
      return {
        ...state,
        publicList: array,
      };
    }
    default:
      return state;
  }
};

export default getFriendSuccess;
