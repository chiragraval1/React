import React from 'react'
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {

  return (
    <div className='header'>
      <h3 className='title'>Booking.com</h3>
      <div className='right'>
        <span>INR</span>
        <span><img src='https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/In@3x.png'></img></span>
        <span>List Your Property</span>
        <Button variant='light text-primary'>Register</Button>
        <Button variant='light text-primary'>Sign In</Button>
      </div>
    </div>
  )
}

export default Header