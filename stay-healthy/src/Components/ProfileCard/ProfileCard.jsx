import React, { useEffect, useState } from 'react'
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import fmPrf from "../../utils/docprofilefml.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import { dataProfilePics } from '../../utils/GetData';
import ProfileForm from './ProfileForm';




const ProfileCard = () => {
   const pemail = sessionStorage.getItem("email") ||null; // Get the email from session storage
   const pphone = sessionStorage.getItem("phone") ||null; // Get the email from session storage
   const pname = sessionStorage.getItem("name") ||null; // Get the email from session storage()
   const [editProfile,setEditProfile] = useState(false)

   const handleprofile = (IsHideProfile) =>{
    setEditProfile(IsHideProfile)
   }

    return (
      <div  class="col-12 p-0 mx-auto">
      {!editProfile&&pemail&&
        <>
            <div class="mx-auto card rounded-0 rounded-top " style={{width:"100%", backgroundColor: "#f7f8fa" }}>
                <div className='  d-flex m-1 border border-end align-items-center rounded-0 rounded-top'>                    
                        <img src={dataProfilePics[0]} class=" m-3 img-thumbnail rounded-circle border-primary" alt="..." style={{width:"30%"}}/>                                         
                        <div class=" card-body mt-0  border-start ">                    
                            <h5 class="card-title text-center fs-5 fw-bold ">Welcome{pname&&`, ${pname}`}</h5>
                            {pname&&<p class="card-text mt-3 lead fs-5 text-center">Patient Profile</p>}
                        </div>       
                </div> 
            </div>
            {pname&&<div className='fs-5 mx text-center mt-2'>Phone Number: <strong>{pphone}</strong></div>}
            <div className='fs-5 mx text-center mt-2'>Email: <strong>{pemail}</strong></div> 
        </>
      }
            
          <ProfileForm hideProfile={handleprofile} />
      
      </div>
    )
}

export default ProfileCard