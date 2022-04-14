import React from 'react'
import {Link,Route,Routes} from "react-router-dom";
import {Home} from "./Pages/Home";
import { Description } from './Pages/Description';

export const Routing = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home/>}/>
       
        <Route path="/description/:id" element={<Description/>}/>
    </Routes>
   </>
  )
}
