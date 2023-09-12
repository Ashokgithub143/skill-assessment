import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import './ModalComponent.css'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;



const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setSelectedOptions(value);
  };

  const handleDropdownChange2 = (event) => {
    const { value } = event.target;
    setSelectedOptions2(value);
  };

  const handleDropdownChange3 = (event) => {
    const { value } = event.target;
    setSelectedOptions3(value);
  };

  const handleClearOptions = () => {
    setSelectedOptions([]);
    setSelectedOptions2([]);
    setSelectedOptions3([]);
  };

  const handleApply = () => {
     toggleModal();
  };


  return (
    <div>

<button variant="contained" className='sort-button' onClick={toggleModal}>
<div id="sort">
  <svg
    id="sort-svg"
    width={18}
    height={12}
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="#242731" />
  </svg>
</div>
</button>













      <Modal open={showModal} onClose={toggleModal}>
        <Box sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          minWidth: 200,
          maxHeight:250,
          borderRadius:1,
          width:'350px'
        }}>
          <div className='dropdown-modal' style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                    }}>
          <p className='filters'>Filters</p>
          <button className='modal-button' onClick={handleClearOptions}><span className='clearall-span'>Clear All</span></button>
          <button className='modal-button' onClick={handleApply}><span className='apply-span'>Apply</span></button>
          </div>
          <FormControl sx={{ width: '100%',maxWidth:'100%' ,marginBottom:'9px' }}>
            <InputLabel >Department</InputLabel>
            <Select
              multiple
              value={selectedOptions}
              onChange={handleDropdownChange}
              
              renderValue={(selected) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ flex: 1 }}>Department</span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#1589CC',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginLeft: '10px',
                    }}
                  >
                    {selected.length}
                  </span>
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 9.5 + ITEM_PADDING_TOP,
                    width: 250,
                  },
                },
                sx: {
                  '& .MuiMenuItem-root': {
                    height: '20px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                  },
                },
              }}
            >
              
              <MenuItem value="option1">
                <Checkbox checked={selectedOptions.includes('option1')} />
                Application Developer
              </MenuItem>
              <MenuItem value="option2">
                <Checkbox checked={selectedOptions.includes('option2')} />
                Data Architect
              </MenuItem>
              <MenuItem value="option3">
                <Checkbox checked={selectedOptions.includes('option3')} />
                Data Visualiztion Developer
              </MenuItem>

              <MenuItem value="option4">
                <Checkbox checked={selectedOptions.includes('option4')} />
                Data Science
              </MenuItem>


              <MenuItem value="option5">
                <Checkbox checked={selectedOptions.includes('option5')} />
                DevOps Engineer
              </MenuItem>


              <MenuItem value="option6">
                <Checkbox checked={selectedOptions.includes('option6')} />
                Dotnet Developer
              </MenuItem>

              <MenuItem value="option7">
                <Checkbox checked={selectedOptions.includes('option7')} />
                ETL Developer
              </MenuItem>


              <MenuItem value="option8">
                <Checkbox checked={selectedOptions.includes('option8')} />
                Frontend Developer
              </MenuItem>

              <MenuItem value="option9">
                <Checkbox checked={selectedOptions.includes('option9')} />
                Human Resources
              </MenuItem>

              <MenuItem value="option10">
                <Checkbox checked={selectedOptions.includes('option10')} />
                IT Technical Recruiter
              </MenuItem>


              <MenuItem value="option11">
                <Checkbox checked={selectedOptions.includes('option11')} />
                Project Manager
              </MenuItem>


              <MenuItem value="option12">
                <Checkbox checked={selectedOptions.includes('option12')} />
                QA Engineer
              </MenuItem>

              <MenuItem value="option13">
                <Checkbox checked={selectedOptions.includes('option13')} />
                Software Engineer
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '100%',maxWidth:'100%',marginBottom:'9px' }}>
            <InputLabel>Topics</InputLabel>
            <Select
              multiple
              value={selectedOptions2}
              onChange={handleDropdownChange2}
              renderValue={(selectedOptions2) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ flex: 1 }}>Topics</span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#1589CC',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginLeft: '10px',
                    }}
                  >
                    {selectedOptions2.length}
                  </span>
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 9.5 + ITEM_PADDING_TOP,
                    width: 250,
                  },
                },
                sx: {
                  '& .MuiMenuItem-root': {
                    height: '20px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                  },
                },
              }}
            >



              
            
              
              <MenuItem value="option1">
                <Checkbox checked={selectedOptions2.includes('option1')} />
                Python
              </MenuItem>
              <MenuItem value="option2">
                <Checkbox checked={selectedOptions2.includes('option2')} />
                Scala
              </MenuItem>
              <MenuItem value="option3">
                <Checkbox checked={selectedOptions2.includes('option3')} />
                Java
              </MenuItem>
              <MenuItem value="option4">
                <Checkbox checked={selectedOptions2.includes('option4')} />
                Operating system
              </MenuItem>
              <MenuItem value="option5">
                <Checkbox checked={selectedOptions2.includes('option5')} />
                C/C++
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: '100%',maxWidth:'100%' }}>
            <InputLabel>Level</InputLabel>
            <Select
              multiple
              value={selectedOptions3}
              onChange={handleDropdownChange3}
              renderValue={(selectedOptions3) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ flex: 1 }}>Level</span>
                  <span 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#1589CC',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      
                    }}
                  >
                    {selectedOptions3.length}
                  </span>
                </div>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 9.5 + ITEM_PADDING_TOP,
                    width: 250,
                  },
                },
                sx: {
                  '& .MuiMenuItem-root': {
                    height: '20px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                  },
                },
              }}
            >
              
              <MenuItem value="option1">
                <Checkbox checked={selectedOptions3.includes('option1')} />
                Begineer
              </MenuItem>
              <MenuItem value="option2">
                <Checkbox checked={selectedOptions3.includes('option2')} />
                Intermediate
              </MenuItem>
              <MenuItem value="option3">
                <Checkbox checked={selectedOptions3.includes('option3')} />
                Advanced
              </MenuItem>
            </Select>
          </FormControl>
        
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;