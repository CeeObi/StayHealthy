import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearchIC from './Components/InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import AppointmentFormIC from './Components/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import DrCard from './Components/DoctorCard/DrCard';





function App() {

  return (
    <div>
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/register" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation/>}/>                
                <Route path="/findadoctor" element={<FindDoctorSearchIC/>}/>                
                <Route path="/finddoctorsrc" element={<DrCard/>}/>                
            </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;