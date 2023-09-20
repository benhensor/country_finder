import React from 'react'
import './footer.css'


export function Footer() {


  const year = new Date().getFullYear()



  return (
    <footer>
      <p>&#169; {year} Ben Hensor</p>
    </footer>
  )
}

export default Footer