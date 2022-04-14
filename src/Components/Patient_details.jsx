import React from 'react'
import styles from "../Pages/Home.module.css";
export const Patient_details = ({item}) => {
    const {Patient_name,Age,Date,Time} =item;
  return (
   <>
<div className={styles.cards}>
     <h1>Patient Name : {Patient_name} </h1>
     <p>Age : {Age}</p>
     <p>Date : {Date}</p>
     <p>Time : {Time}</p>
    
     
   </div>

   </>
  )
}
