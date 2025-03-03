import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  last_updated: string;
}

export const fetchCryptocurrencies = async (search: string = ''): Promise<Cryptocurrency[]> => {
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    });

    const data: Cryptocurrency[] = response.data;
    
    // If search parameter is provided, filter the results
    if (search) {
      return data.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(search.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Return only top 5 if no search parameter
    return data.slice(0, 5);
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    throw error;
  }
};