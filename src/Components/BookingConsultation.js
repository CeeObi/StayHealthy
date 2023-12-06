import { useSearchParams } from "react-router-dom";
import DrCard from "./DoctorCard/DrCard";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import React, { useEffect, useState } from 'react'
import GetData, { dataTest, dataProfilePics } from "../utils/GetData";
import ReviewForm from "./ReviewForm/ReviewForm";


const BookingConsultation = () => {
    const [searchParams] = useSearchParams();
    const [availableDoctors,setAvailableDoctors]=useState([]);
    const searchedDoctorsSpecialty = searchParams.get('specialty');
    const [listProfilePics,setListProfilePics]= useState([]);
    
    useEffect(() => {
        if (searchedDoctorsSpecialty){
        GetData(searchedDoctorsSpecialty).then( (
            (returnedDoctorsInSpecialty) => {                          
                setAvailableDoctors(returnedDoctorsInSpecialty)
                setListProfilePics(dataProfilePics)
        }),(
            (incaseAnErrorReturned) => incaseAnErrorReturned
        ));
    }},[searchParams])

  return (<>
    <FindDoctorSearch />
    <div className='mx-auto w-75 my-5 pt-0 mt-0'>
        {(searchedDoctorsSpecialty) && <h4 className='text-center mb-0 pb-0'><strong className="text-primary fs-3 fw-bold">{availableDoctors.length}</strong> doctors available</h4>}
        <h5 className='text-center opacity-50 mt-0 pt-0'> Book appointments with minimum wait time and verified doctor details</h5>
        <hr className='w-25 mx-auto mt-0 mb-1 pt-0'/>
        <hr className='w-75 mx-auto mt-0 mb-3 pt-0'/>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 mx-auto">  
        {
           availableDoctors.map((drAvailable) => {
           const {name,speciality,experience,ratings} = drAvailable;  
           {/* Just for generating random placeholder profile pixs from utils file          */}
                    const randomIndex = Math.floor(Math.random() * listProfilePics.length);
                    const profilePix = listProfilePics[randomIndex];    
           {/* *************       */}
           return <DrCard key={name} pixsrc={profilePix} drname={name} specialty={speciality} noexp={experience} ratings={ratings}/>
           }
           ) 
        }                                            
        </div>
    </div>
    {availableDoctors.length ? <ReviewForm avalableDocs={availableDoctors} /> : null }
        
    </>
  )
}




export default BookingConsultation

