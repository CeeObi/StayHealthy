import React, { useState } from 'react'

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
                
                <input type="text" class="form-control border-primary opacity-50" id="inlineFormInputGroupUsername" placeholder="@ Search doctors by specialty..." onFocus={()=>setListDoctorsHidden(false)} onBlur={()=>setListDoctorsHidden(true)}/>
                <div className="border border-dark rounded-end" hidden={listDoctorsHidden}>
                    {
                        specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                            <span><img src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" style={{height:"10px", width:"10px"}} width="12" /></span>
                            <span>{speciality}</span>
                            <span>SPECIALITY</span>
                        </div>)
                    }
                </div>
                





            </div>

      </div>
  )
}

export default FindDoctorSearch