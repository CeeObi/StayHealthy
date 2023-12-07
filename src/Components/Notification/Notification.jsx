import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import DrCard from '../DoctorCard/DrCard';


const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedSessionUsername = sessionStorage.getItem('email');
    const storedLocalDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = storedLocalDoctorData?.name //JSON.parse(localStorage.getItem(storedDoctorData?.name));
    
    if (storedSessionUsername) {
      setIsLoggedIn(true);
      setUsername(storedSessionUsername);
    }
    else{
        setIsLoggedIn(false);
        setDoctorData(null);
    }

    if (storedLocalDoctorData) {
      setDoctorData(storedLocalDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  },[]);
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && appointmentData && (
        <>
        <hr className='mt-2 pt-0 col-10 mx-auto'/>
        <h3 className="text-center mt-0">Appointment Details</h3>
          <div className="mb-0 card col-2 mx-2 rounded shadow mh-25 bg-info">            
            <div className='border border-primary m-1 rounded'>
                <p className="card-header text-center fs-6">
                    <strong>Patient Name: </strong> {doctorData?.name}              
                </p>
                <div className="card-body mx-auto mt-1">
                    <p className="card-group my-0 pt-1 fs-6">
                        <strong>Patient Mobile:</strong> {doctorData?.phone}             
                    </p>
                    <p className="card-group my-0 pt-1 fs-6">
                        <strong>Date of Appointment:</strong> {doctorData?.date}                
                    </p>
                    <p className="card-group my-0 pt-1 fs-6">
                        <strong>Time:</strong> {doctorData?.time}            
                    </p>
                    <p className="card-group my-0 pt-1 fs-6">
                        <strong>Doctor Name:</strong> {doctorData?.drname}            
                    </p>
                    <p className="card-group my-0 pt-1 fs-6">
                        <strong>Specialty:</strong> {doctorData?.specialty}            
                    </p>
                </div>
                </div>
          </div>
          
        </>
      )}
    </div>
  );
};



export default Notification;