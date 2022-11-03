import React from 'react'
import { Form } from 'react-router-dom'
import{Routes,Route} from "react-router-dom"
import LogIn from './LogIn'
import Header from './Header'
import Content from './Content'
import Update from './Update'

export default function Routers() {
  return (
    <div>

      
       <Routes>
       {/* <Route path ="Update" element = {<Update/>}></Route> 
        <Route path="LogIn.js" element={<LogIn/>}></Route> */}
        {/* <Route path="/cont" element={<Content/>}></Route> */}
       </Routes>
       
    </div>
  )
}
