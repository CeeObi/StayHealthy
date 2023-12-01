import React from 'react'
import { NavLink } from 'react-router-dom';

const getEmailFromSessionStorage = () => {
    return sessionStorage.getItem("email") || null;//"John@gmail.com";
}

const removeUserFromSessionStorage = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("phone");
    window.location.reload()
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
                <div className="d-flex">
                    {
                        usersName 
                        ? 
                        <div className="align-self-center mx-3 text-capitalize">Welcome, {usersName}</div>                    
                        :
                        <NavLink to="/register" className="btn btn-primary me-3 px-4 shadow rounded-pill nav-butn">Sign Up</NavLink> 
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