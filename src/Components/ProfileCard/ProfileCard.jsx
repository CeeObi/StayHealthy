import React, { useEffect, useState } from 'react';
import 'reactjs-popup/dist/index.css';
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
      <div  class="col-12 p-0 mx-auto shadow mb-0">
      {!editProfile&&pemail&&
        <>
            <div class="mx-auto card rounded-0 rounded-top border-0 shadow mb-0 pb-0" style={{width:"100%", backgroundColor: "" }}>
                <div className=' d-flex m-1 border border-primary align-items-center rounded-0 rounded-top  pt-0 border-opacity-50' >                    
                        <img src={dataProfilePics[0]} class=" m-3 img-thumbnail rounded-circle border-primary" alt="..." style={{width:"30%"}}/>                                         
                        <div class=" card-body mt-0 w-25 mx-auto  border-start text-wrap  pt-0 " >                    
                            <p class="card-text mt-0 pt-0 lead fs-6 text-center border ">Patient Profile</p>
                            <h5 class="card-title text-center fs-6 fw-semibold mb-0 pb-0 text-wrap">Welcome{pname&&`, ${pname}`}</h5>                           
                            {pname&&<p className='fs-6 text-center mt-1 pt-1 text-wrap mb-0 pb-0'>Phone Number: {pphone}</p>}
                            <p className='fs-6 text-center mt-1 pt-1 mb-0 pb-0'>{pname&&'Email:'} {pemail}</p>                             
                        </div>       
                </div> 
                <ul className='mx-0 px-1 m-1 mt-0'>
                    <li className='navblinks' onClick={handleClick}><a className='btn w-100 mx-auto mt-1 btn-outline-primary btn-sm'>Edit Your Profile </a> </li>
                    <Link to="/reports"><li className='navblinks'><a className='btn w-100 mx-auto mt-1 btn-outline-primary btn-sm'> Your Reports</a></li></Link>
                </ul>
            </div>            
        </>
      }     
          <ProfileForm showPForm={showPForm} />
      </div>
    )
}

export default ProfileCard