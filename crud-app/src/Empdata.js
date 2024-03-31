import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Empdata() {

  const [details, setDetails] = useState()

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((resp) => { return resp.json() })
      .then((data) => {
        setDetails(data)
      }
      )
  }, [])

  return (
    <div className='container w-75'>

      <div>
        <h2>Employee Data</h2>
      </div>
      <div>
        <Link to={"/addemp"} className='btn btn-primary m-2'>Add Employee</Link>
      </div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col-1">#</th>
            <th scope="col-1">Name</th>
            <th scope="col-1">Surname</th>
            <th scope="col-3">Email</th>
            <th scope="col-5">action</th>
          </tr>
        </thead>
        <tbody>
          {details &&
            details.map((employees) => (
              <tr key={employees.id}>
                <th scope="row" >{employees.id}</th>
                <td>{employees.name}</td>
                <td>{employees.surname}</td>
                <td>{employees.email}</td>
                <td>
                  <button className='btn btn-primary m-2'>View</button>
                  <button className='btn btn-success m-2'>Edit</button>
                  <button className='btn btn-danger m-2'>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Empdata