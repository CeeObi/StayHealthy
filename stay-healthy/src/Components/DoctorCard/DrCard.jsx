import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import fmPrf from "../FindDoctorSearch/docprofilefml.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';


const DrCard = ({pixsrc=fmPrf, drname="Dr James Gian" , specialty="Dentist" , noexp="23",}) => {
    const [showModal,setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [bgColor,setBgColor] = useState("primary");    
    // const [name,setName] = useState("")
    // const [phone,setPhone] = useState("")
    // const [date,setDate] = useState("")
    // const [time,setTime] = useState("")
    // const [appointmentID,setAppointmentId] = useState(null)
    const handleBooking = (appointmentEventData) =>{
        const {name, time, phone, date} = appointmentEventData.target;
        const aptId= uuidv4();
        // setName(name.value);  setTime(time.value); setPhone(phone.value); setDate(date.value); setAppointmentId(aptId);
        const newAppointment = {id:aptId,...appointmentEventData}
        setShowModal(false)
        setBgColor("danger")
        const updatedAppointment =[...appointments,newAppointment]
        setAppointments(updatedAppointment)
    }

    const handleCancelAppointment = (canceAppointmentEventData) => {
        const cancelId = canceAppointmentEventData.target.id;
        setBgColor("primary")
        const updatedAppointment = appointments.filter((eachAppointment) => eachAppointment.id !== cancelId )
        setAppointments(updatedAppointment)
        setShowModal(false)
    }
    

  return (
    <div key="" class="col">
        <div class="mx-auto card w-50 ">
            <div className='mx-auto w-50 mt-2 d-flex justify-content-center mb-0'>
                <img src={pixsrc} class="card-img-top img-thumbnail mb-0 pb-0 rounded-circle border-primary" alt="..." style={{width:"50%"}}/>
            </div>
            <div class="card-body mt-0 pt-1 pb-0 mb-0 ">
                <h5 class="card-title text-center fs-6 my-0 pt-1 pb-0 fw-bold ">{drname}</h5>
                <p class="card-text lead fs-6 text-center">{specialty}</p>
                <p class="card-text text-center mb-0 pb-0">{noexp} years experience</p>
                <p class="card-text text-center my-0 py-0 ">Ratings: 
                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                    <i class="fa fa-star ms-1 text-warning opacity-50" aria-hidden="true"/>
                </p>
            </div>
                    
            <div class={`card-footer bg-${bgColor} rounded-2 mt-2`}> 
                <Popup trigger=
                {
                    <div className='navblinks mt-2' onClick={()=>setShowModal(true)}>
                        {   
                            !appointments?.
                            length?<h6 class="text-center fw-bold text-white mt-2 mb-0 pb-0 ">Book Appointment</h6>
                            :<h6 class="text-center fw-bold text-white mt-2 mb-0 pb-0 ">Cancel Appointments</h6>
                        }
                        <h6 class="text-center fs-6 lead text-white mb-2 mt-0 pt-0">No Booking Fees</h6>
                    </div>
                } position="center" modal open={showModal} onClose={() => setShowModal(false)}>

                    {(close) => (
                        <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
                            <div className='mx-auto w-50 mt-2 d-flex justify-content-center mb-0'>
                                <img src={pixsrc} class="card-img-top img-thumbnail mb-0 pb-0 rounded-circle border-primary" alt="..." style={{width:"50%"}}/>
                            </div>
                            <div class="card-body mt-0 pt-1 pb-0 mb-0 ">
                                <h5 class="card-title text-center fs-6 my-0 pt-1 pb-0 fw-bold ">{drname}</h5>
                                <p class="card-text lead fs-6 text-center">{specialty}</p>
                                <p class="card-text text-center mb-0 pb-0">{noexp} years experience</p>
                                <p class="card-text text-center my-0 py-0 ">Ratings: 
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning opacity-50" aria-hidden="true"/>
                                </p>
                            </div>
                            {
                                !appointments?.length?
                                    <AppointmentForm handleBooking={handleBooking} />
                                :   
                                    <div className='mx-auto w-100 p-4'>
                                        <h2 className='text-center'>Appointment Booked!</h2> 
                                        {
                                            appointments.map((eachApptment) => { 
                                                const {name, time, phone, date} = eachApptment.target;
                                           return <div key={eachApptment.id} className='border py-2 px-3 rounded'>                                                
                                                <h4>Name: <em>{name.value}</em> </h4> 
                                                <h4>Phone number: <em>{phone.value}</em> </h4>
                                                <h4>Time: <em>{time.value}</em> </h4>
                                                <h4>Date: <em>{date.value}</em> </h4>
                                                <button id={eachApptment.id} onClick={handleCancelAppointment} className={`btn mt-4 btn-${bgColor} btn-lg rounded-2 navblinks`}>  
                                                    Cancel Appointment
                                                </button>
                                            </div>
                                        })
                                        }
                                        
                                    </div>
                            }
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    </div>
  )
}

export default DrCard;