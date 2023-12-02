import React, { useState } from 'react'

const AppointmentForm = ({handleBooking}) => {
    // const handleFormSubmit = () =>{

    // }

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [date,setDate] = useState("")
    const [time,setTime] = useState("00:00")



  return (
    <section className=" d-flex align-items-center py-0 my-3 w-100 " >
                <div className="mx-auto form-bg shadow px-3 px-sm-4 px-lg-5 mt-0 pt-0" style={{width: "60%"}} >
                    <h2 className="text-black text-center font-bold text-3xl pt-4 ">Talk to a doctor</h2>                
                    <form method="POST" className="mx-auto w-100" onSubmit={(event) => {return handleBooking(event)}} >            
                        <div className="form-group mb-3">   
                            <div>
                                <label htmlFor="nameinput">
                                    <span className=" text-capitalize">Name:</span>
                                </label>
                            </div>             
                            <input value={name} onChange={(e)=>setName(e.target.value)} id="name" name="name" type="text" placeholder="Enter your name here" className="form-control" required/>                    
                        </div>
                        <div className="form-group mb-3">   
                            <div>
                                <label htmlFor="phoneinput">
                                    <span className=" text-capitalize">Phone Number:</span>
                                </label>
                            </div>             
                            <input value={phone} onChange={(e)=>setPhone(e.target.value)} id="phone" name="phone" type="number" placeholder="Enter your phone number here" className="form-control" required/>                    
                        </div>
                        <div className="form-group mb-3">   
                            <div>
                                <label htmlFor="dateinput">
                                    <span className=" text-capitalize">Date:</span>
                                </label>
                            </div>             
                            <input value={date} onChange={(e)=>setDate(e.target.value)} id="date" name="date" type="date" placeholder="Select your date" className="form-control" required/>                    
                        </div>
                        <div className="form-group mb-3">   
                            <div>
                                <label htmlFor="timeinput">
                                    <span className=" text-capitalize">Time:</span>
                                </label>
                            </div>             
                            <input value={time} onChange={(e)=>{
                            console.log(e.target.value);setTime(e.target.value)}} id="time" name="time" type="time" placeholder="Select your time" className="form-control w-50" required/>                    
                        </div>
                        
                        
                        <div className="mt-4 ">
                            <input className="btn btn-primary w-100 rounded-0 mb-3 btn-lg navblinks" type="submit" value="BOOK NOW"/>                       
                        </div>           
                    </form>
                </div>

</section>
  )
}

export default AppointmentForm