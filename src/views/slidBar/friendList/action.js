import createAsyncAction from 'utils/createAsyncAction';
import Api from "utils/api";

function getWeFreindList(data) {
  return createAsyncAction('FRIENDLIST', () => (
    Promise.resolve({
      data: data
    })
  ));
}

export default {
  getWeFreindList,
};
