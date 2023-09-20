import React from 'react'
import CountryCard from '../countrycard/CountryCard'
import './home.css'


export function Home({ countries, handleClick }) {
  return (
    <div className="home">
      <div className="countries-container">
          {countries.map((country => (
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
