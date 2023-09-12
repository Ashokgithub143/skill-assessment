/* eslint-disable no-unused-vars */
import {React,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider} from '@mui/material';
import './ProfileCard.css'; 
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {ProfileCardData} from '../../../constants/ProfileCardData';
import EmployeeSearch from './EmployeeSearch';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DepartmentDropdown from './DepartmentDropdown';
import ManagerCard from './ManagerCard';
import BestPerformerList from './BestPerformerList';


const headingFont = createTheme({
  typography: {
    fontFamily: ['Manrope'].join(',')
  },
});

const subheadingFont = createTheme({
  typography: {
    fontFamily: ['Manrope'].join(',')
  },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme, fillValue }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: fillValue || (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
  },
}));


export default function ProfileCard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(ProfileCardData);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [copiedEmail, setCopiedEmail] = useState('');
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);
  const ITEMS_PER_PAGE = 9;
  const initialPage = 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentEmployees = filteredEmployees.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
  

  const handleSearchChange = (event) => {
   
    const query = event.target.value;
    console.log('Search query:', event.target.value);
    setSearchQuery(query);
  
    if (query.trim() === '') {
      setFilteredEmployees(ProfileCardData);
    } else {
      const filtered = ProfileCardData.filter(
        (employee) =>
          employee.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  };

  const handleDepartmentChange = (selectedValue) => {
    setSelectedDepartment(selectedValue);
  
    // Filter employees based on selected department
    const filtered = ProfileCardData.filter(
      (employee) =>
        selectedValue === '' || employee.domain === selectedValue
    );
    setFilteredEmployees(filtered);
    setCurrentPage(1); // Reset to the first page when filtering changes
  };
  

return (
  <>
  <div class="main-container">
  <div class="top-form-section">
      <div class="input-box">
      <EmployeeSearch onChange={handleSearchChange}  /> 
      </div>
      <div class="input-box">
      <DepartmentDropdown onSelect={handleDepartmentChange} /> 
      </div>
  </div>
  <div class="employee-list-container">
      <div class="left-employee-section">
      <div className="cardspace">

<div className="card-container">
  <div className="search">
  
  <ThemeProvider theme={headingFont}>
            <Typography className="searchheading" align="center">
             List of Employees
            </Typography>
          </ThemeProvider>
  </div>

    <Grid container spacing={2} className="grid-container"><>
      {currentEmployees.map((employee) =>  (
        <Grid item key={employee.id} md={4} columnSpacing={1}>
          <Card elevation={0} className="custom-card">

            {/* Avatar */}
            <div className="avatar-container">
              <Avatar alt={employee.name} src={employee.avatar} />
            </div>

            <CardContent>
              {/* Heading */}
              <ThemeProvider theme={headingFont}>
                <Typography className="heading" align="center">
                  {employee.id}-{employee.name}
                </Typography>
              </ThemeProvider>

              {/* Subheading */}
              <ThemeProvider theme={subheadingFont}>
                <Typography className="subheading" align="center" variant="title" color="text.secondary">
                  {employee.designation} - {employee.domain}
                </Typography>
                <Typography className="subheading2" align="center" variant="body2" color="text.secondary">
                  {employee.email} &nbsp;
                  <svg width="10" height="10" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                      const textarea = document.createElement('textarea');
                      textarea.value = employee.email;
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand('copy');
                      document.body.removeChild(textarea);
                      setCopiedEmail(employee.email);
                    }} style={{ cursor: 'pointer' }}
                    >
                  <path d="M1 2.085V8.5C0.999902 9.13472 1.24123 9.74571 1.67504 10.209C2.10885 10.6724 2.70265 10.9534 3.336 10.995L3.5 11H7.914C7.81061 11.2924 7.61913 11.5456 7.3659 11.7247C7.11267 11.9038 6.81016 12 6.5 12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.316071 10.5587 2.06237e-07 9.79565 2.06237e-07 9V3.5C-0.00016248 3.18967 0.0959278 2.88694 0.275028 2.63351C0.454129 2.38008 0.707422 2.18844 1 2.085ZM8.5 0C8.89782 0 9.27936 0.158035 9.56066 0.43934C9.84196 0.720644 10 1.10218 10 1.5V8.5C10 8.89782 9.84196 9.27936 9.56066 9.56066C9.27936 9.84196 8.89782 10 8.5 10H3.5C3.10218 10 2.72064 9.84196 2.43934 9.56066C2.15804 9.27936 2 8.89782 2 8.5V1.5C2 1.10218 2.15804 0.720644 2.43934 0.43934C2.72064 0.158035 3.10218 0 3.5 0H8.5ZM8.5 1H3.5C3.36739 1 3.24022 1.05268 3.14645 1.14645C3.05268 1.24021 3 1.36739 3 1.5V8.5C3 8.63261 3.05268 8.75979 3.14645 8.85355C3.24022 8.94732 3.36739 9 3.5 9H8.5C8.63261 9 8.75979 8.94732 8.85355 8.85355C8.94732 8.75979 9 8.63261 9 8.5V1.5C9 1.36739 8.94732 1.24021 8.85355 1.14645C8.75979 1.05268 8.63261 1 8.5 1Z" fill="#777777" />
                  </svg>
                </Typography>
                <Typography className="skill-level" variant="body2" color="text.secondary">
                  Skill Level: <strong>Beginner</strong>
                </Typography>
              </ThemeProvider>

              {/* Progress Bar */}
              <Box className="progress1">
                <BorderLinearProgress variant="determinate" value={employee.progress} fillValue="#AAD064" style={{ height: 3 }} />
              </Box>

            </CardContent>

            {/* Card actions */}
            <CardActions className="card-actions">
              <Button size="small" className="view-button" style={{ textTransform: 'initial' }}>View Profile</Button>
              <Button size="small" className="assist-button" style={{ textTransform: 'initial' }}>Assist Test</Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
        </>
      </Grid>
      
  </div>
  {/* Pagination component */}
  <Stack spacing={2} direction='row' justifyContent='center' marginTop={2} className='Navigation' >
      <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      shape='rounded'          
      sx={{
        '& .Mui-selected.Mui-focusVisible, & .Mui-selected': {
          color: '#1589CC',
          backgroundColor: 'transparent',
        },
      }}/>
  </Stack>
  </div>
      </div>   
      <div class="right-menu-section">
          <div class="reporting-mngr-sec">
          <ManagerCard selectedDepartment={selectedDepartment} />
          <BestPerformerList/>
          </div>
      </div>         
  </div>
</div>
</>

);
}