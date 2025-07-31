// src/components/SearchByPNR.js
import React, { useState } from 'react';

const SearchByPNR = () => {
  const [pnr, setPnr] = useState('');

  const handleSearch = () => {
    if (pnr.length !== 10) {
      alert('Please enter a valid 10-digit PNR number');
      return;
    }
    alert(`Searching food for PNR: ${pnr}`);
    // Future: redirect to /meals?pnr=xxxxx
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-2 text-center">Search by PNR</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter 10-digit PNR"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchByPNR;
