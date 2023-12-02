import React from 'react'

const AppointmentForm = () => {
    const handleFormSubmit = () =>{

    }



  return (
    <section className="vh-100 d-flex align-items-center" >
    <div className="mx-auto col-12 col-xs-10 col-sm-8 col-lg-6 col-xl-4 form-bg shadow px-3 px-sm-4 px-lg-5">
        <h2 className="text-black text-center font-bold text-3xl mt-5">Talk to a doctor</h2>
       
        <form method="POST" className="mx-auto w-100" onSubmit={handleFormSubmit}>            
            <div className="form-group mb-3">   
                <div>
                    <label htmlFor="emailinput">
                        <span className=" text-capitalize">Name</span>
                    </label>
                </div>             
                <input onChange={(e)=>setEmail(e.target.value)} id="name" name="name" type="name" placeholder="Enter your name here" className="form-control" required/>                    
                {/* {showerr && <div className="alert alert-danger" style={{ color: 'red' }}>{showerr}</div>}                         */}
            </div>
            <div className="form-group mb-3">   
                <div>
                    <label htmlFor="passwordinput">
                        <span className=" text-capitalize">Password</span>
                    </label>
                </div>             
                <input onChange={(e)=>setPassword(e.target.value)} id="passwordinput" name="pass" type="password" placeholder="Enter your password" className="form-control" required/>
            </div>
            
            <div className="mt-4">
                <input className="btn btn-primary w-100 rounded-0 mb-3 " type="submit" value="BOOK NOW"/>                       
            </div>           
        </form>
    </div>
</section>
  )
}

export default AppointmentForm