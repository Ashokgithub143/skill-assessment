import formstyle from './importForm.module.css';

import { Select, MenuItem, FormControl, InputLabel, Grid,FormLabel,RadioGroup,FormControlLabel,Radio,Modal,Backdrop} from "@mui/material";
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';


import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import basic from '../../../assets/img/Basic.png';
import intermediate from '../../../assets/img/Inter.png';
import advanced from '../../../assets/img/Advanced.png';
import file_image from '../../../assets/img/File_image.png';
import Button from '@mui/material/Button';
import cancel_button from '../../../assets/img/cancel_button.png';
import { useState } from 'react';
import Import_Success from './import_success';

function ImportForm({close_form}){
    const departments = [
        "Applications Developer",
        "Data Architect",
        "Data Visualization Developer",
        "Data Science",
        "DevOps Engineer",
        "DotNet Developer",
        "ETL Developer",
        "Frontend Developer",
        "Backend Developer",
      ];
      const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const buttonStyle = {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: '0',
  };
  const [personName, setPersonName] = React.useState([]);
  const [displayimportsuccess,setdisplayimportsuccess]=useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  function form_close(){
    close_form();
  }
  function handleimportclick(){
    setdisplayimportsuccess(true);
    setTimeout(() => {
      setdisplayimportsuccess(false);
    }, 5000);
  }
  function close_modal(){
    setdisplayimportsuccess(false);
    close_form();
  }


    return(<div><p className={formstyle.heading}>Import questions from CSV file</p>
   
    <p className={formstyle.this_Tool}>This tool allows you to import (or merge) questions  to your <br></br> question bank from a CSV file.</p>
    <button style={buttonStyle} onClick={form_close}><img src={cancel_button} className={formstyle.x_Mark}></img></button>
    <hr className={formstyle.line}></hr>
   
    <div className={formstyle.download_Container}>
    <p className={formstyle.download_Template}>Download Template</p>
  
  
    <button className={formstyle.download_Button}><p className={formstyle.text_Insidebutton}>Download Template</p></button>
    </div>
    

    <p className={formstyle.match}>Download the CSV file template to match your question</p>
    <hr className={formstyle.line}></hr>
    <FormControl
            required
            sx={{ minWidth: "100%", marginTop: "0.5rem", width: "100%" }}
          >
            <InputLabel
              id="demo-simple-select-required-label"
              className={formstyle.label_Options}
            >
              Select Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              label="Department"
              className={formstyle.dropdown_Style}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {departments.map((value) => (
                <MenuItem
                  value={value}
                  key={value}
                  className={formstyle.label_Options}
                 
                >
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label" className={formstyle.label_Options2}>Select Topics</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          className={formstyle.dropdown_Style2}
          
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} className={formstyle.label_Options2}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" className={formstyle.select_Levels}>Select level</FormLabel>
          <br></br>
          <div className={formstyle.pair}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            
            <FormControlLabel
            value="basic"
            control={<Radio sx={{ width: "8px", height: "8px", mr: 0.5 }} />} // Adjust the size of the radio button
            label={
              <div className={formstyle.radio_Option}>
                
                <img src={basic} alt="Basic" className={formstyle.radio_Image} /> {/* Add image */}
                Basic
              </div>
             
            }
            id='basic'
            className={formstyle.radio_Options}
          />
            <FormControlLabel
            value="intermediate"
            control={<Radio sx={{ width: "8px", height: "8px", mr: 0.5 }} />} // Adjust the size of the radio button
            label={
              <div className={formstyle.radio_Option}>
                
                <img src={intermediate} alt="Intermediate" className={formstyle.radio_Image} /> {/* Add image */}
                Intermediate
              </div>
              
            }
            id='intermediate'
            className={formstyle.radio_Options}
          />
           <FormControlLabel
            value="advanced"
            control={<Radio sx={{ width: "8px", height: "8px", mr: 0.5 }} />} // Adjust the size of the radio button
            label={
              <div className={formstyle.radio_Option}>
                
                <img src={advanced} alt="Intermediate" className={formstyle.radio_Image} /> {/* Add image */}
                Advanced
              </div>
              
            }
            id='advanced'
            className={formstyle.radio_Options}
          />
            
          </RadioGroup>
          </div>
         
        </FormControl>
       
      

        <p className={formstyle.choose_File}>Choose a CSV file from your computer</p>

        <div className={formstyle.rectangle}>
            <img src={file_image} className={formstyle.file_Image}></img>
            <p className={formstyle.drop}>Drop your CSV file here, or Browse</p>
            <p className={formstyle.supports_Csv}>Supports:CSV</p>

        </div>
      <div className={formstyle.divpos}>
        <Button variant="text" className={formstyle.cancel_Button} ><p className={formstyle.cancel_Text} onClick={form_close}>Cancel</p></Button>
        <Button  variant="contained" className={formstyle.import_Button} onClick={handleimportclick}><p className={formstyle.import_Text}>Import</p></Button>
        </div>
        <Modal
            open={displayimportsuccess}
            
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
              
              
            }}
          >
            <Import_Success x_mark_close={close_modal} />
            
          </Modal>
    
    
    </div>)
}

export default ImportForm;