import React from "react";

const SearchBox = () => {
  return (
    <section className="container">
      <h2>Search Food Delivery</h2>
      <div className="search-grid">
        <div className="search-box">
          <h3>PNR</h3>
          <input type="text" placeholder="Enter PNR" />
          <button className="btn">Search</button>
        </div>

        <div className="search-box">
          <h3>Train</h3>
          <input type="text" placeholder="Enter Train" />
          <button className="btn">Search</button>
        </div>

        <div className="search-box">
          <h3>Station</h3>
          <input type="text" placeholder="Enter Station" />
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
