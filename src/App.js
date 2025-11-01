import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { getCoinList } from './services/api';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  async function handleRefresh() {
    setLoading(true);
    window.location.reload();
  }

  return (
    <div>
      <div className="header">
        <h1>Crypto Tracker</h1>
        <p>Real-time cryptocurrency price monitoring</p>
        <button 
          onClick={handleRefresh} 
          className="refresh-btn"
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>
      <Home />
    </div>
  );
}

export default App;