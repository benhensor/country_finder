import React, { useState, useEffect } from 'react';
import Footer from './components/footer/Footer';
import Search from './assets/search.svg';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [search, setSearch] = useState('');

  async function getCountryData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
    setDisplayCountries(data); // Initialize displayCountries with all countries
  }

  useEffect(() => {
    getCountryData();
  }, []);

  // Handle search input change
  function handleSearchChange(e) {
    const inputValue = e.target.value.toLowerCase();
    setSearch(inputValue);

    // Filter and set displayCountries based on the search input
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(inputValue);
    });
    setDisplayCountries(filteredCountries);
  }

  function handleClick(countryName) {
    console.log(countryName, 'clicked');
  }

  return (
    
    <main className="app">
      <header>
        <h1>Country Finder</h1>
      </header>
      <nav>
        <div className="search-container">
          <label htmlFor="search"></label>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            value={search}
          />
          <img
            className="search-icon"
            src={Search}
            alt="search"
            onClick={handleSearchChange} // Handle search when the icon is clicked
          />
        </div>
      </nav>
      <div className="app-content">
        <div className="home">
          <div className="countries-container">
            {displayCountries.map((country) => (
              <div
                className="country-card"
                onClick={() => handleClick(country.name.common)}
              >
                <img src={country.flags.png} alt={country.name.common} />
                <h3>{country.name.common}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
