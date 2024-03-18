
import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Poster() {
    return (
        <div className='poster1'>
            <div >
                <h1>Find your next stay</h1>
                <p>Search low price on hotel, homes and much more...</p>
            </div>
            <div className='user'>
                <input placeholder='Where are you Going?'></input>
                <input placeholder='Check in - Check out' type='date'></input>
                <input placeholder='8 adults - 3 Children - 1 Room'></input>
                <Button variant="primary">Primary</Button>
            </div>
        </div>
    )
}

export default Poster