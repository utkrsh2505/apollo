import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import styles from "./Home.module.css";
import axios from 'axios';

export const Description = () => {
  const {id} = useParams();
 const [data,setData] = useState([]);
 const [slot_Time,setSlot_Time] = useState("");
 
 
 const handleBook = ()=>{
   console.log("time",slot_Time)
   const payload ={
     time :setSlot_Time
   }
   axios.post(`http://localhost:3001/Dr/${id}`, payload)
   .then((res)=>{
      console.log(res.data.Booked_slot)
     setData(res.data.Booked_slot)
      
   })
   .catch((err)=>{
     console.log(err)
   })
 }
  useEffect(()=>{
              axios.get(`http://localhost:3001/Dr/${id}`)
              .then((res)=>{
                 console.log(res.data.Booked_slot)
                setData(res.data.Booked_slot)
                  
              })
              .catch((err)=>{
                console.log(err)
              })
  },[])
 


  return (
   <>
   
    <div className={styles.nav_img}> 
                <img style={{width : "100%",height: "100%" }} src="/Images/cli1.jpg"/>

        </div>
        <div className={styles.time_slot_div}>
            {data.map((i)=>{
              return(<button key={i._id}>{i.time}</button>)

            })}
        </div>
        <div className={styles.details_div}>
        
          <input type="text" placeholder='Patient Name' />
          <br/>
          <br/>
         
          <input type="text" placeholder='Patient Age' />
          <br/>
          <br/>
          <input type="date" placeholder='Select Date' />
          <br/>
          <br/>
          <input type="time" placeholder='Select Time'  value={slot_Time || ''} onChange={(e)=>{setSlot_Time(e.target.value)}} />
          <br/>
          <br/>
          <button onClick={()=>handleBook()}>Book</button>

        </div>
     
   
   </>
  )
}
