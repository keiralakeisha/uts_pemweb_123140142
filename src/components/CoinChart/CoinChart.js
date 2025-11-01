import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './CoinChart.css';

function CoinChart({ data, coinName }) {
  if (!data || data.length === 0) {
    return <div className="no-chart">No chart data available</div>;
  }

  const chartData = data.map(item => ({
    date: new Date(item[0]).toLocaleDateString(),
    price: item[1]
  }));

  return (
    <div className="chart-container">
      <h3>Price Chart - {coinName}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2C5F2D" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CoinChart;