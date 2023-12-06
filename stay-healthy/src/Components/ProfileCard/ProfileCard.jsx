import React, { useEffect, useState } from 'react'
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import fmPrf from "../../utils/public/docprofilefml.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import { dataProfilePics } from '../../utils/GetData';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
   const pemail = sessionStorage.getItem("email") ||null; // Get the email from session storage
   const pphone = sessionStorage.getItem("phone") ||null; // Get the email from session storage
   const pname = sessionStorage.getItem("name") ||null; // Get the email from session storage()
   const [editProfile,setEditProfile] = useState(false)
   const [showPForm,setShowPForm] = useState(false)

   const handleClick = (e) => {
    e.preventDefault();
    setShowPForm(true)
    setEditProfile(true)
    e.stopPropagation();
   }

    return (
      <div  class="col-12 p-0 mx-auto">
      {!editProfile&&pemail&&
        <>
            <div class="mx-auto card rounded-0 rounded-top" style={{width:"100%", backgroundColor: "#f7f8fa" }}>
                <div className='  d-flex m-1 border border-end align-items-center rounded-0 rounded-top'>                    
                        <img src={dataProfilePics[0]} class=" m-3 img-thumbnail rounded-circle border-primary" alt="..." style={{width:"30%"}}/>                                         
                        <div class=" card-body mt-0 w-50 mx-auto  border-start text-wrap" >                    
                            <h5 class="card-title text-center fs-6 fw-semibold mb-0 pb-0 text-wrap">Welcome{pname&&`, ${pname}`}</h5>
                            {pname&&<p class="card-text mt-0 pt-0 lead fs-6 text-center">Patient Profile</p>}
                            {pname&&<p className='fs-6 mx text-center mt-1 pt-1 text-wrap'>Phone Number: {pphone}</p>}
                            <p className='fs-6 text-center mt-1 pt-1'>Email: {pemail}</p>                             
                        </div>       
                </div> 
                <ul>
                    <li className='navblinks' onClick={handleClick}>Your Profile</li>
                    <Link to="/reports"><li className='navblinks'> Your Reports</li></Link>
                </ul>
            </div>
            
        </>
      }     
          <ProfileForm showPForm={showPForm} />
      </div>
    )
}

export default ProfileCard