import React from 'react'
import './SecondTopBarAvailableAssessment.css'
import CreateAssessment from './CreateJobseekerAssessmentComponent';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';


function SecondTopBarAvailableAssessment() {
  const [showUnderline, setShowUnderline] = useState(false);
  const [showUnderline1, setShowUnderline1] = useState(true);
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked1, setIsClicked1] = useState(true);

  const navigate=useNavigate();
  const handleClick = () => {
    if(isClicked){
      setIsClicked1(!isClicked1)
    setIsClicked(!isClicked);
    navigate('/jobseeker')
    
    }  
    setShowUnderline1(false)
    setShowUnderline(true);
  };
  const handleClick1 = () => {
    if(!isClicked1){
      setIsClicked(!isClicked)
      setIsClicked1(!isClicked1);
      navigate('/assessmentdata')
    } 
    setShowUnderline(false)
    setShowUnderline1(true);
  };
  return (
  <Stack flexDirection={'row'}>
    <div id="second-top-bar">
      <div className='second-top-bar-list' >
        <button id="assessment-list" onClick={handleClick}  className={isClicked ? 'clicked' : ''}>Assessment list</button>
          {showUnderline && <div id="underline-blue"></div>}
        <button id="available-list" onClick={handleClick1} className={isClicked1 ? 'clicked' : ''}>Available Assessment</button>
          {showUnderline1 && <div id="underline-blue1"></div>}
      </div>
    </div>
    <div className='create-assessment'>
      <CreateAssessment/>
    </div>
  </Stack> 
  )
}
export default SecondTopBarAvailableAssessment

