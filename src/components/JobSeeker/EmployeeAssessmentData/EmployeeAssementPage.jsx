import React from 'react'
import SearchAppBar from '../../Header/Header'
import ResponsiveDrawer from '../../SideMenu/SideMenu'

import './EmployeeAssessmentPage.css'
import EmployeeAssessmentTable from './EmployeeAssessmentTable'
import SecondTopBarAvailableAssessment from './EmployeeAssessmentSecondTopBar'

function EmployeeAssessmentPage() {
  return (
    <div >
        <SearchAppBar></SearchAppBar>
         <ResponsiveDrawer></ResponsiveDrawer>
         <div className='page-content'>
     <SecondTopBarAvailableAssessment/>
    <EmployeeAssessmentTable></EmployeeAssessmentTable>
     </div>

   
 </div>
  )
}

export default EmployeeAssessmentPage