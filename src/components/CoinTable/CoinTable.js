import React from 'react';
import { formatPrice, formatNumber, formatPercent } from '../../utils/helpers';
import './CoinTable.css';

function CoinTable({ coins, onSelectCoin }) {
  if (!coins || coins.length === 0) {
    return <div className="empty">No coins found</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="coin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, idx) => (
            <tr key={coin.id}>
              <td>{idx + 1}</td>
              <td className="coin-name">
                <img src={coin.image} alt={coin.name} width="24" height="24" />
                <span>{coin.name}</span>
                <span className="symbol">{coin.symbol.toUpperCase()}</span>
              </td>
              <td>{formatPrice(coin.current_price)}</td>
              <td className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                {formatPercent(coin.price_change_percentage_24h)}
              </td>
              <td>${formatNumber(coin.market_cap)}</td>
              <td>
                <button 
                  className="detail-btn"
                  onClick={() => onSelectCoin(coin)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinTable;