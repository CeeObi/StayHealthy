import React from 'react'
import "./Sign_Up.css";

const Sign_Up = () => {
  return (
    <div>
    <section class="vh-100 d-flex align-items-center" >
            <div class="mx-auto col-12 col-xs-10 col-sm-8 col-lg-6 col-xl-3 form-bg shadow px-3 px-sm-4 px-lg-5">
                <h2 class="text-black text-center font-bold text-3xl mt-5">Sign Up</h2>
                <p class="text-center">
                    Aready a member? <a to="/register" class="text-capitalize text-decoration-none">Login</a>
                </p>
                <form method="POST" class="mx-auto w-100 mb-5">   
                    
                    <div class="form-group mb-3">   
                        <label for="roleinput">Role</label>
                        <select class="form-control" id="roleinput">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>

                    
                    <div class="form-group mb-3">   
                        <div>
                            <label for="nameinput">
                                <span class=" text-capitalize">name</span>
                            </label>
                        </div>             
                        <input id="nameinput" name="name" type="text" placeholder="Enter your name" class="form-control" />                    
                    </div>
                    <div class="form-group mb-3">   
                        <div>
                            <label for="phoneinput">
                                <span class=" text-capitalize">Phone</span>
                            </label>
                        </div>             
                        <input id="phoneinput" name="phone" type="number" placeholder="Enter your phone number" class="form-control" />                    
                    </div>
                    <div class="form-group mb-3">   
                        <div>
                            <label for="emailinput">
                                <span class=" text-capitalize">email</span>
                            </label>
                        </div>             
                        <input id="emailinput" name="email" type="email" placeholder="Enter your email" class="form-control" />                    
                    </div>
                    <div class="form-group mb-3">   
                        <div>
                            <label for="passwordinput">
                                <span class=" text-capitalize">Password</span>
                            </label>
                        </div>             
                        <input id="passwordinput" name="password" type="password" placeholder="Enter your password" class="form-control" />
                    </div>
                    
                    <div class="mt-4">
                        <input class="btn btn-primary w-100 rounded-0 mb-3 " type="submit" value="Submit" />                       
                    </div>  
                    <div class="">
                        <input class="btn btn-danger w-100 rounded-0 " type="reset" value="Reset" />                 
                    </div>               
                </form>
        </div>
    </section>  
</div>
  )
}

export default Sign_Up