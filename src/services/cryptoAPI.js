const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-F3di9HeAxkkx6Yz5ST8xDmCM";
const getCoinsList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=${API_KEY}`;
};
export { getCoinsList };
