import React, { useState } from 'react'
import GiveReviews from './GiveReviews';
import Popup from 'reactjs-popup';


const ReviewForm = () => {
    const [showModal,setShowModal] = useState(false);
    const [ratingMessage,setRatingMessage] = useState({})
    const [disableReview,setDisableReview] = useState(false)
    const handleReviewSubmit = (eventReviewData) => {
        const {name,review,rating} = eventReviewData.target
        setRatingMessage({review:review.value, rating:rating.value})
        setDisableReview(true)
        eventReviewData.preventDefault();
    };
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
                        <td>Rating</td>
                    </tr>
                </thead>        
                <tbody className='mx-5 '>
                        <tr className=''>
                            <td className='text-center pt-3'>1</td>
                            <td className='text-center  pt-3'>Dr Liz</td>
                            <td className='text-center  pt-3'>Dentist</td>
                            
                        {disableReview?
                            <td className='my-auto text-wrap text-center '><div className=' btn btn-primary disabled px-5' >CLICK HERE</div></td>
                        :
                            <Popup trigger=
                            {
                                <td className='my-auto text-wrap text-center '><div className=' btn btn-primary px-5' onClick={()=>setShowModal(true)}>CLICK HERE</div></td>
                            } position="center" modal open={showModal} onClose={() => setShowModal(false)}>
                                {(close) => (
                                    <div className="" style={{ height: '65vh', overflow: 'scroll',backgroundColor: "#e8eef6" }}>
                                        <GiveReviews handleReviewSubmit={handleReviewSubmit} />
                                    
                                        
                                    </div>
                                )}
                            </Popup>
                        }
                        <td className='text-center px-1  pt-3'>{ratingMessage.review}</td>
                        <td className='text-center px-1  pt-3 pt-3'>{ratingMessage.rating}</td>
                        </tr>

                </tbody>
            </table>
        </div>
</>
  )
}




export default ReviewForm;