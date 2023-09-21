import React from 'react'
import CountryCard from '../countrycard/CountryCard'
import './home.css'


export function Home({ countries, filteredCountries, handleClick }) {


  const displayCountries = filteredCountries.length  > 0 ? filteredCountries : countries


  return (
    <div className="home">
      <div className="countries-container">
          {displayCountries.map((country => (
            <CountryCard 
              key={country.cca3}
              country={country} 
              handleClick={handleClick}
            />
          )
          ))}
        </div>
    </div>
  )
}

export default Home
