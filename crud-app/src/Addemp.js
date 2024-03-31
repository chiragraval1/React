import React from 'react'

function Addemp() {
    return (
        <div className='container w-75'>
             <div>
                <h2>Add Employee</h2>
            </div>
            <form>
                <div className="mb-3 text-start">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"/>
                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Addemp