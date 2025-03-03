import React from 'react';
import { useCryptoStore } from '../store/cryptoStore';

const RefreshButton: React.FC = () => {
  const { fetchCryptocurrencies, isLoading } = useCryptoStore();
  
  return (
    <button
      onClick={() => fetchCryptocurrencies()}
      disabled={isLoading}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Refreshing...' : 'Refresh Prices'}
    </button>
  );
};

export default RefreshButton;