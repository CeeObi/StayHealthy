import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
        <section class="vh-100 d-flex align-items-center" >
            <div class="mx-auto col-12 col-xs-10 col-sm-8 col-lg-6 col-xl-3 form-bg shadow px-3 px-sm-4 px-lg-5">
                <h2 class="text-black text-center font-bold text-3xl mt-5">Login</h2>
                <p class="text-center">
                    Are you a new member? <a to="/register" class="text-capitalize text-decoration-none"> Sign Up Here</a>
                </p>
                <form method="POST" class="mx-auto w-100">            
                    <div class="form-group mb-3">   
                        <div>
                            <label for="emailinput">
                                <span class=" text-capitalize">email</span>
                            </label>
                        </div>             
                        <input onChange={(e)=>setEmail(e.target.value)} id="emailinput" name="email" type="email" placeholder="Enter your email" class="form-control" required/>                    
                        {showerr && <div className="alert alert-danger" style={{ color: 'red' }}>{showerr}</div>}                        
                    </div>
                    <div class="form-group mb-3">   
                        <div>
                            <label for="passwordinput">
                                <span class=" text-capitalize">Password</span>
                            </label>
                        </div>             
                        <input onChange={(e)=>setPassword(e.target.value)} id="passwordinput" name="password" type="password" placeholder="Enter your password" class="form-control" required/>
                    </div>
                    
                    <div class="mt-4">
                        <input class="btn btn-primary w-100 rounded-0 mb-3 " type="submit" value="Login"/>                       
                    </div>  
                    <div class="">
                        <input class="btn btn-danger w-100 rounded-0 mb-3 " type="reset" value="Reset"/>                   
                    </div>               
                </form>
                <p class="text-center mb-5">
                    Forgot your password? 
                </p>
            </div>
        </section>
</div>
  )
}


export default Login;