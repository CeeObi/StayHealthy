import React from 'react'
import { NavLink } from 'react-router-dom';

const getEmailFromSessionStorage = () => {
    return JSON.parse(sessionStorage.getItem("email")) || null;//"John@gmail.com";
}

const Navbar = () => {

    const usersName=getEmailFromSessionStorage()?.split('@', 1)[0];
  return (
    <div>
        <nav>
            <div className="navb d-flex justify-content-between align-items-center px-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="py-2 fs-3 ms-3">StayHealthy</h1>
                    <img width="40" height="35" src="https://img.icons8.com/ios-glyphs/90/120AFB/health-checkup.png" alt="StayHealthy Logo"/>
                </div>
                <div className="d-flex">
                    <NavLink to="/" className=" fw-normal fs-6 mx-3 navblinks  ">Home</NavLink>                
                    <NavLink to="/" className=" fw-normal fs-6 mx-3 navblinks ">Appointments</NavLink>
                    <NavLink to="/" className=" fw-normal fs-6 mx-3 navblinks ">Health Blog</NavLink>
                    <NavLink to="/" className=" fw-normal fs-6 mx-3 navblinks ">Reviews</NavLink>                
                </div>
                <div class="d-flex">
                    {
                        usersName 
                        ? 
                        <div className="align-self-center mx-3">Welcome, {usersName}</div>                    
                        :
                        <NavLink to="/signup"><a href="" className="btn btn-primary me-3 px-4 shadow rounded-pill nav-butn">Sign Up</a></NavLink> 
                    }
                    {
                        usersName
                        ?
                        <NavLink to="/"><a href="" className="btn btn-outline-primary me-3 px-4  shadow rounded-pill nav-butn">Logout</a></NavLink>
                        :
                        <NavLink to="/login"><a href="" className="btn btn-outline-primary me-3 px-4  shadow rounded-pill nav-butn">Login</a></NavLink>                
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;