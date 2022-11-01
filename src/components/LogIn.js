import React from "react";
import {useState} from 'react';
import {Button,Input,Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import App from "../App";
 function LogIn(){
    const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState('');
  
  
//     function handleEmail(e){
//         if(email==""){
//         setEmail(`Email:${false}`)
//         }
//         else{
//             setEmail(`Email:${true}`)
//         }
//     }
function handleClick() {
    navigate("/cont")
  }
    
    
    
     
    return(

        <div className="parentLog">
                  

            <div className="inputs">
            <Button background="blue" color={"white"}  onClick={handleClick}>Log In</Button>
            <Input type={"Email"}   placeholder="Email"></Input>
            <Input type={"password"}   placeholder="Password"></Input>
            </div>
            <br></br>
           <div className="data">
            {/* <Text>{email}</Text> */}
            
            </div>
        </div>

    )
 }


 export default LogIn;

//  
// value={pass} onChange={handlePass} 