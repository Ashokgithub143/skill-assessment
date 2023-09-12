import React from 'react'
import './SecondTopBarAvailableAssessment.css'

import { useState } from 'react';
import { plussvg } from '../../constants/JobSeekerConstant';
import { useNavigate } from 'react-router-dom';


function SecondTopBarEmployeeAssessment() {
  const [showUnderline, setShowUnderline] = useState(false);
  const [showUnderline1, setShowUnderline1] = useState(true);
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked1, setIsClicked1] = useState(true);

  const navigate=useNavigate();
  const handleClick = () => {
    if(isClicked){
      setIsClicked1(!isClicked1)
    setIsClicked(!isClicked);
    navigate('/assessmentdata')
    
    }  
    setShowUnderline1(false)
    setShowUnderline(true);
  };
  const handleClick1 = () => {
    if(!isClicked1){
      setIsClicked(!isClicked)
      setIsClicked1(!isClicked1);
      navigate('/')
    } 
    setShowUnderline(false)
    setShowUnderline1(true);
  };
  return (
  <>
<div id="second-top-bar">
  <div className='second-top-bar-list' >
<a id="assessment-list" onClick={handleClick}  className={isClicked ? 'clicked' : ''}>Assessment list</a>
      {showUnderline && <div id="underline-blue"></div>}
      <a id="available-list" onClick={handleClick1} className={isClicked1 ? 'clicked' : ''}>Available Assessment</a>
      {showUnderline1 && <div id="underline-blue1"></div>}
      </div>
      <div>
 <div className='sort-create-button' >
  <button
    id="create-button"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#j-offcanvas"
  >
   <div id="svg-container-button" 
                dangerouslySetInnerHTML={{ __html: plussvg }}
              >
              </div>
              <h3 className='create-Assessment'  id="create-assessment">
      Create Assessment
    </h3>              
  </button>
  <div className='sort-button-component'>
  </div>
</div>

   
  
  
    </div>
  </div>

  </> 
  )
}
export default SecondTopBarEmployeeAssessment

