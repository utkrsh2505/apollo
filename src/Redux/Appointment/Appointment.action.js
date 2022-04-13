import { GET_DR_FAILURE, GET_DR_REQUEST, GET_DR_SUCCESS } from "./Appointment.actionType"


export const get_dr_request = ()=>{
    return{
        type : GET_DR_REQUEST
    }
}

export const get_dr_success = (payload)=>{
    return{
        type : GET_DR_SUCCESS,
        payload
    }
}

export const get_dr_failure = (payload)=>{
    return{
        type : GET_DR_FAILURE
    }
}