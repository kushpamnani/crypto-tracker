import { create } from 'zustand';
import { Cryptocurrency, fetchCryptocurrencies } from '../services/api';

interface CryptoState {
  cryptocurrencies: Cryptocurrency[];
  isLoading: boolean;
  error: string | null;
  search: string;
  fetchCryptocurrencies: () => Promise<void>;
  setSearch: (search: string) => void;
}

export const useCryptoStore = create<CryptoState>((set, get) => ({
  cryptocurrencies: [],
  isLoading: false,
  error: null,
  search: '',
  
  fetchCryptocurrencies: async () => {
    try {
      set({ isLoading: true, error: null });
      const data = await fetchCryptocurrencies(get().search);
      set({ cryptocurrencies: data, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An error occurred', 
        isLoading: false 
      });
    }
  },
  
  setSearch: (search: string) => {
    set({ search });
    get().fetchCryptocurrencies();
  },
}));