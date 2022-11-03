import React from 'react'
import {useEffect} from 'react';
import axios from 'axios'
import { Button } from '@chakra-ui/react';
import {setAPIData} from "react"
import { Link } from 'react-router-dom';
export default function API() {


    const [state, setstate] = React.useState([]);

    useEffect(() => {
       axios.get("https://6362424c7521369cd068e027.mockapi.io/ToDO").then((res) =>{
        console.log(res.data)
        setstate(res.data)
       })
    },[]);

    const onDelete =(id) =>{
      console.log(id);
      axios.delete(`https://6362424c7521369cd068e027.mockapi.io/ToDO/${id}`).then((res)=>{
      console.log(res);
      setstate(state.filter(del => {
       return del.id != id
      }))
    })
    }
  return (
    <div  className='parent'>
     {state.map(items=>{
        return(
            
          <div>
          <p>{items.fName}</p>
          <p>{items.lName}</p>
          <p>{items.email}</p>
          <p>{items.pass}</p>
          <Button onClick={()=>{onDelete(items.id)}} style={{backgroundColor:"blue", color:"white"}}>Delete</Button>
          <Link to="./Update.js">
                     <button onClick={() => localStorage.setItem("id", items.id)}>Update</button></Link>
          
           
            </div>
        
     )
      })}
    </div>
  )
}
