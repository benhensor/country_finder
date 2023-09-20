import React, { useState } from "react"
import './countrycard.css'


export function CountryCard({ country, handleClick }) {

  const [isHovered, setIsHovered] = useState(false)


  return (
    <div
      className="country-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleClick(country.name.common)}
    >
      <img src={country.flags.png} alt={country.name.common} />
      {isHovered && <h3>{country.name.common}</h3>}

    </div>
  )
}

export default CountryCard