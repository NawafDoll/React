import React from 'react'
import {useEffect} from 'react';
import axios from 'axios'

export default function API() {

    const [state, setstate] = React.useState([]);

    useEffect(() => {
       axios.get("https://6362424c7521369cd068e027.mockapi.io/ToDO").then((res) =>{
        console.log(res.data)
        setstate(res.data)
       })
    },[]);

  return (
    <div  className='parent'>
     {state.map(items=>{
        return(
            
          <div>
          <p>{items.fName}</p>
          <p>{items.lName}</p>
          <p>{items.email}</p>
          <p>{items.pass}</p>
          
            {/* <img width={"200px"} src={items.image}></img>
            <p>Name: {items.name}</p> */}
            </div>
        
     )
      })}
    </div>
  )
}
