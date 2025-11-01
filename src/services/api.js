import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.coingecko.com/api/v3';

const headers = {
  'x-cg-demo-api-key': API_KEY
};

export async function getCoinList() {
  const response = await axios.get(`${BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 50,
      page: 1
    },
    headers
  });
  return response.data;
}

export async function getCoinDetail(id) {
  const response = await axios.get(`${BASE_URL}/coins/${id}`, { headers });
  return response.data;
}

export async function getCoinChart(id, days = 7) {
  const response = await axios.get(`${BASE_URL}/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: days
    },
    headers
  });
  return response.data;
}