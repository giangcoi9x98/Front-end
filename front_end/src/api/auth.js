import API from './api';

export const logIn = async params => {
  try {
    const res = await API.post('/signin',{}
    );
    return {
      status: true,
      data: res.token,
    };
  } catch (err) {
    return {
      status: false,
      mesage: ' login falied',
    };
  }
};
