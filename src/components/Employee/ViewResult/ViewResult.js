import React from 'react'
import './ViewResult.css'
import {closeSvg , employeeDetailsSvg,assessmentDetailsSvg ,resultSvg,timerSvg} from '../../../constants/JobSeekerConstant' 
import ProgressBarComponent from './Progress';
import ProgressBarWithEllipse from './LinearProgressBar';
import {viewResultData,viewResultData1} from '../../../constants/JobSeekerConstant' 
function ViewResult() {
  return (
    <div className='view-result-modal'>
    <div className='view-result-top'>
               <div 
                className="svg-container"
                dangerouslySetInnerHTML={{ __html: closeSvg }}
              >
    </div>
    <span className='assessment-result'>Assessment Result   </span>
    <div className='modal-border-line'> </div>

<div className='modal-top-data'>
    <div className='modal-top-data-first-part'> 
<div 
                className="svg-container1"
                dangerouslySetInnerHTML={{ __html: employeeDetailsSvg }}
              ></div>

              <span className='employee-details'>Employee Details</span>
              <span className='emp-name'>Deen Mohammed</span>
    <table className='custom-table'>   
      <tbody>
        {viewResultData.map((row) => (
          <tr key={row.label}>
            <td className='table-heading'>{row.label}</td>
            <td className='table-data'>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className='modal-top-data-second-part'> 
<div 
                className="svg-container1"
                dangerouslySetInnerHTML={{ __html: assessmentDetailsSvg }}
              ></div>
              <span className='assessment-details'>Assessment Details</span>
              <span className='assessment-name'>ASS021_UXI_005</span>
    <table className='custom-table1'>   
      <tbody>
        {viewResultData1.map((row) => (
          <tr key={row.label}>
            <td className='table-heading'>{row.label}</td>
            <td className='table-data'>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
</div>
    </div>
    <div className='view-result-bottom'>
        <div className='result'>
          <span className='result-header'>Result</span>
          <div 
                className="svg-container1"
                dangerouslySetInnerHTML={{ __html: resultSvg }}
              ></div>
             <span className='result-second-header'>Assessment Passed</span>
              <span className='result-header-data'>
                Correct Answer
              </span>
              <span className='result-bold-data1'>
                  27
              </span>
              <span className='result-data1'>
                  /30
              </span><br></br>
              <span className='result-header-data1'>
                Wrong Answer
              </span><br></br>             
              <span className='result-bold-data2'>
                  02
              </span>
              <span className='result-data2'>
                  /30
              </span><br></br>
              <span className='result-header-data2'>
                Skipped Answer
              </span><br></br>
              <span className='result-bold-data3'>
                  01
              </span>
              <span className='result-data3'>
                  /30
              </span>
              <ProgressBarComponent></ProgressBarComponent>
        </div>
        <div className='timer'>
        <span className='result-header'>Timer</span>
        <div 
                className="svg-container1"
                dangerouslySetInnerHTML={{ __html: timerSvg }}
              ></div>

<div className='timer-Time-Data'>
  <div className='timer-Total-Time'>
<span className='timer-second-header'>Total Time</span> 
</div>
<span className='timer-bold-data1'>
                  00:00:12 &nbsp;&nbsp;   &nbsp; /  
              </span>
              <span className='timer-data1'>
                  00:27:21
              </span>
              </div>        
              <div className='linear-progressbar'>
              <ProgressBarWithEllipse  progress={5}></ProgressBarWithEllipse>
              </div>
<div className='timer-Data-Container'>
               <div>
                <div className='timer-Start-Sub-Heading'>
                <span className='timer-light'>start time</span>&nbsp;
                <span  id='time' className='timer-dark'>05:35pm</span>
                </div>
                <div className='timer-Question-Sub-Heading'>
                <span className='timer-light' >Question</span>&nbsp;&nbsp;
                <span className='timer-dark' >01</span>
                </div>
              </div> <br></br>
              <div  style={{position:'relative',bottom:'10px'}}>
              <span className='timer-light'>End time</span>
                <span className='timer-dark'style={{left:'30px'}}>06:02pm</span>
                <div className='timer-Sub-Heading'>
                <span className='timer-light'>Completion on</span>&nbsp;&nbsp;   
                <span className='timer-dark' >26-07-2022</span>
                </div>
              </div> 
              </div>
        </div>
    </div>
    </div>
  )
}
export default ViewResult