import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { departmentAndTopics } from '../../constants/constant';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { EnterNewDepartment } from './EnterNewComponent';
import {  StyledFormControl, StyledMenuItem } from '../StyledComponents/StyledAvailableAssessment';
import useAvailableAssessment from './assessmentcontext/availableassessmentContext';

export const SelectDepartment = () => {
  const {filterDepartment} = useAvailableAssessment()
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleDepartmentSelect = (event) => {
    setSelectedDepartment(event.target.value);
    filterDepartment(event.target.value)
  };

  
  return (
      <StyledFormControl>
        <InputLabel id="multiple-department-label">Select Department</InputLabel>
        <Select
          labelId="multiple-department-label"
          id="department"
          value={selectedDepartment}
          onChange={handleDepartmentSelect}
          input={<OutlinedInput label="Select Department" />}
          IconComponent={KeyboardArrowDownIcon}>
            <EnterNewDepartment/>
          {departmentAndTopics.map((d, index) => (
            <StyledMenuItem
              key={index}
              value={d.department}>
              {d.department}
            </StyledMenuItem>
          ))}
        </Select>
      </StyledFormControl>
  );
};
