import createAsyncAction from 'utils/createAsyncAction';
import Api from "utils/api";

function setWXCHAT(data) {
  return createAsyncAction('CHATTOWXCHAT', () => (
    Promise.resolve({
      data: data
    })
  ));
}

export default {
  setWXCHAT,
};
