import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewemp() {
    const {viewID} = useParams();
    console.log(viewID)

    const [name,setname] = useState()
    const [surname, setsurname]= useState()
    const [email,setemail] = useState()

    useEffect(()=>{
        fetch(`http://localhost:8000/employees/${viewID}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setname(data.name)
            setsurname(data.surname)
            setemail(data.email)
        })
    })
  return (
    <div>
        <h2 className='bg-primary text-light'>View Employee </h2>
        <h3>ID : {viewID}</h3>
        <h3>Name : {name}</h3>
        <h3>Surname : {surname}</h3>
        <h3>Email : {email}</h3>
    </div>
  )
}

export default Viewemp