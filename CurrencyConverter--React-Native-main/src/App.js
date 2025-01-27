import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Simulating currency conversion rates for demonstration (replace with API call in production)
  const currencyRates = {
    USD: { EUR: 0.85, INR: 74.5 },
    EUR: { USD: 1.18, INR: 88.0 },
    INR: { USD: 0.013, EUR: 0.011 },
  };

  // Handle conversion
  const handleConvert = () => {
    if (amount && fromCurrency && toCurrency) {
      const rate = currencyRates[fromCurrency][toCurrency];
      const result = amount * rate;
      setConvertedAmount(result);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <div className="converter">
          <div className="input-container">
            <input
              type="text" // Allow users to manually type amount
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              pattern="\d*" // Ensures only numbers can be entered
              maxLength="10" // Optional limit on the length
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
            <span>to</span>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <button onClick={handleConvert}>Convert</button>
          {convertedAmount !== null && (
            <div className="output-container">
              <h2>Converted Amount:</h2>
              <p className="result">
                {convertedAmount} {toCurrency}
              </p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
