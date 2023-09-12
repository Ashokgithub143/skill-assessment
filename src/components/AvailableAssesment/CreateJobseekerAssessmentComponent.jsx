import React, {useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import '../../styles/CreateAssessmentStyles.css'
import {Autocomplete, TextField} from '@mui/material';
import { jobseekerEmail } from '../../constants/constant';
import { departmentAndTopics } from '../../constants/constant';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import SelectTopic from './SelectTopic';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StyledAddIconAssessment, StyledAssessmentTitle, StyledDialogAssessment, StyledStack,StyledCancelIcon } from '../StyledComponents/StyledAvailableAssessment';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction={'left'} ref={ref} {...props} />;
});

const CreateAssessment = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant={'contained'} onClick={handleClickOpen} id='create-assessment-button' startIcon={<StyledAddIconAssessment/>}>
        Create Assessment
      </Button>
      <StyledDialogAssessment
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}>
          <div className='jobseeker-assessment-port'>
            <StyledAssessmentTitle>
              <h4 className='create-assessment-title'>
                Create Jobseeker Assessment
              </h4>
              <IconButton
                onClick={handleClose}
                >
                <StyledCancelIcon />
              </IconButton>
            </StyledAssessmentTitle>
            <div className='asssessment-form'>
              <Autocomplete
                  multiple
                  className="jobseeker-mail-select"
                  options={jobseekerEmail.map((mail) => mail)}
                  renderInput={(params) => <TextField {...params} label="Enter Jobseeker Email Id"/>}/>
              <h5 className='assessment-details-label'>
                Assessment Details
              </h5>
              <TextField className='assessment-id-text' label='Add Assessment Id'></TextField>
              <Autocomplete
                  options={departmentAndTopics.map((d) => d.department)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Department"
                      InputProps={{
                        ...params.InputProps,
                        type: 'Select Department',
                      }}
                    />
                  )}
                  clearIcon={<BackspaceIcon/>}
                  popupIcon={<ExpandMoreIcon/>}
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="Beginner" control={<Radio />} label=
                    {
                      <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-bar-chart" viewBox="0 0 16 16">
                        <rect x="0" y="9" width="3" height="3" fill="#0C1116" />
                        <rect x="5" y="6" width="3" height="6" fill="#A8B0B9" />
                        <rect x="10" y="3" width="3" height="9" fill="#A8B0B9" />
                      </svg>
                      Beginner
                      </>
                    } />
                    <FormControlLabel value="Intermediate" control={<Radio />} label=
                    {
                      <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-bar-chart" viewBox="0 0 16 16">
                        <rect x="0" y="9" width="3" height="3" fill="#0C1116" />
                        <rect x="5" y="6" width="3" height="6" fill="#0C1116" />
                        <rect x="10" y="3" width="3" height="9" fill="#A8B0B9" />
                      </svg>
                      Intermediate
                      </>
                    }/>
                    <FormControlLabel value="Advanced" control={<Radio />} label={
                      <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-bar-chart" viewBox="0 0 16 16">
                        <rect x="0" y="9" width="3" height="3" fill="#0C1116" />
                        <rect x="5" y="6" width="3" height="6" fill="#0C1116" />
                        <rect x="10" y="3" width="3" height="9" fill="#0C1116" />
                      </svg>
                      Advanced
                      </>
                    } />
                  </RadioGroup>
                </FormControl>
                <SelectTopic/>
                <StyledStack>
                  <TextField label='No.of Questions' className='no-of-questions'></TextField>
                  <div className='date-of-completion'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                          label="Date of Completion"
                          // value={value}
                          // onChange={(newValue) => setValue(newValue)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </StyledStack>
                <TextField
                  label="Add Description"
                  multiline
                  rows={6}
                  className='add-description'
                />
                <StyledStack className='button-container'>
                  <Button className='cancel-btn'>Cancel</Button>
                  <Button variant='outlined' className='send-mail-btn'>Send Mail</Button>
                </StyledStack>
            </div>
          </div>
      </StyledDialogAssessment>
    </div>
  )
}

export default CreateAssessment

