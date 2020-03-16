import api from '~/services/api/config';

export const list = async () => {
  const response = await api.get('/users');

  return response;
};

export const show = async repo => {
  const response = await api.get(`/users/${repo}`);

  return response;
};
