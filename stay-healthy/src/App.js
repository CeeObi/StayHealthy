import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearchIC from './Components/InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import GiveReviews from './Components/ReviewForm/GiveReview/GiveReviews';



function App() {
  return (
    <div>
        <BrowserRouter>
            <Notification>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/register" element={<SignUp/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/instant-consultation" element={<InstantConsultation/>}/>                
                  <Route path="/findadoctor" element={<FindDoctorSearchIC/>}/>                
                  <Route path="/booking-consultation" element={<BookingConsultation/>}/>
                  <Route path="/reviews" element={<ReviewForm/>}/>
                  <Route path="/givereviews" element={<GiveReviews/>}/>
                  
              </Routes>   
            </Notification>         
        </BrowserRouter>
       
    </div>
  );
}

export default App;