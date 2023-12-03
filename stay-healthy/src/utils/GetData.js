import React from 'react'
import fmPrf from "./docprofilefml.svg";
import mPrf from "./docprofileml.svg";
 



const dataTest = [
    {
    "name": "Dr. Jiao Yang",
    "ratings": "⭐⭐⭐⭐⭐",
    "experience": 9,
    "speciality": "Dentist"
    },
    {
    "name": "Dr. Denis Raj",
    "ratings": "⭐⭐⭐⭐",
    "experience": 24,
    "speciality": "Dentist"
    },
    {
    "name": "Dr. Lyn Christie",
    "ratings": "⭐⭐⭐",
    "experience": 11,
    "speciality": "Dentist"
    },]

const dataProfilePics = [mPrf, fmPrf]
const GetData = async (searchedDoctorsSpecialty) => {
    const response = await fetch ("https://api.npoint.io/9a5543d36f1460da2f63")
    const doctorsDetails = await response.json();
    const doctorsInSpecialty = await doctorsDetails.filter((docDetail) => docDetail.speciality == searchedDoctorsSpecialty);
    return doctorsInSpecialty
}



export default GetData;
export {dataTest, dataProfilePics};