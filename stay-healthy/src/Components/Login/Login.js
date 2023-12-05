import React, { useState, useEffect } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


const Login = () => {
    
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [showerr, setShowerr] = useState('');


  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/")
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: name,
        email:email,
        password: password,
      }),
    });
    
    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);        
      sessionStorage.setItem('email', email);
      navigate('/');
      window.location.reload()
      console.log(json)

    } else {
      if (json.error) {        
        for (const error of json.error) {
            console.log(json.error )
            setShowerr(json.error);
        }
      } else {
        console.log(json.error )
        setShowerr(json.error);
      }
    }
  };


  return (
    <div>
        <section className="vh-100 d-flex align-items-center" >
            <div className="mx-auto col-12 col-xs-10 col-sm-8 col-lg-6 col-xl-4 form-bg shadow px-3 px-sm-4 px-lg-5">
                <h2 className="text-black text-center font-bold text-3xl mt-5">Login</h2>
                <p className="text-center">
                    Are you a new member? <Link to="/register" className="text-capitalize text-decoration-none text-primary"> Sign Up Here</Link>
                </p>
                <form method="POST" className="mx-auto w-100" onSubmit={handleLogin}>            
                    <div className="form-group mb-3">   
                        <div>
                            <label htmlFor="emailinput">
                                <span className=" text-capitalize">email</span>
                            </label>
                        </div>             
                        <input onChange={(e)=>setEmail(e.target.value)} id="emailinput" name="email" type="email" placeholder="Enter your email" className="form-control" required/>                    
                        {showerr && <div className="alert alert-danger" style={{ color: 'red' }}>{showerr}</div>}                        
                    </div>
                    <div className="form-group mb-3">   
                        <div>
                            <label htmlFor="passwordinput">
                                <span className=" text-capitalize">Password</span>
                            </label>
                        </div>             
                        <input onChange={(e)=>setPassword(e.target.value)} id="passwordinput" name="password" type="password" placeholder="Enter your password" className="form-control" required/>
                    </div>
                    
                    <div className="mt-4">
                        <input className="btn btn-primary w-100 rounded-0 mb-3 " type="submit" value="Login"/>                       
                    </div>  
                    <div className="">
                        <input className="btn btn-danger w-100 rounded-0 mb-3 " type="reset" value="Reset"/>                   
                    </div>               
                </form>
                <p className="text-center mb-5">
                    Forgot your password? 
                </p>
            </div>
        </section>
</div>
  )
}


export default Login;