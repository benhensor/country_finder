import React from 'react'
import Search from '../../assets/search.svg'
import './nav.css'


export function Nav({ handleSearch, search, handleSubmit }) {


  return (
    <nav>
      <div className="search-container">
        <label htmlFor="search"></label>
        <input  type="text" 
                placeholder="Search" 
                onChange={(e) => handleSearch(e.target.value)} 
                value={search}
        />
        <img className="search-icon" src={Search} alt="search" onClick={handleSubmit}/>
      </div>
    </nav>
  )
}

export default Nav