import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Stay from './Stay'
import Experience from './Experience'
import Onexperience from './Onexperience'

function Head() {
  return (
    <div>
        <div >
          <BrowserRouter>
          <Link to="/stay" >Stay</Link>{"  "}
          <Link to="/experiences" >Experience</Link>{"  "}
          <Link to="/onexperiences" >Online Experience</Link>
          
            <Routes>
              <Route path='/stay' element={<Stay/>}></Route>
              <Route path='/experiences' element={<Experience/>}></Route>
              <Route path='/onexperiences' element={<Onexperience/>}></Route>
            </Routes>
          </BrowserRouter>
          {/* <Stay/> */}
        </div>
        
    </div>
  )
}

export default Head