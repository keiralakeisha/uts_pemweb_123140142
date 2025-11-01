import React, { useState, useEffect } from 'react';
import { getCoinList, getCoinChart } from '../services/api';
import CoinTable from '../components/CoinTable/CoinTable';
import PriceFilter from '../components/PriceFilter/PriceFilter';
import CoinChart from '../components/CoinChart/CoinChart';
import PortfolioCalc from '../components/PortfolioCalc/PortfolioCalc';

function Home() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [chartData, setChartData] = useState([]);

  async function loadCoins() {
    setLoading(true);
    setError(null);
    try {
      const data = await getCoinList();
      setCoins(data);
      setFilteredCoins(data);
    } catch (err) {
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCoins();
  }, []);

  function handleFilter(min, max) {
    const filtered = coins.filter(coin => {
      return coin.current_price >= min && coin.current_price <= max;
    });
    setFilteredCoins(filtered);
  }

  async function handleSelectCoin(coin) {
    setSelectedCoin(coin);
    try {
      const data = await getCoinChart(coin.id);
      setChartData(data.prices);
    } catch (err) {
      console.error('Failed to load chart:', err);
      setChartData([]);
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading cryptocurrency data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
        <button onClick={loadCoins} className="refresh-btn">Try Again</button>
      </div>
    );
  }

  return (
    <div className="container">
      <PriceFilter onFilter={handleFilter} />
      <CoinTable coins={filteredCoins} onSelectCoin={handleSelectCoin} />
      
      {selectedCoin && (
        <>
          <CoinChart data={chartData} coinName={selectedCoin.name} />
          <PortfolioCalc coin={selectedCoin} />
        </>
      )}
    </div>
  );
}

export default Home;