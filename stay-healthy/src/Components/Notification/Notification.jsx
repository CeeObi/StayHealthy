import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import DrCard from '../DoctorCard/DrCard';



const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = storedDoctorData?.name //JSON.parse(localStorage.getItem(storedDoctorData?.name));
    
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
        // alert("data present")
        // console.log(storedDoctorData.name)
      setDoctorData(storedDoctorData);
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
        <h3 className="text-center">Appointment Details</h3>
          <div className="card col-3 mx-auto rounded-0">            
          <p className="card-header text-center fs-5">
                    <strong>Patient Name: </strong> {doctorData?.name}              
                </p>
            <div className="card-body mx-auto">
                <p className="card-group">
                    <strong>Patient Mobile:</strong> {doctorData?.phone}             
                </p>
                <p className="card-group">
                    <strong>Date of Appointment:</strong> {doctorData?.date}                
                </p>
                <p className="card-group">
                    <strong>Time:</strong> {doctorData?.time}            
                </p>
            </div>
            <div className='w-100 mx-auto'>
            <p className='mb-0 pb-0 mx-3 text-decoration-underline text-primary text-center'> Physician Details:</p>
            <DrCard key={doctorData?.id} pixsrc={doctorData?.drpix} drname={doctorData?.drname} specialty={doctorData?.specialty} noexp={doctorData?.experience} ratings={doctorData?.ratings}/>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};



export default Notification;