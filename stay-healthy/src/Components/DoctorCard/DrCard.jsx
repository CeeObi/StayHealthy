import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import fmPrf from "../FindDoctorSearch/docprofilefml.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const DrCard = ({pixsrc=fmPrf, drname="Dr James Gian" , specialty="Dentist" , noexp="23",}) => {
    const [showModal,setShowModal] = useState(false);

  return (
    <div class="col">
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
            

            <div class="card-footer bg-primary rounded-2 mt-2"> 
                <Popup trigger={
                    <div className='navblinks mt-2'>
                        <h6 class="text-center fw-bold text-white mt-2 mb-0 pb-0 ">Book Appointment</h6>
                        <h6 class="text-center fs-6 lead text-white mb-2 mt-0 pt-0">No Booking Fees</h6>
                    </div>
                    } 
                    position="center" 
                    modal
                    open={showModal}
                    onClose={() => setShowModal(false)} >
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
                            <AppointmentForm />
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    </div>
  )
}

export default DrCard;