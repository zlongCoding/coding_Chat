import createAsyncAction from 'utils/createAsyncAction';

function getUser(data) {
  return createAsyncAction('USER_GET_USER', () => (
    Promise.resolve({
      data: data,
    })
  ));
}

export default {
  getUser,
};
