import React, { useState } from "react";
import findDoctor from "../../utils/public/finddoc.svg";
import { useNavigate } from "react-router-dom";
import { initSpeciality } from "../../utils/GetData";
import "./FindDoctorSearch.css";

const FindDoctorSearch = () => {
    const navigate = useNavigate();
    const [specialities] = useState(initSpeciality);
    const [listDoctorsHidden, setListDoctorsHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState("");
    const handleDoctorSelect = (eventSpecialtySearched) => {
        setSearchDoctor(eventSpecialtySearched);
        navigate(`/booking-consultation?specialty=${eventSpecialtySearched}`);
        // window.location.reload();
    };

    return (
        <div className=" mb-0 pb-0">
            <div className="mx-auto w-75 mt-5 mb-0 pb-0">
                <h2 className=""> Find a doctor and consult instantly</h2>
                <input
                    onChange={(event) => setSearchDoctor(event.target.value)}
                    value={searchDoctor}
                    type="text"
                    className="form-control py-3 border-primary opacity-50 fa fa-search"
                    id="inlineFormInputGroupUsername"
                    placeholder="&#xF002; Search doctors by specialty..."
                    onFocus={() => setListDoctorsHidden(false)}
                    onBlur={() => setListDoctorsHidden(true)}
                />
                <div className=" " hidden={listDoctorsHidden}>
                    {specialities.map((speciality) => (
                        <div
                            className=" border rounded navblinks search-doctor-result-item border-primary border-opacity-50 "
                            key={speciality}
                            onMouseDown={() => handleDoctorSelect(speciality)}
                        >
                            <span>
                                <img
                                    src={process.env.PUBLIC_URL + "/images/search.svg"}
                                    alt=""
                                    style={{ height: "8px", width: "8px" }}
                                    width="10"
                                />
                            </span>
                            <span>{speciality}</span>
                            <span className="d-none d-sm-inline">SPECIALITY</span>
                        </div>
                    ))}
                </div>
                <div className="mx-auto my-3 d-flex justify-content-center col-sm-9 col-md-7 col-lg-8 col-xl-6">
                    <img className="w-100 " src={findDoctor} alt="" hidden={!listDoctorsHidden} />
                </div>
            </div>
        </div>
    );
};

export default FindDoctorSearch;
