import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'

export default function Create() {
    const [fName, setFName] = React.useState();
    const [lName, setLName] = React.useState();
    const [pass, setPass] = React.useState();
    const [email, setEmail] = React.useState();
    let url = "https://6362424c7521369cd068e027.mockapi.io/ToDO";
    const postData = ()=>{
        axios.post(url,{
            fName,
            lName,
            pass,
            email
        }).then((res)=>{
            console.log(res)
        })
    }
  return (
    <div className='data'>
      <input placeholder='First Name' onChange={e=>{setFName(e.target.value)}}></input>
      <input placeholder='Last Name' onChange={e=>{setLName(e.target.value)}}></input>
      <input placeholder='Password' onChange={e=>{setPass(e.target.value)}}></input>
      <input placeholder='Email' onChange={e=>{setEmail(e.target.value)}}></input>
      <Button style={{backgroundColor:"blue", color:"white"}} onClick={postData}>LogIn</Button>
    </div>
  )
}
