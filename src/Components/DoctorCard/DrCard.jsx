import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import fmPrf from "../../utils/public/docprofilefml.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { v4 as uuidv4 } from "uuid";

const getStorageDoctorData = (drname) => {
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
    if (storedDoctorData) {
        if (storedDoctorData.drname === drname) return [storedDoctorData];
    } else {
        return [];
    }
};

const DrCard = ({ pixsrc = fmPrf, drname = "Dr James Gian", specialty = "Dentist", noexp = "23", ratings }) => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState(getStorageDoctorData(drname));
    const [bgColor, setBgColor] = useState(!appointments?.length ? "primary" : "danger");
    const srcPix = !appointments?.length ? pixsrc : appointments[0].drpix;
    const handleBooking = (appointmentEventData) => {
        const aptId = uuidv4();
        const { name, phone, date, time } = appointmentEventData.target;
        const newAppointment = {
            id: aptId,
            drpix: srcPix,
            drname: drname,
            noexp: noexp,
            ratings: ratings,
            specialty: specialty,
            name: name.value,
            phone: phone.value,
            date: date.value,
            time: time.value,
        };
        localStorage.setItem("doctorData", JSON.stringify(newAppointment));
        setShowModal(false);
        setBgColor("danger");
        const updatedAppointment = [...appointments, newAppointment];
        setAppointments(updatedAppointment);
        window.location.reload();
    };
    const handleCancelAppointment = (canceAppointmentEventData) => {
        const cancelId = canceAppointmentEventData.target.id;
        setBgColor("primary");
        const updatedAppointment = appointments.filter((eachAppointment) => eachAppointment.id !== cancelId);
        setAppointments(updatedAppointment);
        localStorage.removeItem("doctorData");
        setShowModal(false);
        window.location.reload();
    };

    return (
        <div class="col col-10 mt-3 mx-auto mx-lg-0 ">
            <div class="mx-auto card " style={{ width: "100%" }}>
                <div className="mx-auto col-4 col-sm-5 col-md-4 col-lg-5 mt-2 d-flex justify-content-center mb-0">
                    <img
                        src={srcPix}
                        class="card-img-top img-thumbnail mb-0 pb-0 rounded-circle border-primary"
                        alt="..."
                        style={{ width: "100%" }}
                    />
                </div>
                <div class="card-body mt-0 pt-1 pb-0 mb-0 ">
                    <h5 class="card-title text-center fs-6 my-0 pt-1 pb-0 fw-bold ">{drname}</h5>
                    <p class="card-text lead fs-6 text-center">{specialty}</p>
                    <p className="card-text text-center mb-0 pb-0 opacity-75 ">
                        <em>{noexp} years experience</em>
                    </p>
                    <p class="card-text text-center my-0 py-0 fs-6 ">Ratings: {ratings}</p>
                </div>
                <div class={`card-footer bg-${bgColor} rounded-2 mt-2 `}>
                    <Popup
                        trigger={
                            <div className="navblinks border rounded shadow m-1" onClick={() => setShowModal(true)}>
                                {!appointments?.length ? (
                                    <h6 class="text-center fw-bold text-white mt-2 mb-0 pb-0 ">Book Appointment</h6>
                                ) : (
                                    <h6 class="text-center fw-bold text-white mt-2 mb-0 pb-0 ">Cancel Appointments</h6>
                                )}
                                <h6 class="text-center fs-6 lead text-white mb-2 mt-0 pt-0">No Booking Fees</h6>
                            </div>
                        }
                        position="center"
                        modal
                        open={showModal}
                        onClose={() => setShowModal(false)}
                        contentStyle={{
                            width: "90vw", // Sets the modal width to 80% of the viewport width
                            maxWidth: "1000px", // Optional: Sets a maximum width for the modal
                            // height: "80vh", // Sets the modal height to 80% of the viewport height
                            // overflowY: "auto", // Enables vertical scrolling if content overflows
                            // padding: "20px", // Adds padding for aesthetic spacing
                        }}
                    >
                        {(close) => (
                            <div
                                className="doctorbg w-[90vw] max-w-[1200px] h-[80vh] overflow-y-auto mx-auto border pt-4 pb-5"
                                style={{
                                    height: "90vh",
                                    overflowY: "scroll",
                                }}
                            >
                                <div className="mx-auto w-50 mt-2 d-flex justify-content-center mb-0">
                                    <img
                                        src={srcPix}
                                        class="card-img-top img-thumbnail mb-0 pb-0 rounded-circle border-primary"
                                        alt="..."
                                        style={{ width: "50%", minWidth: "100px", maxWidth: "150px" }}
                                    />
                                </div>
                                <div class="card-body mt-0 pt-1 pb-0 mb-0 ">
                                    <h5 class="card-title text-center fs-6 my-0 pt-1 pb-0 fw-bold ">{drname}</h5>
                                    <p class="card-text lead fs-6 text-center">{specialty}</p>
                                    <p class="card-text text-center mb-0 pb-0">{noexp} years experience</p>
                                    <p class="card-text text-center my-0 py-0 fs-6 ">Ratings: {ratings}</p>
                                </div>
                                {!appointments?.length ? (
                                    <AppointmentForm handleBooking={handleBooking} />
                                ) : (
                                    <div className="mx-auto w-100 p-4">
                                        <h2 className="text-center">Appointment Booked!</h2>
                                        {appointments.map((eachApptment) => {
                                            const { name, time, phone, date } = eachApptment;
                                            return (
                                                <div key={eachApptment.id} className="border py-2 px-3 rounded">
                                                    <h4>
                                                        Name: <em>{name}</em>{" "}
                                                    </h4>
                                                    <h4>
                                                        Phone number: <em>{phone}</em>{" "}
                                                    </h4>
                                                    <h4>
                                                        Time: <em>{time}</em>{" "}
                                                    </h4>
                                                    <h4>
                                                        Date: <em>{date}</em>{" "}
                                                    </h4>
                                                    <button
                                                        id={eachApptment.id}
                                                        onClick={handleCancelAppointment}
                                                        className={`btn mt-4 btn-${bgColor} btn-lg rounded-2 navblinks`}
                                                    >
                                                        Cancel Appointment
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    );
};

export default DrCard;
