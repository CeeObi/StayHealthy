import React, { useState } from 'react'


const GiveReviews = ({handleReviewSubmit}) => {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [name, setName]=useState("")
  const [rating, setRating]=useState("⭐")
  const [review, setReview]=useState("")
  
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleGiveReview= (event)=>{
    event.preventDefault();   
    if (name.length && review.length && rating.length > 0) {
        setShowWarning(false);
        setSubmittedMessage(review);  
        handleReviewSubmit(event)
    } else {
        setShowWarning(true);
    }
    setName('');
    setReview('');
    setRating('⭐');
  };

  return (
    <div className='p-4'>
      
      {!showForm ? (<>
        <h2 className='text-center'>Please Complete Review Form</h2>
        <button onClick={handleButtonClick}>Open Form</button></>
      ) : (
        <form onSubmit={handleGiveReview} method='POST'>
                <h2 className='text-center'>Provide Your Feedback</h2>
                {showWarning && <p className="text-warning fs-3">Please fill out all fields.</p>}
                <div className=''>
                    <label htmlFor="name">Name:</label>
                    <input className='form-control' type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className=''>
                    <label htmlFor="review">Review:</label>
                    <textarea rows="3" className='form-control' id="review" name="review" value={review} onChange={(e)=>setReview(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <select defaultValue="⭐" id='rating' class="form-select form-control" aria-label="Default select example" onChange={(e)=>setRating(e.target.value)}>
                        {/* <option selected>Please select rating</option> */}
                        <option value="⭐">⭐</option>
                        <option value="⭐⭐">⭐⭐</option>
                        <option value="⭐⭐⭐">⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
                
                <input className="btn btn-primary w-100 rounded-0 mb-3 btn-lg mt-3 navblinks" type="submit" value="Submit"/> 
        </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
