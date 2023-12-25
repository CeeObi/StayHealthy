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
        <tr className='border text-wrap'>
            <td className='text-center pt-3 d-none d-md-table-cell'>{sn}</td>
            <td className='text-center pt-3 px-1 px-sm-2'>{docsName} <p className='d-md-none ps-0 ms-0'>({docsSpecs})</p></td>
            <td className='text-center pt-3 d-none d-md-table-cell  text-wrap'>{docsSpecs}</td>
            {disableReview?
                <td className='my-auto text-wrap text-center border-0 '><div className=' btn btn-primary btn-sm disabled px-2 px-lg-5 ' >CLICK HERE</div></td>
            :
                <Popup trigger=
                {
                    <td className='my-auto text-wrap text-center '><div className=' btn btn-primary btn-sm px-2 px-lg-5  mt-3 mt-md-auto' onClick={()=>setShowModal(true)}>CLICK HERE</div></td>
                } position="center" modal open={showModal} onClose={() => setShowModal(false)}>
                    {(close) => (
                        <div className="" style={{ height: '65vh', overflow: 'scroll',backgroundColor: "#e8eef6" }}>
                            <GiveReviews handleReviewSubmit={handleReviewSubmit} />
                        </div>
                    )}
                </Popup>
            }
            <td className='text-center px-1  pt-3'>{ratingMessage.review}</td>
            <td className='text-center px-1  pt-3 pt-3  d-none d-md-table-cell'>{ratingMessage.rating}</td>
        </tr>
    )
}


export default TableRow;