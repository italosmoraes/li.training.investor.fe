function formatCurrency(n) {
  return parseFloat(n.toFixed(2)).toLocaleString().replace(/\.([0-9])$/, '.$10');
}

module.exports = formatCurrency;
