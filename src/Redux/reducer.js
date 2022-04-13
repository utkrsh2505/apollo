import {combineReducers} from "redux";
import { Appointment_reducer } from "./Appointment/Appointment.reducer";

export const rootReducer = combineReducers({
Appointment_reducer : Appointment_reducer,
})