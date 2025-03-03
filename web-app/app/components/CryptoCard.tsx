import React from 'react';
import { Cryptocurrency } from '../services/api';

interface CryptoCardProps {
  crypto: Cryptocurrency;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  const isPositiveChange = crypto.price_change_percentage_24h >= 0;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-2">
        <img src={crypto.image} alt={crypto.name} className="w-8 h-8 mr-2" />
        <h3 className="text-lg font-semibold">{crypto.name}</h3>
        <span className="ml-2 text-gray-500 text-sm uppercase">{crypto.symbol}</span>
      </div>
      
      <div className="mt-2">
        <p className="text-xl font-bold">${crypto.current_price.toLocaleString()}</p>
        <p className={`text-sm ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          {isPositiveChange ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        Last updated: {new Date(crypto.last_updated).toLocaleString()}
      </div>
    </div>
  );
};

export default CryptoCard;