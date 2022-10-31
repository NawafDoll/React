import React from "react";
import {useState} from 'react';
import {Button,Input,Text} from '@chakra-ui/react'

 function LogIn(props){
   
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState('');
  
  
    function handleEmail(e){
        if(email==""){
        setEmail(`Email:${false}`)
        }
        else{
            setEmail(`Email:${true}`)
        }
    }
 
    
     function handlePass(e){
        if(email==""){
            setPass(`Password:${false}`)
            }
            else{
                setPass(`Password:${true}`)
            }
     }
    return(

        <div className="parentLog">
            <div className="inputs">
            <Button background="blue" color={"white"}  onClick={()=>handleEmail()}>Log In</Button>
            <Input type={"email"} onChange={()=>handleEmail()}  placeholder="Email"></Input>
            <Input type={"password"} onChange={()=>handlePass()}  placeholder="Password"></Input>
            </div>
            <br></br>
           <div className="data">
            <Text>{email}</Text>
            <Text>{pass}</Text>
            </div>
        </div>

    )
 }


 export default LogIn;

//  
// value={pass} onChange={handlePass} 