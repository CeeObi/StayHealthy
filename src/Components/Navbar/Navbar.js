import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import ProfileCard from '../ProfileCard/ProfileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const getEmailFromSessionStorage = () => {
    return sessionStorage.getItem("email") || null;//"John@gmail.com";
}
const Navbar = () => {
    const usersName=getEmailFromSessionStorage()?.split('@', 1)[0];
    const navigate=useNavigate()
    

    const removeUserFromSessionStorage = () => {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("phone");
        navigate('/')
    }
    
  return (
    <div className='m-0 p-0'>
        <nav className='p-0 m-0'>
            <div className="navb d-flex justify-content-between align-items-center px-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="py-2 fs-3 ms-3">StayHealthy</h1>
                    <img width="40" height="35" src="https://img.icons8.com/ios-glyphs/90/120AFB/health-checkup.png" alt="StayHealthy Logo"/>
                </div>
                <div className="d-none d-lg-flex">
                    <NavLink to="/" className=" fw-normal fs-6 mx-3 navblinks  ">Home</NavLink>                
                    <NavLink to="/booking-consultation" className=" fw-normal fs-6 mx-3 navblinks ">Appointments</NavLink>
                    <NavLink to="https://dimsblog.onrender.com" target="_blank" className=" fw-normal fs-6 mx-3 navblinks ">Health Blog</NavLink>
                    <NavLink to="/reviews" className=" fw-normal fs-6 mx-3 navblinks">Reviews</NavLink>                      
                </div>
                <div className='d-lg-none me-3'>
                    <button class="btn btn-outline-primary" type="button" id="navMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navMenu">
                        <NavLink to="/" className=" fw-normal fs-6 navblinks dropdown-item ">Home</NavLink>      
                        <NavLink to="/booking-consultation" className=" fw-normal fs-6 navblinks dropdown-item  ">Appointments</NavLink> 
                        <NavLink to="https://dimsblog.onrender.com" target="_blank" className=" fw-normal fs-6 navblinks dropdown-item">Health Blog</NavLink>
                        <NavLink to="/reviews" className=" fw-normal fs-6 navblinks dropdown-item ">Reviews</NavLink> 
                        {!usersName ?<>
                        <NavLink to="/login" className="btn btn-outline-primary mx-3 px-4 shadow rounded-pill nav-butn mt-1">Login</NavLink>  
                        <NavLink to="/register" className="btn btn-primary me-3 px-4 shadow rounded-pill nav-butn mt-1">Sign Up</NavLink> 
                        </> : <>
                        <NavLink onClick={removeUserFromSessionStorage} className="btn btn-outline-primary ms-2 me-3 px-4 mt-1 shadow rounded-pill nav-butn">Logout</NavLink>             
                        {<div class="mx-3 mt-3" style={{width:"300px"}}>
                            <ProfileCard />
                        </div>
                        }
                        </>
                        }
                    </div>
                </div>                
                <div className="d-none d-lg-flex">                
                    {                        
                        usersName ? 
                        <>
                            <div className="align-self-center mx-3 text-capitalize navblinks"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome, {usersName}</div>                
                            <div class="dropdown-menu dropdown-menu-right mt-2 p-0" style={{width:"350px"}}>
                                <ProfileCard />
                            </div>
                        </>                    
                        :
                        <>                        
                        <NavLink to="/register" className="btn btn-primary me-3 px-4 shadow rounded-pill nav-butn">Sign Up</NavLink> 
                        </>
                    }
                    {
                        usersName
                        ?
                        <NavLink onClick={removeUserFromSessionStorage} to="/" className="btn btn-outline-primary me-3 px-4  shadow rounded-pill nav-butn">Logout</NavLink>
                        :
                        <NavLink to="/login" className="btn btn-outline-primary me-3 px-4 shadow rounded-pill nav-butn">Login</NavLink>                
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;