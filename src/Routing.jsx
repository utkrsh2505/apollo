import React from 'react'
import {Link,Route,Routes} from "react-router-dom";
import { Bone } from './Pages/Bone';
import { Dentist } from './Pages/Dentist';
import { Description } from './Pages/Description';
import { Eyes } from './Pages/Eyes';
import { Heart } from './Pages/Heart';
import { Home } from './Pages/Home';
import { Skin } from './Pages/Skin';
export const Routing = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bone" element={<Bone/>}/>
        <Route path="/eyes" element={<Eyes/>}/>
        <Route path="/skin" element={<Skin/>}/>
        <Route path="/heart" element={<Heart/>}/>
        <Route path="/dentist" element={<Dentist/>}/>
        <Route path="/description/:id" element={<Description/>}/>
    </Routes>
   </>
  )
}
