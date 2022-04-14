import axios from "axios";
import { get_dr_failure, get_dr_request, get_dr_success } from "./Appointment.action";


export const get_dr_list = ()=>(dispatch)=>{
    dispatch(get_dr_request());
    axios.get("https://dbmedicine.herokuapp.com/Dr")
    .then((res)=>{
        console.log(res.data)
        dispatch(get_dr_success(res.data))
    })
    .catch((err)=>{
        dispatch(get_dr_failure())
    })
}