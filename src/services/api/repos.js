import api from '~/services/api/config';

export const list = async () => {
  const response = await api.get('/repositories');

  return response;
};

export const show = async repo => {
  const response = await api.get(`/repositories/${repo}`);

  return response;
};
