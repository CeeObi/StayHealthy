import React, { useState } from 'react';
import findDoctor from "../../utils/finddoc.svg";
import { useNavigate } from 'react-router-dom';
const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]
const FindDoctorSearch = () => {
    const navigate = useNavigate()
    const [specialities, setSpecialities] = useState(initSpeciality);
    const [listDoctorsHidden, setListDoctorsHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const handleDoctorSelect=(eventSpecialtySearched) => {
        console.log(`${eventSpecialtySearched} This event`)
        setSearchDoctor(eventSpecialtySearched)
        navigate(`/booking-consultation?specialty=${eventSpecialtySearched}`);
        window.location.reload();
    }

    return (<div className='row mb-0 pb-0'>
            <div className='mx-auto w-75 mt-5 mb-0 pb-0'>
                <h2 className=''> Find a doctor and consult instantly</h2>                
                <input value={searchDoctor} type="text" class="form-control border-primary opacity-50 fa fa-search" id="inlineFormInputGroupUsername" placeholder="&#xF002; Search doctors by specialty..." onFocus={()=>setListDoctorsHidden(false)} onBlur={()=>setListDoctorsHidden(true)}/>
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
            </div>
      </div>
  )
}

export default FindDoctorSearch