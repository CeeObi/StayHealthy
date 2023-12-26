import React, { useEffect } from 'react'
import ReportTableRow from './TableRow/ReportTableRow';
import { useNavigate } from "react-router-dom";

const ReportsLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
        navigate("/login");
        } 
    }, [navigate]);
    
  return (
    <div className='px-1 px-sm-3 col-12 col-lg-10 mx-auto mb-5'>
        <h1 className='my-5'>Reports</h1>
        <div className='mx-auto row-cols-1'>
            <table className='table table-hover mx-auto'>
                <thead className='fs-5 fw-bold navb text-center'>
                    <tr className=''>
                        <td className=' d-none d-md-block border-0'>Serial Number</td>
                        <td className='fntsz'>Doctor Name</td>
                        <td className='fntsz'>Doctor Specialty</td>
                        <td className='fntsz'>View Report</td>
                        <td className='fntsz'>Download Report</td>
                    </tr>
                </thead>        
                <tbody className='mx-5 '>  
                <ReportTableRow key="1" sn="1" docsName="Dr Joe Don" docsSpecs="Dentist"  /> 
                <ReportTableRow key="2" sn="2" docsName="Dr Will Smith" docsSpecs="Cardiology"  />                    
                </tbody>
            </table>
        </div>
</div>
  )
}



export default ReportsLayout