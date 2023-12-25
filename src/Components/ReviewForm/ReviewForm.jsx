import React, { useState } from 'react';
import TableRow from './TableRow/TableRow';
import { v4 as uuidv4 } from 'uuid';


const ReviewForm = ({avalableDocs}) => {
    const noOfDocs=avalableDocs;
    return (
    <div className='px-1 px-sm-3 col-12 col-lg-10 mx-auto mb-5'>
        <hr className='rounded'/>
        <h1 className='my-5'>Reviews</h1>
        <div className='mx-auto row-cols-1'>
            <table className='table table-hover mx-auto'>
                <thead className='fs-5 fw-bold bg-light text-center border'>
                    <tr className=''>
                        <td className=' d-none d-md-block border-0'>Serial Number</td>
                        <td className='border-0'>Doctor Name</td>
                        <td className='d-none d-md-block border-0'>Doctor Specialty</td>
                        <td className='border-0'>Provide Feedback</td>
                        <td className='border-0'>Review Given</td>
                        <td className=' d-none d-md-block border-0'>Rating</td>
                    </tr>
                </thead>        
                <tbody className='mx-auto '>   
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