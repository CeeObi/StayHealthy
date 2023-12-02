import DrCard from "./DoctorCard/DrCard";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import fmPrf from "./FindDoctorSearch/docprofilefml.svg";
import mPrf from "./FindDoctorSearch/docprofileml.svg";

import React from 'react'

const BookingConsultation = () => {
  return (<>
    <FindDoctorSearch />
    <div className='mx-auto w-75 my-5 pt-0 mt-0'>
        <h4 className='text-center mb-0 pb-0'> 8 doctors available</h4>
        <h5 className='text-center opacity-50 mt-0 pt-0'> Book appointments with minimum wait time and verified doctor details</h5>
        <hr className='w-75 mx-auto mt-0 mb-3 pt-0'/>
        <div class="row row-cols-1 row-cols-md-4 g-3 mx-auto">                    
            <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="7"/>
            <DrCard pixsrc={mPrf} drname="Dr Ralph Jack" specialty="Dentist" noexp="9"/>
            <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="15"/>
            <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="5"/>                                       
        </div>
    </div>
    </>
  )
}

export default BookingConsultation

