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



export default GetData;
export {dataProfilePics, initSpeciality, decodeJWTToken};