import createAsyncAction from 'utils/createAsyncAction';
import Api from "utils/api";

function getMessage() {
  return createAsyncAction('HOME_GET_MESSAGE', () => (
    Api.get({
      url: "/account"
    }).then(res => {
      console.log(res.data.msg)
    })
  ));
}

export default {
  getMessage,
};
