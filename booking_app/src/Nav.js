import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Nav() {
  return (
    <div className='poster'>
      <div className='navi'>
        <Button variant="outline-light">Stays</Button>
        <Button variant="outline-light">Flights</Button>
        <Button variant="outline-light">Car Rentals</Button>
        <Button variant="outline-light">Attrection</Button>
        <Button variant="outline-light">Airport Taxis</Button>
      </div>
      <div className='empty'></div>
      
    </div>
  )
}

export default Nav