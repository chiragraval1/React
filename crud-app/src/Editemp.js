import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editemp() {
      
    const [name, setname]= useState()
    const [surname, setsurname]= useState()
    const [email, setemail]= useState()
    const navigate = useNavigate()
    const {editID} = useParams()

    
    const  handalesubmit = (e)=>{
        e.preventDefault();
        const data = {name,surname,email};
        fetch(`http://localhost:8000/employees/${editID}`,
        {   method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=>{
            // return res.json()
            if(res){
            alert("Employee added...")
            navigate("/")
            }
        })
        .then((data)=>{
            console.log(data)
            setname(data.name)
            setemail(data.email)
            setsurname(data.surname)
        })
    }
  return (
    <div>
        <h2>Edit Employe</h2>
        <div className='container w-50'>
             <div>
                <h2 className='bg-primary text-light'>Add Employee</h2>
            </div>
            <form className='text-start fw-bold' onSubmit={handalesubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" 
                    value={name}
                    onChange={(e)=>{setname(e.target.value)}}
                    className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Surname</label>
                    <input type="text"
                    value={surname}
                    onChange={(e)=>{setsurname(e.target.value)}}
                    className="form-control"/>
                </div>
            
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" 
                    value={email}
                    onChange={(e)=>{setemail(e.target.value)}}
                    className="form-control"/>
                </div>
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Editemp