import React, { useState } from 'react'
import "./Sign_Up.css";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {              
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Access-Control-Allow-Headers": Content-Type, Authorization

            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });        
        const json = await response.json();      
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.error && (json.error.length<=1) ) {
                for (const error of json.error) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };
    
  return (
    <div className='px-3'>
    <section className="vh-100 d-flex align-items-center " >
            <div className="mx-auto col-9 col-xs-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 form-bg shadow px-3 px-sm-4 px-lg-5">
                <h2 className="text-black text-center font-bold text-3xl mt-5">Sign Up</h2>
                <p className="text-center">
                    Aready a member? <Link to="/login" className="text-capitalize text-decoration-none text-primary">Login</Link>
                </p>
                <form method="POST" className="mx-auto w-100 mb-5" onSubmit={register}>   
                    
                    <div className="form-group mb-3">   
                        <label htmlFor="roleinput">Role</label>
                        <select className="form-control" id="roleinput" >
                            <option>Doctor</option>
                            <option>Patient</option>
                        </select>
                    </div>                    
                    <div className="form-group mb-3">   
                        <div>
                            <label htmlFor="nameinput">
                                <span className=" text-capitalize">name</span>
                            </label>
                        </div>             
                        <input onChange={(e)=>setName(e.target.value)} id="nameinput" name="name" type="text" placeholder="Enter your name" className="form-control" required value={name}/>                    
                    </div>
                    <div className="form-group mb-3">   
                        <div>
                            <label htmlFor="phoneinput">
                                <span className=" text-capitalize">Phone</span>
                            </label>
                        </div>             
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} id="phoneinput" name="phone" type="number" placeholder="Enter your phone number" className="form-control" required pattern='\d{10}' title='Please input 10 digits' minLength="10"/>                    
                    </div>
                    <div className="form-group mb-3">   
                        <div>
                            <label htmlFor="emailinput">
                                <span className=" text-capitalize">email</span>
                            </label>
                        </div>             
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} id="emailinput" name="email" type="email" placeholder="Enter your email" className="form-control" required/>                    
                    </div>
                    <div className="form-group mb-3">   
                        <div>
                            <label htmlFor="passwordinput">
                                <span className=" text-capitalize" required>Password</span>
                            </label>
                        </div>             
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} id="passwordinput" name="password" type="password" placeholder="Enter your password" className="form-control" required/>
                    </div>
                    {showerr && <div className="alert alert-danger" style={{ color: 'red' }}>{showerr}</div>}  
                    <div className="mt-4">
                        <input className="btn btn-primary w-100 rounded-0 mb-3 " type="submit" value="Submit" />                       
                    </div>  
                    <div className="">
                        <input className="btn btn-danger w-100 rounded-0 " type="reset" value="Reset" />                 
                    </div>               
                </form>
        </div>
    </section>  
</div>
  )
}

export default Sign_Up