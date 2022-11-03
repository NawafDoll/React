import React from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Update() {
    
      const navigate = useNavigate();
      const [fName, setFName] = React.useState();
      const [lName, setLName] = React.useState();
      const [email, setEmail] = React.useState();
      const [pass, setPass] = React.useState();
      const [id, setId] = React.useState();
   

    React.useEffect(() => {
        setId(localStorage.getItem("id"));
        setFName(localStorage.getItem("firstName"))
        setLName(localStorage.getItem("lastName"))
        setEmail(localStorage.getItem("Email"))
        setPass(localStorage.getItem("Pass"))
        setId(localStorage.getItem("id"))
    },[])

    const updateData = () =>{
        axios.put(`https://6362424c7521369cd068e027.mockapi.io/ToDO/${id}`,{
            fName,
            lName,
            email,
            pass,

        }).then(res =>{
            console.log(res);
            navigate("/LogIn")
        }).catch(err =>{
            console.log(err)
        })
    }
  
    
        return(
            
        <div>
            <input
                placeholder="firstName"
                onChange={(e) => {
                    setFName(e.target.value);
                }}
            ></input>
            <input
                placeholder="lastName"
                onChange={(e) => {
                    setLName(e.target.value);
                }}
            ></input>
            <input
                placeholder="lastName"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            ></input>
            <input
                placeholder="lastName"
                onChange={(e) => {
                    setPass(e.target.value);
                }}
            ></input>
            <button onClick={updateData}>Ubdate</button>

        </div>
        
     )
      
  
}
