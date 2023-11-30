import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="navb d-flex justify-content-between align-items-center px-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="py-2 fs-3 ms-3">StayHealthy</h1>
                    <img width="40" height="35" src="https://img.icons8.com/ios-glyphs/90/120AFB/health-checkup.png" alt="StayHealthy Logo"/>
                </div>
                <div className="d-flex">
                    <h6 className=" fw-normal fs-6 mx-3 navblinks  ">Home</h6>                
                    <h6 className=" fw-normal fs-6 mx-3 navblinks ">Appointments</h6>
                    <h6 className=" fw-normal fs-6 mx-3 navblinks ">Health Blog</h6>
                    <h6 className=" fw-normal fs-6 mx-3 navblinks ">Reviews</h6>                
                </div>
                <div class="d-flex">
                    <a href="" className="btn btn-primary me-3 px-4 shadow rounded-pill nav-butn">Sign Up</a>
                    <a href="" className="btn btn-outline-primary me-3 px-4  shadow rounded-pill nav-butn">Login</a>                
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;