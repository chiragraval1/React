import React from 'react'

function Poster() {
    return (
        <div>
            <div>
                <h2>Find your next stay</h2>
                <p>Search low price on hotel, homes and much more...</p>
            </div>
            <div className='user'>
                <input placeholder='Where are you Going?'></input>
                <input placeholder='Check in - Check out' type='date'></input>
                <input placeholder='8 adults - 3 Children - 1 Room'></input>
            </div>
        </div>
    )
}

export default Poster