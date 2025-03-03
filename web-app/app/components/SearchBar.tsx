import React, { useState } from 'react';
import { useCryptoStore } from '../store/cryptoStore';

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const setSearch = useCryptoStore((state) => state.setSearch);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };
  
  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto mb-6">
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search cryptocurrencies..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;