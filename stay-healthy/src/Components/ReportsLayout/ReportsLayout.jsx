import React from 'react'
import ReportTableRow from './TableRow/ReportTableRow';



const ReportsLayout = ({avalableDocs}) => {
  return (
    <div className='col-10 mx-auto mb-5'>
    <hr className='rounded'/>
        <h1 className='m-5'>Reports</h1>
        <div className='mx-5'>
            <table className='table table-hover'>
                <thead className='fs-5 fw-bold bg-light text-center'>
                    <tr className=''>
                        <td>Serial Number</td>
                        <td>Doctor Name</td>
                        <td>Doctor Specialty</td>
                        <td className=''>View Report</td>
                        <td>Download Report</td>
                    </tr>
                </thead>        
                <tbody className='mx-5 '>  
                <ReportTableRow key="1" sn="1" docsName="Dr Joe Don" docsSpecs="Dentist"  /> 
                <ReportTableRow key="2" sn="2" docsName="Dr Will Smith" docsSpecs="Cardiology"  /> 
                    {/* {                   
                        noOfDocs.map((drAvailable,indx) =>{
                            const aptId= uuidv4(); 
                            const index=indx+1     
                            const {name,speciality} = drAvailable; 

                            return <TableRow key={aptId} sn={index} docsName={name} docsSpecs={speciality}  />
                        })
                    } */}
                </tbody>
            </table>
        </div>
</div>
  )
}







export default ReportsLayout