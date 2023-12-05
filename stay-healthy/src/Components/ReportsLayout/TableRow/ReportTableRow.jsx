import React from 'react'
import patientReport from "../../../utils/public/patient_report.pdf";


const ReportTableRow = ({sn,docsName,docsSpecs}) => {
    
    

    return (
        <tr className=''>
            <td className='text-center pt-3'>{sn}</td>
            <td className='text-center  pt-3'>{docsName}</td>
            <td className='text-center  pt-3'>{docsSpecs}</td>
            <td className='my-auto text-wrap text-center '><a href={patientReport}  target="_blank" className=' btn btn-primary px-5'>View Report</a></td>
            <td className='my-auto text-wrap text-center '><a href={patientReport} className=' btn btn-primary px-5' download>Download Report</a></td>
        </tr>
    )
}


export default ReportTableRow;