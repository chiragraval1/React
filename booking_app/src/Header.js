import React from 'react'
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {

  return (
    <div className='header'>
      <h2 className='title'>Booking.com</h2>
      <div className='right'>
        <span>INR</span>
        <span>Flag</span>
        <span>List Your Property</span>
        <Button variant='success'>Register</Button>
        <Button variant='success'>Sign In</Button>
      </div>
    </div>
  )
}

export default Header