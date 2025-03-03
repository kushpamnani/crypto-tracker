'use client';

import { useEffect } from 'react';
import { useCryptoStore } from './store/cryptoStore';
import CryptoCard from './components/CryptoCard';
import SearchBar from './components/SearchBar';
import RefreshButton from './components/RefreshButton';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

export default function Home() {
  const { cryptocurrencies, isLoading, error, fetchCryptocurrencies } = useCryptoStore();

  useEffect(() => {
    fetchCryptocurrencies();
    
    // Set up auto-refresh every 60 seconds
    const interval = setInterval(() => {
      fetchCryptocurrencies();
    }, 60000);
    
    return () => clearInterval(interval);
  }, [fetchCryptocurrencies]);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Crypto Price Tracker</h1>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <SearchBar />
          <RefreshButton />
        </div>
        
        {error && <ErrorMessage message={error} />}
        
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptocurrencies.length > 0 ? (
              cryptocurrencies.map((crypto) => (
                <CryptoCard key={crypto.id} crypto={crypto} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No cryptocurrencies found.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}