import React, { useState } from 'react';
import TableRow from './TableRow/TableRow';
import { v4 as uuidv4 } from 'uuid';


const ReviewForm = ({avalableDocs}) => {
    const noOfDocs=avalableDocs;
    return (
    <div className='col-10 mx-auto mb-5'>
    <hr className='rounded'/>
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
                    {                   
                        noOfDocs.map((drAvailable,indx) =>{
                            const aptId= uuidv4(); 
                            const index=indx+1     
                            const {name,speciality} = drAvailable; 

                            return <TableRow key={aptId} sn={index} docsName={name} docsSpecs={speciality}  />
                        })
                    }
                </tbody>
            </table>
        </div>
</div>
  )
}

export default ReviewForm;