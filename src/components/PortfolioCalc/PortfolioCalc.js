import React, { useState } from 'react';
import { formatPrice } from '../../utils/helpers';
import './PortfolioCalc.css';

function PortfolioCalc({ coin }) {
  const [amount, setAmount] = useState('');
  const [totalValue, setTotalValue] = useState(0);

  function calculate() {
    const qty = parseFloat(amount);
    if (!isNaN(qty) && qty > 0) {
      setTotalValue(qty * coin.current_price);
    }
  }

  function reset() {
    setAmount('');
    setTotalValue(0);
  }

  return (
    <div className="portfolio-calc">
      <h3>Portfolio Calculator</h3>
      <div className="calc-row">
        <img src={coin.image} alt={coin.name} width="32" height="32" />
        <div className="coin-info">
          <div className="coin-title">{coin.name}</div>
          <div className="coin-price">{formatPrice(coin.current_price)}</div>
        </div>
      </div>
      <div className="calc-input">
        <label>Amount of coins:</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="calc-actions">
        <button onClick={calculate} className="calc-btn">Calculate</button>
        <button onClick={reset} className="clear-btn">Clear</button>
      </div>
      {totalValue > 0 && (
        <div className="calc-result">
          <span>Total Value:</span>
          <strong>{formatPrice(totalValue)}</strong>
        </div>
      )}
    </div>
  );
}

export default PortfolioCalc;