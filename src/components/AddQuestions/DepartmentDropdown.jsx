import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DepartmentDropdown({ onSelect }) {
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedDepartment(selectedValue);
  };

  return (
    
    <div>
      <FormControl
        sx={{
          width: '638%',
          border: 'none',
          backgroundColor:'white',
        }}
      >
        <Select
          value={selectedDepartment}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'Manrope': 'Without label'}}
          sx={{
            width: '819px',
            "&:hover": {
              "&& fieldset": {
                border: "1px solid ",
                borderColor: "#D6DADE"
              }
            }
          }}

          MenuProps={{
            PaperProps: {
              sx: {
                "& .MuiMenuItem-root.Mui-selected": {
                  backgroundColor: ""
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "#DFF3FB"
                },
                "& .MuiMenuItem-root.Mui-selected:hover": {
                  backgroundColor: "#DFF3FB"
                }
              }
            }
          }}
        >

          <MenuItem value="">
            Select Department
          </MenuItem>
          <MenuItem value="Application Architect Azure">Application Architect Azure</MenuItem>
          <MenuItem value="Applications Developer">Applications Developer</MenuItem>
          <MenuItem value="Data Architect">Data Architect</MenuItem>
          <MenuItem value="Data Visualization Developer">Data Visualization Developer</MenuItem>
          <MenuItem value="Data Science">Data Science</MenuItem>
          <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
          <MenuItem value="Dotnet Developer">Dotnet Developer</MenuItem>
          <MenuItem value="ETL Developer">ETL Developer</MenuItem>
          <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
          <MenuItem value="Human Resources">Human Resources</MenuItem>
          <MenuItem value="IT Application Development">IT Application Development</MenuItem>
          <MenuItem value="Technical Recruiter">Technical Recruiter</MenuItem>
          <MenuItem value="Project Manager">Project Manager</MenuItem>
          <MenuItem value="QA Engineer">QA Engineer</MenuItem>
          <MenuItem value="Software Developer">Software Developer</MenuItem>
          
        </Select>
      </FormControl>
    </div>
    
  );
}