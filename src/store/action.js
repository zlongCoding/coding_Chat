import createAsyncAction from 'utils/createAsyncAction';
import Api from "utils/api";

function checkoutLogin(data) {
  return dispatch => {
    Api.get({
      url: "/account"
    }).then(res => {
      console.log(dispatch)
      console.log(res)
    })
  }
  // return createAsyncAction('USER_SET_USER', () => (
  //   Api.get({
  //     url: "/account"
  //   }).then(res => {
  //     console.log(res)
  //   })
  // ));
}
export default {
  checkoutLogin,
};
