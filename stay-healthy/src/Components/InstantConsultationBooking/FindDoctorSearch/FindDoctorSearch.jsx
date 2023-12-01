import React, { useState } from 'react';
import findDoctor from "./12291154_Wavy_Tech-25_Single-08.svg";

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
                <div className='mx-auto my-3 d-flex justify-content-center w-75' >
                    <img className='w-50 ' src={findDoctor} alt="" hidden={!listDoctorsHidden}/>
                </div>
                <h4 className='text-center mb-0 pb-0'> 8 doctors available</h4>
                <h5 className='text-center opacity-50 mt-0 pt-0'> Book appointments with minimum wait time and verified doctor details</h5>
                <hr className='w-75 mx-auto mt-0 pt-0'/>

                
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                </div>








            </div>

      </div>
  )
}

export default FindDoctorSearch