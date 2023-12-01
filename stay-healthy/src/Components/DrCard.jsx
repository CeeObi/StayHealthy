import React from 'react'
import { Link } from 'react-router-dom';


const DrCard = ({pixsrc, drname , specialty ,noexp,}) => {
  return (
    <div class="col">
                        <div class="card h-100 ">
                            <div className='mx-auto w-75 mt-2 d-flex justify-content-center mb-0'>
                                <img src={pixsrc} class="card-img-top img-thumbnail mb-0 pb-0 rounded-circle border-primary w-50" alt="..."/>
                            </div>
                            <div class="card-body mt-0 pt-1">
                                <h5 class="card-title text-center fs-6 my-0 pt-1 pb-0 fw-bold ">{drname}</h5>
                                <p class="card-text lead fs-6 text-center">{specialty}</p>
                                <p class="card-text text-center mb-0 pb-0">{noexp} years experience</p>
                                <p class="card-text text-center mt-0 pt-0">Ratings: 
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning" aria-hidden="true"/>
                                    <i class="fa fa-star ms-1 text-warning opacity-50" aria-hidden="true"/>
                                </p>
                            </div>
                            <div class="card-footer bg-primary rounded-2">
                                <Link to="/" >
                                <div className='navblinks'>
                                    <h6 class="text-center fw-bold text-white mt-2 mb-0 pb-0 ">Book Appointment</h6>
                                    <h6 class="text-center fs-6 lead text-white mb-2 mt-0 pt-0">No Booking Fees</h6></div>
                                </Link>
                            </div>
                        </div>
                    </div>
  )
}

export default DrCard;