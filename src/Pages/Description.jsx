import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import styles from "./Home.module.css";
import axios from 'axios';
import { Patient_details } from '../Components/Patient_details';

export const Description = () => {
  const {id} = useParams();
 const [data,setData] = useState([]);
 const [slot_Time,setSlot_Time] = useState("");
 const [date,setDate] = useState("");
 const [pname,setPName] = useState("");
 const [age,setAge] = useState("");
 const [patient,setPatient] = useState([]);
 
 
 const handleBook = ()=>{
   console.log("time",slot_Time)
   const payload ={
     Patient_name : pname,
     Age: age,
     Date: date,
     Time : slot_Time
   }
   axios.post(`https://dbmedicine.herokuapp.com/Booked`, payload)
   .then((res)=>{
  
    console.log("utk",res.data)
    alert("booked")
      
   })
   .catch((err)=>{
     console.log(err)
   })
 }
  useEffect(()=>{
              axios.get(`https://dbmedicine.herokuapp.com/Dr/${id}`)
              .then((res)=>{
              //   console.log(res.data.Booked_slot)
                setData(res.data.Booked_slot)
                  
              })
              .catch((err)=>{
                console.log(err)
              })
  },[])
 
  useEffect(()=>{
              axios.get(`https://dbmedicine.herokuapp.com/Booked`)
              .then((res)=>{
               //  console.log(res.data)
                setPatient(res.data)
                  
              })
              .catch((err)=>{
                console.log(err)
              })
  },[handleBook])
 


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
        
          <input type="text" placeholder='Patient Name'  value={pname} onChange={(e)=>{setPName(e.target.value)}} />
          <br/>
          <br/>
         
          <input type="text" placeholder='Patient Age'  value={age} onChange={(e)=>{setAge(e.target.value)}}/>
          <br/>
          <br/>
          <input type="date" placeholder='Select Date'  value={date } onChange={(e)=>{setDate(e.target.value)}}/>
          <br/>
          <br/>
          <input type="time" placeholder='Select Time'  value={slot_Time || ''} onChange={(e)=>{setSlot_Time(e.target.value)}} />
          <br/>
          <br/>
          <button onClick={()=>handleBook()}>Book</button>

        </div>
        <div className={styles.dr_list}>
            {patient.map((item)=>{
                return(<Patient_details key={item.id} item={item}/>)
            })}
        </div>
     
   
   </>
  )
}
