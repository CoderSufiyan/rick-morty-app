import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1, filters = {}) => {
  const params = new URLSearchParams({
    ...filters,
    page: page.toString(),
  });
  const response = await axios.get(`${BASE_URL}/character?${params}`);
  return response.data;
};

export const getCharacterById = async (id) => {
  const response = await axios.get(`${BASE_URL}/character/${id}`);
  return response.data;
};
