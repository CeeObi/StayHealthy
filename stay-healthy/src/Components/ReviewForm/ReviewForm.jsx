import React, { useState } from 'react'
import GiveReviews from './GiveReviews';
import Popup from 'reactjs-popup';


const ReviewForm = () => {
const [showModal,setShowModal] = useState(false);


  return (<>
    <h1 className='m-5'>Reviews</h1>

<div className='mx-5'>
    <table className='table table-hover'>
        <thead className='fs-5 fw-bold bg-light text-center'>
            <tr className=''>
                <td>Serial Number</td>
                <td>Doctor Name</td>
                <td>Doctor Specialty</td>
                <td className=''>Provide Feedback</td>
                <td>Review Given</td>
            </tr>
        </thead>        
        <tbody className='mx-5 '>
                <tr className=''>
                    <td className='text-center'>1</td>
                    <td className='text-center'>Dr Liz</td>
                    <td className='text-center'>Dentist</td>
                <Popup trigger=
                {
                    <td className='my-auto text-wrap text-center '><div href="" className=' btn btn-primary px-5' onClick={()=>setShowModal(true)}>CLICK HERE</div></td>
                } position="center" modal open={showModal} onClose={() => setShowModal(false)}>
                    {(close) => (
                        <div className="doctorbg" style={{ height: '80vh', overflow: 'scroll' }}>
                            <GiveReviews />
                           
                            
                        </div>
                    )}
                </Popup>
                <td className='text-center px-1'><input disabled={false} className=' form-control px-1 border-0 shadow-none' type="text" /></td>
                </tr>

        </tbody>
    </table>
</div>



</>
  )
}




export default ReviewForm;