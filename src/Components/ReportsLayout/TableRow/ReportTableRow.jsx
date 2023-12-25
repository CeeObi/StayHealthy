import React from 'react'
import patientReport from "../../../utils/public/patient_report.pdf";


const ReportTableRow = ({sn,docsName,docsSpecs}) => {
    return (
        <tr className=''>
            <td className='text-center pt-3 d-none d-md-table-cell'>{sn}</td>
            <td className='text-center '>{docsName}</td>
            <td className='text-center '>{docsSpecs}</td>
            <td className='my-auto text-wrap text-center'><a href={patientReport}  target="_blank" className=' btn btn-outline-primary btn-sm px-3 '>View Report</a></td>
            <td className='my-auto text-wrap text-center '><a href={patientReport} className=' btn btn-primary px-3 btn-sm' download>Download Report</a></td>
        </tr>
    )
}

export default ReportTableRow;