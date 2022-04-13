import React from 'react'
import styles from "./Home.module.css";
import { useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { get_dr_list } from '../Redux/Appointment/Appointment.api';
import {Cards} from "../Components/Cards";
import { useNavigate} from 'react-router-dom';

export const Home = () => {
    const {isLoading, isError,Dr_list } = useSelector((state)=>state.Appointment_reducer);
    const navigate = useNavigate();
    const handleClick = (id)=>{
        navigate(`/description/${id}`)
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_dr_list())
    },[dispatch])
  return (
    <>
    
    <div>
        <div className={styles.nav_img}> 
                <img style={{width : "100%",height: "100%" }} src="/Images/cli1.jpg"/>

        </div>
        <div className={styles.dr_list}>
            {Dr_list.map((item)=>{
                return(<Cards key={item.id} item={item} handleClick={handleClick}/>)
            })}
        </div>

    </div>
    </>
  )
}
