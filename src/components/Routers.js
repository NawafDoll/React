import React from 'react'
import { Form } from 'react-router-dom'
import{Routes,Route} from "react-router-dom"
import LogIn from './LogIn'
import Header from './Header'
import Content from './Content'


export default function Routers() {
  return (
    <div>

      <Header />
       <Routes>
        <Route path="LogIn.js" element={<LogIn/>}></Route>
        <Route path="/cont" element={<Content/>}></Route>
       </Routes>
       
    </div>
  )
}
