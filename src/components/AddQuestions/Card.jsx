import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import card_styles from './Card.module.css';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import basic from '../../assets/img/Basic.jpg';
import intermediate from '../../assets/img/Inter.jpg';
import advanced from '../../assets/img/Advanced.jpg';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import '../AddQuestions/Buttons';

export default function ImgMediaCard(props) {
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
 
  const [options, setOptions] = React.useState([{ id: 1, text: '' }]);
  const [answerType, setAnswerType] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('');
  const [selectedOptionn, setSelectedOptionn] = React.useState('');
  const [showCard, setShowCard] = React.useState(false);
  const [clickedCard, setClickedCard] = React.useState(false);
  const [disableSave, setDisableSave] = React.useState(false);
  const [tickstate,settickstate]=useState(null);
  const [showAddMore, setShowAddMore] = useState(true);
  const [addMoreClickCount, setAddMoreClickCount] = useState(0);
  const [editMode, setEditMode] = React.useState(true);
  const [optionCount, setOptionCount] = React.useState(options.length);
 
  
  const addOption = () => {
    if (options.length < 4) {
      setOptions((prevOptions) => [...prevOptions, { id: prevOptions.length + 1, text: '' }]);
      
      // Check if the maximum number of options (4) is reached after adding
      if (options.length + 1 === 4) {
        setShowAddMore(false); // Hide the "+ Add more options" text
      }
    }
  };
  
  const handleOptionChange = (index, newText) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, i) => (i === index ? { ...option, text: newText } : option))
    );
  };

  const handleCardClick = () => {
    setClickedCard(!clickedCard);
  };

  const saveClickHandler = (e) => {
    setDisableSave(true);
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    props.onDeleteCard();
  };
  
  return (
    <Card sx={{ maxWidth: '97%', minHeight: 450, marginTop:'1%',border: 1, borderColor: 'aliceblue' }} >

      <CardContent>
        <FormControl sx={{ minWidth: "69%", marginTop: "3%", marginLeft: "0%", width: "50%", textAlign: "left" }}>
          <InputLabel id="demo-simple-select-required-label" >
            Select Topics
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            label="Department"
            placeholder="Select Department"
            value={selectedOptionn}
            disabled={!editMode}
            onChange={(e) => {
              setSelectedOptionn(e.target.value);
              
            }}
          >
            <MenuItem value="">
              
            </MenuItem>
            {departments.map((value) => (
              <MenuItem value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl><br></br>
        <FormControl   disabled={!editMode} >
          <FormLabel className={card_styles.demo_row}>Select levels</FormLabel>
          
          <div className={card_styles.flex_Container}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
          >
              <FormControlLabel value="basic" control={<Radio />} label={
                <div>
                  <div className={card_styles.radio}>
                    <img src={basic} alt="Basic" className={card_styles.network} />
                    Basic
                  </div>
                </div>
              } className={card_styles.basic} />
              <FormControlLabel value="Intermediate" control={<Radio />} label={
                <div>
                  <div className={card_styles.radio}>
                    <img src={intermediate} alt="Intermediate" className={card_styles.network}  />
                    Intermediate
                  </div>
                </div>
              } className={card_styles.Intermediate} />
              <FormControlLabel value="Advanced" control={<Radio />} label={
                <div>
                  <div className={card_styles.radio}>
                    <img src={advanced} alt="Advanced" className={card_styles.network}  />
                    Advanced
                  </div>
                </div>
              } className={card_styles.Advanced} />
            </RadioGroup>
          </div>
        </FormControl>
        <div className='type'>
        <TextField
          id="demo-simple-select-required"
          placeholder="Type your question"
          variant="outlined"
          sx={{
            minWidth: "69%",
            marginTop: "2%",
            marginLeft: "0%",
            width: "50%",
            textAlign: "left"
          }}

 disabled={!editMode}
        />
        <FormControl sx={{ maxWidth: "25%", marginTop: "2%", marginLeft: "5%", width: "50%", textAlign: "left" }}  disabled={!editMode} >
          <InputLabel id="demo-simple-select-required-label">
            Answer Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            label="Department"
            placeholder="Answer Type"
          >

            <MenuItem value="option1" sx={{ gap: "20px", font: "Manrope", display: "flex", justifyContent: "flex-start", alignItems: "center"}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style = {{verticalAlign: "text-bottom", marginRight: "1.5rem"}}>
              <circle cx="10" cy="10" r="9" fill="white" stroke="#4F5B67" stroke-width="2" />
              <circle cx="9.99888" cy="10.0001" r="6.42857" fill="#4F5B67" />
            </svg> <span>Multiple Choice</span></MenuItem>
            <MenuItem value="option2" sx={{ gap: "20px", font: "Manrope" }}><svg width="20" height="18" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={card_styles.checkbox} style = {{verticalAlign: "text-bottom", marginRight: "1.5rem"}}>
              <path d="M8.7834 0.255056C8.96312 0.089653 9.20227 -0.00178848 9.4504 2.65108e-05C9.69853 0.0018415 9.93623 0.0967713 10.1133 0.264784C10.2904 0.432797 10.3931 0.660752 10.3997 0.900549C10.4062 1.14034 10.3162 1.37323 10.1485 1.55005L5.05811 7.70436C4.97058 7.79551 4.86494 7.86865 4.7475 7.91942C4.63006 7.97018 4.50324 7.99754 4.37461 7.99984C4.24599 8.00214 4.1182 7.97935 3.9989 7.93282C3.8796 7.88629 3.77122 7.81698 3.68026 7.72903L0.30454 4.46564C0.210532 4.38096 0.13513 4.27884 0.0828334 4.16537C0.0305365 4.05191 0.0024157 3.92942 0.000148909 3.80522C-0.00211788 3.68102 0.0215159 3.55765 0.0696397 3.44248C0.117764 3.3273 0.189392 3.22267 0.280252 3.13483C0.371111 3.047 0.479341 2.97775 0.598484 2.93123C0.717627 2.88471 0.845243 2.86186 0.973718 2.86405C1.10219 2.86624 1.2289 2.89343 1.34627 2.94398C1.46364 2.99454 1.56927 3.06743 1.65687 3.15831L4.32836 5.73967L8.75916 0.28219C8.76714 0.272694 8.77565 0.263635 8.78467 0.255056H8.7834Z" fill="grey" />
            </svg>
              <span>Checkbox</span></MenuItem>
            <MenuItem value="option3" sx={{ gap: "20px", font: "Manrope" }}><svg width="20" height="8" background="rgba(79, 91, 103, 1)" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" style = {{verticalAlign: "baseline", marginRight: "1.5rem"}}>
              <path d="M11 5.5H1C0.734784 5.5 0.48043 5.60536 0.292893 5.79289C0.105357 5.98043 0 6.23478 0 6.5C0 6.76522 0.105357 7.01957 0.292893 7.20711C0.48043 7.39464 0.734784 7.5 1 7.5H11C11.2652 7.5 11.5196 7.39464 11.7071 7.20711C11.8946 7.01957 12 6.76522 12 6.5C12 6.23478 11.8946 5.98043 11.7071 5.79289C11.5196 5.60536 11.2652 5.5 11 5.5ZM19 0.5H1C0.734784 0.5 0.48043 0.605357 0.292893 0.792893C0.105357 0.98043 0 1.23478 0 1.5C0 1.76522 0.105357 2.01957 0.292893 2.20711C0.48043 2.39464 0.734784 2.5 1 2.5H19C19.2652 2.5 19.5196 2.39464 19.7071 2.20711C19.8946 2.01957 20 1.76522 20 1.5C20 1.23478 19.8946 0.98043 19.7071 0.792893C19.5196 0.605357 19.2652 0.5 19 0.5Z" fill="#4F5B67" />
            </svg>
              <span>Short Answers</span></MenuItem>
          </Select>
        </FormControl>
        </div>
       
        {options.map((option, index) => (
          <div key={option.id} className={card_styles.optionContainer}>
            <div className={card_styles.row}>
              <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={card_styles.circle}>
                <circle cx="4" cy="4" r="4" fill="#DFF3FB" />
                <circle cx="4" cy="15" r="4" fill="#DFF3FB" />
                <circle cx="4" cy="26" r="4" fill="#DFF3FB" />
                <circle cx="15" cy="4" r="4" fill="#DFF3FB" />
                <circle cx="15" cy="15" r="4" fill="#DFF3FB" />
                <circle cx="15" cy="26" r="4" fill="#DFF3FB" />
              </svg>
              <p className={card_styles.option_Title} disabled={!editMode}>{String.fromCharCode(65 + index)}</p>

              <FormControl sx={{ minWidth: "61%", marginTop: "2%", marginLeft: "0.5%", width: "50%", textAlign: "left" }}>
                <InputLabel id={`option-label-${index}`}> </InputLabel>
                <TextField
                  id={`option-${index}`}
                  label={`Option ${index + 1}`}
                  variant="outlined"
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  disabled={!editMode}
                />
              </FormControl>
              <svg width="76" height="89" viewBox="0 0 56 56" cursor="pointer" fill="none" xmlns="http://www.w3.org/2000/svg" disabled={!editMode} className={`tick ${showCard ? 'active' : ''}`}  onClick={() => {
                setSelectedOption(`option-${index}`);
                setShowCard(!showCard);
                settickstate(index);
                
              }}>
                <rect x="0.5" y="0.5" width="55" height="55" rx="3.5" fill={showCard && tickstate == index ? "lightgreen" : "none"} />
                <g clip-path="url(#clip0_48_854)">
                  <path d="M25.167 32.4941L38.189 19.4707L40.1936 21.4739L25.167 36.5005L16.1514 27.4848L18.1545 25.4816L25.167 32.4941Z" fill="#D6DADE" />
                </g>
                <rect x="0.5" y="0.5" width="55" height="55" rx="3.5" stroke="#D6DADE" />
                <defs>
                  <clipPath id="clip0_48_854">
                    <rect width="34" height="34" fill="white" transform="translate(11 11)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        ))}
       {options.length < 4 && (
          <p className={card_styles.add_More_Question} onClick={addOption}>
            + Add more options
          </p>
       )}

        {selectedOption && showCard && (
          < Card sx={{ maxWidth: 287, maxHeight: '20rem', marginLeft: '74%', marginTop: -20, border: 1, borderColor: 'aliceblue',cursor: 'pointer' }} onClick={handleCardClick}>
            <CardContent>
             <br />
              <textarea
              rows = {8}
              cols = {25}    
              style={{color: 'var(--textcolortext-600, #4F5B67)',
              fontFamily: 'Manrope',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '150%',
            border:'none',
            outline:'none' }}
            onClick={handleCardClick} 
            disabled={!editMode}
            >
              
              </textarea>
            </CardContent>
          </Card>
        )}
        <svg width="1540" height="1" viewBox="0 0 1540 1" fill="none" xmlns="http://www.w3.org/2000/svg" className={card_styles.seperator}>
          <line y1="0.5" x2="1540" y2="0.5" stroke="#D6DADE" />
        </svg>
        <div className={card_styles.Trash}>
        {editMode ? (
          <Button className='save-Btn' onClick={saveClickHandler} >Save</Button>
        ) : (
          <Button className='edit-Btn' onClick={toggleEditMode}>Edit</Button>
        )}
        <svg
          width="24"
          height="24"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={card_styles.Delete_Question}
          onClick={handleDelete}
        >
       <path d="M8.33398 10H10.334V22H8.33398V10ZM14.334 10H16.334V22H14.334V10Z" fill="#1589CC"/>
        <path d="M0.333984 4V6H2.33398V26C2.33398 26.5304 2.5447 27.0391 2.91977 27.4142C3.29484 27.7893 3.80355 28 4.33398 28H20.334C20.8644 28 21.3731 27.7893 21.7482 27.4142C22.1233 27.0391 22.334 26.5304 22.334 26V6H24.334V4H0.333984ZM4.33398 26V6H20.334V26H4.33398ZM8.33398 0H16.334V2H8.33398V0Z" fill="#1589CC"/>
        </svg>
        </div>
       
      </CardContent>
    </Card>
  );
}