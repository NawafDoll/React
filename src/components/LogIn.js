import React from "react";
import {useState} from 'react';
import {Button,Input,Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import App from "../App";
 function LogIn(){

    const [names, setNames] = React.useState({ fName: "", lName: "" })

    const navigate = useNavigate();
    const LogIn = () => {
        if (names. fName. length =="" || names. lName. length =="") {
        alert ("required")
        } else if (names. fName. length == "" && names. lName. length =="" ) {
        alert ("required")
        } else {
        alert ( `welcome ${names. fName}` )
        }
        }
// function handleClick() {
//     navigate("/cont")
//   }
    
    
    
     
    return(

        <div className="parentLog">
                  

            <div className="inputs">
            {/* <Button background="blue" color={"white"}  onClick={handleClick}>Log In</Button> */}
            <Input w={40} m={3} value={names. fName} onChange={r => { setNames ({ ...names, fName: r.target. value }) }}></Input>
            <Input w={40} m={3} value={names. lName} onChange={e => { setNames ({ ...names, lName: e.target. value }) }}></Input> 
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