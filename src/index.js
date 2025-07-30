import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">🚆🍽️</div>
        Raileats
      </header>
      <div className="main-content">
        <h1>Rail Journey ka Swad, only Raileats ke Paas!</h1>
        <button>Order Now</button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
