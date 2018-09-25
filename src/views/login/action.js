import createAsyncAction from 'utils/createAsyncAction';

function setUser(data) {
  return createAsyncAction('USER_SET_USER', () => (
    Promise.resolve({
      data: data,
    })
  ));
}

export default {
  setUser,
};
