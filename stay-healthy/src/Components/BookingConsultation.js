import { useSearchParams } from "react-router-dom";
import DrCard from "./DoctorCard/DrCard";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import fmPrf from "../utils/docprofilefml.svg";
import mPrf from "../utils/docprofileml.svg";
import React, { useEffect, useState } from 'react'
import GetData, { dataTest, dataProfilePics } from "../utils/GetData";


const BookingConsultation = () => {
    const [searchParams] = useSearchParams();
    const [availableDoctors,setAvailableDoctors]=useState( [{
        "name": "Dr. Lyn Christie",
        "ratings": "⭐⭐⭐",
        "experience": 11,
        "speciality": "Dentist"
        },]);
    const searchedDoctorsSpecialty = searchParams.get('specialty');
    const [listProfilePics,setListProfilePics]= useState();
    const handleSearch = () =>{
        console.log("GOT CLICKED")
    }

    

    
    useEffect(() => {
        const getDoctorsDetails = dataTest;
        const getListProfilePics = dataProfilePics;
        // getDoctorsDetails.map(
        //     (det) => ( console.log(det.name))
        // )
        
        setAvailableDoctors(getDoctorsDetails)
        setListProfilePics(getListProfilePics)
        // getDoctorsDetails = GetData(searchedDoctorsSpecialty)
        // console.log(searchedDoctorsSpecialty)
    },[searchParams]

    )
    


  return (<>
    <FindDoctorSearch onSearch={handleSearch}  />
    <div className='mx-auto w-75 my-5 pt-0 mt-0'>
        <h4 className='text-center mb-0 pb-0'> 8 doctors available</h4>
        <h5 className='text-center opacity-50 mt-0 pt-0'> Book appointments with minimum wait time and verified doctor details</h5>
        <hr className='w-75 mx-auto mt-0 mb-3 pt-0'/>
        <div class="row row-cols-1 row-cols-md-4 g-3 mx-auto">  
        {
           availableDoctors.map((drAvailable) => {
           const {name,speciality,experience,ratings} = drAvailable;
           {/* **************** */}
           const randomIndex = Math.floor(Math.random() * listProfilePics.length);
           const profilePix = listProfilePics[randomIndex];
           {/* *************** */}
           return <DrCard pixsrc={profilePix} drname={name} specialty={speciality} noexp={experience} ratings={ratings}/>
           }
           ) 
        }                  
            
            <DrCard pixsrc={mPrf} drname="Dr Ralph Jack" specialty="Dentist" noexp="9"/>
            <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="15"/>
            <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="5"/>                                       
        </div>
    </div>
    </>
  )
}

export default BookingConsultation

