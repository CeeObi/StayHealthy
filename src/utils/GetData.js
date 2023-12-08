import fmPrf from "./public/docprofilefml.svg";
import mPrf from "./public/docprofileml.svg";
import { jwtDecode } from "jwt-decode";
 

const initSpeciality = [
'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]


const dataProfilePics = [mPrf, fmPrf]
const GetData = async (searchedDoctorsSpecialty) => {
    const response = await fetch ("https://api.npoint.io/9a5543d36f1460da2f63")
    const doctorsDetails = await response.json()    
    const doctorsInSpecialty =  doctorsDetails.filter((docDetail) => docDetail.speciality.toLowerCase() === searchedDoctorsSpecialty.toLowerCase());
    return  doctorsInSpecialty
}

const decodeJWTToken = (addToken) => {
    const token = addToken;
    const decodedToken = jwtDecode(token);
    return decodedToken
}



const testData = [{
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
    "name": "Dr. Kevin Miller",
    "ratings": "⭐⭐⭐⭐⭐",
    "experience": 11,
    "speciality": "Dentist"
    },
    {
    "name": "Dr. Emily Clark",
    "ratings": "⭐⭐⭐⭐⭐",
    "experience": 11,
    "speciality": "Gynecologist/Obstetrician"
    },
    {
    "name": "Dr. Michael Smith",
    "ratings": "⭐⭐⭐⭐⭐",
    "experience": 40,
    "speciality": "General Physician"
    },]



export default GetData;
export {dataProfilePics, initSpeciality, decodeJWTToken,testData };