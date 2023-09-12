import React from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import './EmployeeSearch.css'; 

const EmployeeSearch = ({ onChange }) => {
    return (
        <Box className="search-bar-container">
            
        <svg className="search-icon"  xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.04653 0C3.16118 0 0 3.16118 0 7.04653C0 10.9321 3.16118 14.0931 7.04653 14.0931C8.75609 14.0931 10.3254 13.4812 11.5469 12.4649L14.8903 15.8083C15.0174 15.9354 15.1837 15.9989 15.3502 15.9989C15.5165 15.9989 15.683 15.9354 15.8101 15.8083C16.0642 15.5544 16.0642 15.1425 15.8101 14.8886L12.4665 11.545C13.4818 10.3237 14.0931 8.75519 14.0931 7.04653C14.0931 3.16118 10.9321 0 7.04653 0ZM7.04495 12.7901C3.87683 12.7901 1.29932 10.2126 1.29932 7.04449C1.29932 3.87637 3.87683 1.29883 7.04495 1.29883C10.2131 1.29883 12.7906 3.87634 12.7906 7.04446C12.7906 10.2126 10.2131 12.7901 7.04495 12.7901Z" fill="#717D8A"/>
        </svg>
            
            <Input
                placeholder="Search Employee"
                onChange={onChange}
                className="search-input"
                disableUnderline
            />
        </Box>
    );
}

export default EmployeeSearch;
