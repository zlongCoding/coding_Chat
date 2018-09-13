import createAsyncAction from 'utils/createAsyncAction';

function Login() {
  return createAsyncAction('USER_GET_USERS', () => (
    Promise.resolve({
      data: 'womne',
    })
  ));
}
export default {
  Login,
};
