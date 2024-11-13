import React from 'react'
import './footer.css'

const Footer = () => {
  let year = new Date().getFullYear();
  // alert(year);
  return (
    <div>
     @ {year} Caritas | All rights reserved
    </div>
  )
}

export default Footer;
