import React, { useState } from 'react';
import findDoctor from "./finddoc.svg";
import fmPrf from "./docprofilefml.svg";
import mPrf from "./docprofileml.svg";
import DrCard from '../DoctorCard/DrCard';
const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]
const FindDoctorSearch = () => {
    const [specialities, setSpecialities] = useState(initSpeciality);
    const [listDoctorsHidden, setListDoctorsHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const handleDoctorSelect=() =>{
        console.log("drselect")
    }
    return (<div className='row'>
            <div className='mx-auto w-75 my-5'>
                <h2 className=''> Find a doctor and consult instantly</h2>                
                <input type="text" class="form-control border-primary opacity-50 fa fa-search" id="inlineFormInputGroupUsername" placeholder="&#xF002; Search doctors by specialty..." onFocus={()=>setListDoctorsHidden(false)} onBlur={()=>setListDoctorsHidden(true)}/>
                <div className=" " hidden={listDoctorsHidden}>
                    {
                        specialities.map(speciality => 
                        <div className="border rounded navblinks search-doctor-result-item border-primary border-opacity-50 " key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>                            
                            <span><img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" style={{height:"10px", width:"10px"}} width="12" /></span>
                            <span>{speciality}</span>
                            <span>SPECIALITY</span>                            
                        </div>)
                    }
                </div>
                <div className='mx-auto my-3 d-flex justify-content-center w-75' >
                    <img className=' ' src={findDoctor} alt="" hidden={!listDoctorsHidden} style={{width:"60%"}}/>
                </div>
                <h4 className='text-center mb-0 pb-0'> 8 doctors available</h4>
                <h5 className='text-center opacity-50 mt-0 pt-0'> Book appointments with minimum wait time and verified doctor details</h5>
                <hr className='w-75 mx-auto mt-0 mb-5 pt-0'/>
                <div class="row row-cols-1 row-cols-md-4 g-3 mx-auto">                    
                    <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="7"/>
                    <DrCard pixsrc={mPrf} drname="Dr Ralph Jack" specialty="Dentist" noexp="9"/>
                    <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="15"/>
                    <DrCard pixsrc={fmPrf} drname="Dr Yin Gaef" specialty="Dentist" noexp="5"/>                                       
                </div>
            </div>
      </div>
  )
}

export default FindDoctorSearch