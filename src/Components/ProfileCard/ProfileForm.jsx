import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { decodeJWTToken } from "../../utils/GetData";



const ProfileForm = ({showPForm}) => {
    const [userDetails, setUserDetails] = useState({});
    const [updatedDetails, setUpdatedDetails] = useState({});    
    const editMode=showPForm;
    const navigate = useNavigate();

    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
        navigate("/login");
        } else {
        fetchUserProfile();        
        }
    }, [navigate]);

    const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

        if (!authtoken) {
            navigate("/login");
        } 
        else {
            const response = await fetch(`${API_URL}/api/auth/user`, {
            headers: {
                "Authorization": `Bearer ${authtoken}`,
                "Email": email, // Add the email to the headers
            },
        });

        if (response.ok) {
            console.log (response)
            const user = await response.json();
            setUserDetails(user);
            setUpdatedDetails(user);            
        } 
        else {
            throw new Error("Failed to fetch user profile");
            }
        }
    } catch (error) {
    }
    };
    const handleInputChange = (e) => {        
        setUpdatedDetails({
            ...updatedDetails,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authtoken = sessionStorage.getItem("auth-token");
            const email = sessionStorage.getItem("email"); // Get the email from session storage
            if (!authtoken || !email) {
                navigate("/login");
                return;
            }
            const payload = { ...updatedDetails };
            const response = await fetch(`${API_URL}/api/auth/user`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${authtoken}`,
                    "Content-Type": "application/json",
                    "Email": email,                    
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                
                // Update the user details in session storage
                const json =  await response.json();  
                sessionStorage.setItem('auth-token', json.authtoken);                 
                const updatedValue = decodeJWTToken(json.authtoken) 
                const{name,phone,email} = updatedValue
                sessionStorage.setItem('email', email);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);   
                alert(`Profile Updated Successfully!`);
                navigate("/");
                window.location.reload()
            } else {
                // Handle error case
                throw new Error("Failed to update profile");
            }
        } catch (error) {
            console.error(error);
            // Handle error case
        }
    };


return (
    <div className="profile-container">
    {editMode && 
        (<div className="mt-4 p-3">
            <form className="" onSubmit={handleSubmit}>
                <div className="form-group mb-3">   
                    <div>
                        <label htmlFor="email">
                            <span className=" text-capitalize">Email</span>
                        </label>
                    </div>             
                    <input onChange={handleInputChange} id="email" name="email" type="email" className="form-control" defaultValue={userDetails.email}/>
                </div>
                <div className="form-group mb-3">   
                    <div>
                        <label htmlFor="phone">
                            <span className=" text-capitalize">Phone</span>
                        </label>
                    </div>             
                    <input onChange={handleInputChange} id="phone" name="phone" type="tel" className="form-control" defaultValue={userDetails.phone} />
                </div>
                <div className="form-group mb-3">   
                    <div>
                        <label htmlFor="name">
                            <span className=" text-capitalize">Name</span>
                        </label>
                    </div>             
                    <input onChange={handleInputChange} id="name" name="name" type="text" className="form-control" defaultValue={userDetails.name} />
                </div>
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
        </div>
        ) 
    }
        </div>
    );
};

export default ProfileForm;
