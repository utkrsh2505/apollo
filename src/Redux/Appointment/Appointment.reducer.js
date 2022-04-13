import { GET_DR_FAILURE, GET_DR_REQUEST, GET_DR_SUCCESS } from "./Appointment.actionType"

 const initState = {
     isLoading : false,
     isError : false,
     Dr_list : []
 }

 export const Appointment_reducer = (state=initState,{type,payload})=>{
    switch(type){
        case GET_DR_REQUEST :
            return{
                ...state,
                isLoading : true,
                isError : false,
            }
        case GET_DR_SUCCESS :
            return{
                ...state,
                isLoading : false,
                isError : false,
                Dr_list : payload
            }
        case GET_DR_FAILURE :
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        default :
            return state;
    }
 }