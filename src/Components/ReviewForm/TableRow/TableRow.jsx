import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import GiveReviews from '../GiveReview/GiveReviews';


const TableRow = ({sn,docsName,docsSpecs}) => {
    const [ratingMessage,setRatingMessage] = useState({})
    const [disableReview,setDisableReview] = useState(false)
    const handleReviewSubmit = (eventReviewData) => {
        const {review,rating} = eventReviewData.target
        setRatingMessage({review:review.value, rating:rating.value})
        setDisableReview(true)
        eventReviewData.preventDefault();
    };    
    const [showModal,setShowModal] = useState(false);

    return (
        <tr className=''>
            <td className='text-center pt-3 d-none d-md-block'>{sn}</td>
            <td className='text-center  pt-3'>{docsName} <p className='d-md-none'>({docsSpecs})</p></td>
            <td className='text-center  pt-3 d-none d-md-block'>{docsSpecs}</td>
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
            <td className='text-center px-1  pt-3 pt-3  d-none d-md-block'>{ratingMessage.rating}</td>
        </tr>
    )
}


export default TableRow;