import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";


const ProfileForm = ({hideProfile}) => {
    const [userDetails, setUserDetails] = useState({});
    const [updatedDetails, setUpdatedDetails] = useState({});
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const authtoken = sessionStorage.getItem("auth-token");
    //     if (!authtoken) {
    //     navigate("/login");
    //     } else {
    //     fetchUserProfile();
    //     }
    // }, [navigate]);


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
            const user = await response.json();
                sessionStorage.setItem("name", user.name);
                sessionStorage.setItem("phone", user.phone);
                sessionStorage.setItem("email", user.email);
            setUserDetails(user);
            setUpdatedDetails(user);
        } 
        else {
            // Handle error case
            throw new Error("Failed to fetch user profile");
            }
        }
    } catch (error) {
        console.error(error);
        // Handle error case
    }
    };


    const handleEdit = () => {
        setEditMode(true);
        hideProfile(true)
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
                sessionStorage.setItem("name", updatedDetails.name);
                sessionStorage.setItem("phone", updatedDetails.phone);
                setUserDetails(updatedDetails);
                setEditMode(false);
                // Display success message to the user
                alert(`Profile Updated Successfully!`);
                navigate("/");
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
    {editMode ? 
        (<div className="mt-4 p-3">
            <form className="" onSubmit={handleSubmit}>
                <div className="form-group mb-3">   
                    <div>
                        <label htmlFor="email">
                            <span className=" text-capitalize">Email</span>
                        </label>
                    </div>             
                    <input onChange={handleInputChange} id="email" name="email" type="email" className="form-control" value={userDetails.email}/>
                </div>
                <div className="form-group mb-3">   
                    <div>
                        <label htmlFor="phone">
                            <span className=" text-capitalize">Phone</span>
                        </label>
                    </div>             
                    <input onChange={handleInputChange} id="phone" name="phone" type="tel" className="form-control" value={userDetails.phone} />
                </div>
                <div className="form-group mb-3">   
                    <div>
                        <label htmlFor="name">
                            <span className=" text-capitalize">Name</span>
                        </label>
                    </div>             
                    <input onChange={handleInputChange} id="name" name="name" type="text" className="form-control" value={userDetails.name} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
        ) : (
            <div className="profile-details">
                {/* <h1>Welcome, {userDetails.name}</h1>
                // implement code to display detail of phone and email like above */}
                <button onClick={handleEdit}>Edit</button>
            </div>
        )
    }
        </div>
    );
};

export default ProfileForm;
