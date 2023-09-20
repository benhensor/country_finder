import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Country from './components/country/Country'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  const [countries, setCountries] = useState([])


  async function getCountryData() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()

    setCountries(data)
  }

  useEffect(() => {
    getCountryData()
  }, [])

  // useEffect(() => {
  //   console.log(countries)
  // }, [countries])

  // useEffect(() => {
  //   console.log(isHovered)
  // }, [isHovered])


  function handleClick(country) {
    console.log(country, 'clicked')
  }


  return (
    <main className="app">
      <Header />
      <div className="app-content">
        <Routes>
        <Route exact path="/" element={<Home countries={countries} handleClick={handleClick} />} /> 
        <Route exact path="country" element={<Country />} />
        </Routes>
      </div>
      <Footer />

    </main>
  );
}

export default App;
