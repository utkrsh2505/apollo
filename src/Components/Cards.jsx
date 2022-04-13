import React from 'react'
import styles from "../Pages/Home.module.css";
export const Cards = ({item,handleClick}) => {
  const {Availability,Booked_slot,Cost,Doctor,Speciality,id} = item;
  return (
   <>
   <div className={styles.cards}>
     <h1>Doctor Name : {Doctor} </h1>
     <p>Speciality : {Speciality}</p>
     <p>Availablity : {Availability}</p>
     <p>Cost : {Cost}</p>
     <button onClick={()=>handleClick(id)}>Book Slot</button>
     
   </div>
   </>
  )
}
