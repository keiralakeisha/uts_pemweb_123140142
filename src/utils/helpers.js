export function formatPrice(price) {
  if (price >= 1) {
    return '$' + price.toFixed(2);
  }
  return '$' + price.toFixed(6);
}

export function formatNumber(num) {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  }
  return num.toLocaleString();
}

export function formatPercent(percent) {
  return percent.toFixed(2) + '%';
}