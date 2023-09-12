import React, { useState } from 'react';
import '../../styles/Styles.css'
import { CardComponent } from './Card';
import p1 from '../../assets/img/profile1.png'
import p2 from '../../assets/img/profile2.svg'
import p3 from '../../assets/img/profile3.svg'
import p4 from '../../assets/img/profile15+.svg'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { SelectDepartment } from './SelectDepartment';
import SelectTopic from './SelectTopic';
import { departmentAndTopics } from '../../constants/constant';
import { FilterContainer, FilterContainerOuter, SortBy } from '../StyledComponents/StyledAvailableAssessment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledFormControl, StyledMenuItem } from '../StyledComponents/StyledAvailableAssessment'
import { InputLabel, Select,OutlinedInput  } from '@mui/material'
import { Level } from '../../constants/constant';
import SortIcon from '@mui/icons-material/Sort';
import useAvailableAssessment from './assessmentcontext/availableassessmentContext';
import SecondTopBarAvailableAssessment from './SecondTopBarAvailableAssessment';


const ITEMS_PER_PAGE = 8;
const initialPage = 1;

const AssesmentData = []
for (let i = 1; i <= 200; i++) {
  const assessment = {
    assesmentId: `Ass04_UXUI_${String(i).padStart(3, '0')}`,
    assesmentSubject: 'UI Designer',
    relatedTopics: ['Basic', 'Topic 02 & 03'],
    assesmentDescription: 'UCD Process, IA, UX Deliverables, Competition analysis, marketing research, marketing',
    img1: p1,
    img2: p2,
    img3: p3,
    img4: p4,
    department: departmentAndTopics[(i - 1) % departmentAndTopics.length].department,
    level: Level[(i - 1) % Level.length],
  };
  AssesmentData.push(assessment);
}
const ResponsiveGrid = () => {

  const {department, filterLevel, level} = useAvailableAssessment()


  const [currentPage, setCurrentPage] = useState(initialPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const selectLevel = (event) => {
    filterLevel(event.target.value)
  }

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const filteredAssessments = AssesmentData.filter(
    (assessment) => department && level ? assessment.department === department && assessment.level === level : assessment
  );
  const selectedAssessments = filteredAssessments.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(filteredAssessments.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div className='second-top-bar'>
      <SecondTopBarAvailableAssessment/>
      </div>
    <div className='main-content'>
      <FilterContainerOuter>
        <FilterContainer>
          <SelectDepartment></SelectDepartment>
          <SelectTopic></SelectTopic>
          <StyledFormControl>
            <InputLabel id="multiple-topic-label">Select Level</InputLabel>
            <Select
              labelId="multiple-topic-label"
              id="topic"
              input={<OutlinedInput label="Select Topic" />}
              onChange={selectLevel}
              IconComponent={KeyboardArrowDownIcon}>
                {Level.map((level, index) => (
              <StyledMenuItem
                key={index}
                value={level}>
                {level}
              </StyledMenuItem>
            ))}
            </Select>
          </StyledFormControl>
        </FilterContainer>
        <SortBy>
            <InputLabel id="multiple-topic-label">Sort by</InputLabel>
            <Select
              labelId="multiple-topic-label"
              id="topic"
              input={<OutlinedInput label="Select Topic" />}
              IconComponent={SortIcon}>
                {Level.map((level, index) => (
              <StyledMenuItem
                key={index}
                value={level}>
                {level}
              </StyledMenuItem>
            ))}
            </Select>
          </SortBy>
      </FilterContainerOuter>
      <div className='container-card'>
        {selectedAssessments.map((assessment) => (
          <CardComponent key={assessment.assesmentId} props={assessment} />
        ))}
      </div>

      <Stack spacing={2} direction='row' justifyContent='center' marginTop={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape='rounded'          
          sx={{
            '& .Mui-selected': {
              color: '#1589CC',
            },
          }} 
        />
      </Stack>
    </div>
    </div>
  );
};

export default ResponsiveGrid;


