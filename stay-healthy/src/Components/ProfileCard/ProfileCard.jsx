import React, { useEffect, useState } from 'react'
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import fmPrf from "../../utils/docprofilefml.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import { dataProfilePics } from '../../utils/GetData';



const ProfileCard = () => {


    return (
      <div  class="col-12 p-0 mx-auto">
          <div class="mx-auto card " style={{width:"100%", backgroundColor: "#f7f8fa" }}>
              <div className='  d-flex m-1 border border-end align-items-center'>                    
                      <img src={dataProfilePics[0]} class=" m-3 img-thumbnail rounded-circle border-primary" alt="..." style={{width:"40%"}}/>                                         
                      <div class=" card-body mt-0  border-start ">                    
                          <h5 class="card-title text-center fs-6 fw-bold ">Welcome, James</h5>
                          <p class="card-text mt-3 lead fs-6 text-center">Your Profile</p>                    
                      </div>       
              </div> 

          </div>
      </div>
    )
}

export default ProfileCard