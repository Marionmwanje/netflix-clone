import React from 'react'
import "../../App.css"

import Logo from "../../Assets/Logo.png"
import Avatar from "../../Assets/Avatar.png"
function Navbar() {
  return (
    <div className='nav false'>Navbar
    <img className='nav_avatar' src={Avatar} alt="netflix"/>
    <img className='nav_logo' src={Logo} alt="netflix" />
    
   
    </div>
  )
}

export default Navbar