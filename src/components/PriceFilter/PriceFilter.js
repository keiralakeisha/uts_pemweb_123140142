import React, { useState } from 'react';
import './PriceFilter.css';

function PriceFilter({ onFilter }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  function handleFilter() {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    onFilter(min, max);
  }

  function handleReset() {
    setMinPrice('');
    setMaxPrice('');
    onFilter(0, Infinity);
  }

  return (
    <div className="filter-container">
      <h3>Filter by Price Range</h3>
      <div className="filter-inputs">
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span>to</span>
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="filter-actions">
        <button onClick={handleFilter} className="apply-btn">Apply</button>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
    </div>
  );
}

export default PriceFilter;