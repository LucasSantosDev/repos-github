import api from '~/services/api/config';

export const list = async () => {
  const response = await api.get('/users');

  return response;
};

export const show = async user => {
  const response = await api.get(`/users/${user}`);

  return response;
};

export const repo = async user => {
  const response = await api.get(`/users/${user}/repos`);

  return response;
};
