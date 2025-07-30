import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="main-container">
      <h1>🚆 RailEats</h1>
      <p>Train Journey ka Swad, only Raileats ke Paas!</p>

      <form className="form">
        <input type="text" placeholder="Train Number or PNR" required />
        <button type="submit">Order Food</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
