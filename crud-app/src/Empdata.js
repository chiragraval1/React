import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

    const deleteid =(id)=>{
      fetch("http://localhost:8000/employees/"+id,
      {   method:"DELETE",
          headers:{"content-type":"application/json"},
      
      })
      .then((res)=>{
          alert("Employee Removed Succefully...")
          window.location.reload()
      })
    }

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
                  <Link to={`/viewemp/${employees.id}`} className='btn btn-primary m-2'>View</Link>
                  <Link to={`/editemp/${employees.id}`} className='btn btn-success m-2'>Edit</Link>
                  <button onClick={()=>{deleteid(employees.id)}} className='btn btn-danger m-2'>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Empdata