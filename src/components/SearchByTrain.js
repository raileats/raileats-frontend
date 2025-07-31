// src/components/SearchByTrain.js
import React, { useState } from 'react';

const SearchByTrain = () => {
  const [train, setTrain] = useState('');

  const handleSearch = () => {
    if (!train) {
      alert('Please enter a train number');
      return;
    }
    alert(`Searching food for Train: ${train}`);
    // Future: redirect to /meals?train=xxxx
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-2 text-center">Search by Train Number</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Train Number"
          value={train}
          onChange={(e) => setTrain(e.target.value)}
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

export default SearchByTrain;
