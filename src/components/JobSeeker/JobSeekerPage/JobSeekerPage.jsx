import React from 'react'
import SecondTopBar from '../SecondTopBar/SecondTopBar'
import './JobSeekerPage.css'
import MyTable from '../Table/MyTable'

function JobSeekerPage() {
  return (
    <div >
      <div className='page-content'>
        <SecondTopBar></SecondTopBar>
        <MyTable></MyTable>
      </div>
 </div>
  )
}

export default JobSeekerPage