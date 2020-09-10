import API from './api';

export const getAllcategoryId = async () => {
  try {
    const res = await API.get('/parameter/list-category-id');
    return {
      status: true,
      data: res.data,
    };
  } catch (err) {
    return {
      status: false,
      masage: 'Khong lay duoc du lieu',
    };
  }
};
