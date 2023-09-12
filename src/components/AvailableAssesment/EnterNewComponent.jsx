import React, { useState } from 'react'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { StyledDialogTitle, StyledAddIcon, StyledButton, StyledCancelButton, StyledTextField, StyledSubmitButton, StyledDialog } from '../StyledComponents/StyledAvailableAssessment';
import { SelectDepartment } from './SelectDepartment';
const EnterNewDepartment = () => {
    const [departmentModal, setDepartmentModal] = useState(false)
    const handleDepartmentClose = () => {
        setDepartmentModal(false)
    } 
  return (
    <div>
        <StyledButton variant={'outlined'} startIcon={<StyledAddIcon/>} onClick={() => setDepartmentModal(true)}>Enter new department</StyledButton>
        <StyledDialog open={departmentModal} onClose={handleDepartmentClose}>
          <StyledDialogTitle>
              Add Departments
          </StyledDialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <StyledTextField
              autoFocus
              id="department"
              label="Enter Department to be added"
              type="text"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <StyledCancelButton onClick={handleDepartmentClose}>Cancel</StyledCancelButton>
            <StyledSubmitButton onClick={handleDepartmentClose}>Submit</StyledSubmitButton>
          </DialogActions>
      </StyledDialog>
    </div>
  )
}

const EnterNewTopic = () => {
  const [departmentModal, setDepartmentModal] = useState(false)
  const handleDepartmentClose = () => {
      setDepartmentModal(false)
  } 
return (
  <div>
      <StyledButton variant={'outlined'} startIcon={<StyledAddIcon/>} onClick={() => setDepartmentModal(true)}>Enter new topic</StyledButton>
      <StyledDialog open={departmentModal} onClose={handleDepartmentClose}>
        <StyledDialogTitle>
            Add Topics
        </StyledDialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <SelectDepartment/>
          <StyledTextField
            id="topic"
            label="Enter Topics to be added"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <StyledCancelButton onClick={handleDepartmentClose}>Cancel</StyledCancelButton>
          <StyledSubmitButton onClick={handleDepartmentClose}>Submit</StyledSubmitButton>
        </DialogActions>
    </StyledDialog>
  </div>
)
}

export {EnterNewDepartment, EnterNewTopic}
