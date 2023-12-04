import React, { useState } from 'react'


const GiveReviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [name, setName]=useState("")
  const [rating, setRating]=useState("⭐")
  const [review, setReview]=useState("")
  
  const handleButtonClick = () => {
    setShowForm(true);
  };


  const handleSubmit = (e) => {
    e.preventDefault();   
    if (name.length && review.length && rating.length > 0) {
        setShowWarning(false);
        setSubmittedMessage(review);  
    } else {
        setShowWarning(true);
    }
    setName('');
    setReview('');
    setRating('⭐');
  };

  return (
    <div className='p-4'>
      <h2>Form with Message</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
                <h2>Give Your Feedback</h2>
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
                    <select id='rating' class="form-select form-control" aria-label="Default select example" onChange={(e)=>setRating(e.target.value)}>
                        {/* <option selected>Please select rating</option> */}
                        <option selected value="⭐">⭐</option>
                        <option value="⭐⭐">⭐⭐</option>
                        <option value="⭐⭐⭐">⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
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
