import React, { useState } from 'react';

export default function Search() {
  const [pnr, setPnr] = useState('');
  const [trainNo, setTrainNo] = useState('');

  const handlePnrSearch = (e) => {
    e.preventDefault();
    if (pnr.trim() === '') {
      alert('Please enter PNR number');
      return;
    }
    console.log('Searching by PNR:', pnr);
    // Yaha aap API call ya navigation kar sakte ho
  };

  const handleTrainSearch = (e) => {
    e.preventDefault();
    if (trainNo.trim() === '') {
      alert('Please enter Train Number');
      return;
    }
    console.log('Searching by Train Number:', trainNo);
    // Yaha aap API call ya navigation kar sakte ho
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Search Food Delivery</h2>

      <form onSubmit={handlePnrSearch} style={{ marginBottom: '20px' }}>
        <label>Search by PNR:</label><br />
        <input
          type="text"
          placeholder="Enter PNR Number"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        <button type="submit" style={{ marginTop: '10px', width: '100%' }}>Search PNR</button>
      </form>

      <form onSubmit={handleTrainSearch}>
        <label>Search by Train Number:</label><br />
        <input
          type="text"
          placeholder="Enter Train Number"
          value={trainNo}
          onChange={(e) => setTrainNo(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        <button type="submit" style={{ marginTop: '10px', width: '100%' }}>Search Train</button>
      </form>
    </div>
  );
}
