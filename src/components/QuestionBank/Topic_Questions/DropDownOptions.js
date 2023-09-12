import option_tick from "../../../assets/img/option_tick.png";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
} from "@mui/material";
import { TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import opstyle from "./DropDownOptions.css";
import Dustbin from "../../../assets/img/Dustbin.png";
import QuestionUpdated from "./quesupdated";

function DropDownOptions() {
  const [options, setOptions] = useState([{ id: 1, text: "" }]);
  const [showCard, setShowCard] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [clickedCard, setClickedCard] = useState(false);
  const [disableSave, setDisableSave] = useState(false);
  const [showupdate, setshowupdate] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const[tickstate,settickstate]=useState(null);
  const handleCloseSecond = () => {
    setshowupdate(false);
  };
  function closeModal() {
    setshowupdate(false);
  }
  const addOption = () => {
    setOptions((prevOptions) => [
      ...prevOptions,
      { id: prevOptions.length + 1, text: "" },
    ]);
  };

  const handleOptionChange = (index, newText) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, i) =>
        i === index ? { ...option, text: newText } : option
      )
    );
  };

  const handleCardClick = (index) => {
    setClickedCard(!clickedCard);
  };
  function displayupdated() {
    setshowupdate(true);
    setTimeout(() => {
      setshowupdate(false);
    }, 5000);
  }

  return (
    <div>
      <FormControl
        sx={{
          maxWidth: "20%",
          marginTop: "-6%",
          marginLeft: "75%",
          width: "40%",
          textAlign: "left",
        }}
      >
        <InputLabel className="answertype-Label">Answer Type</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Department"
          placeholder="Answer Type"
          className="answer_Type"
        >
          <MenuItem
            value="option1"
            sx={{
              gap: "20px",
              font: "Manrope",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: "text-bottom", marginRight: "1.5rem" }}
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="white"
                stroke="#4F5B67"
                stroke-width="2"
              />
              <circle cx="9.99888" cy="10.0001" r="6.42857" fill="#4F5B67" />
            </svg>{" "}
            <span>Multiple Choice</span>
          </MenuItem>
          <MenuItem value="option2" sx={{ gap: "20px", font: "Manrope" }}>
            <svg
              width="20"
              height="18"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="tick-Mark"
              style={{ verticalAlign: "text-bottom", marginRight: "1.5rem" }}
            >
              <path
                d="M8.7834 0.255056C8.96312 0.089653 9.20227 -0.00178848 9.4504 2.65108e-05C9.69853 0.0018415 9.93623 0.0967713 10.1133 0.264784C10.2904 0.432797 10.3931 0.660752 10.3997 0.900549C10.4062 1.14034 10.3162 1.37323 10.1485 1.55005L5.05811 7.70436C4.97058 7.79551 4.86494 7.86865 4.7475 7.91942C4.63006 7.97018 4.50324 7.99754 4.37461 7.99984C4.24599 8.00214 4.1182 7.97935 3.9989 7.93282C3.8796 7.88629 3.77122 7.81698 3.68026 7.72903L0.30454 4.46564C0.210532 4.38096 0.13513 4.27884 0.0828334 4.16537C0.0305365 4.05191 0.0024157 3.92942 0.000148909 3.80522C-0.00211788 3.68102 0.0215159 3.55765 0.0696397 3.44248C0.117764 3.3273 0.189392 3.22267 0.280252 3.13483C0.371111 3.047 0.479341 2.97775 0.598484 2.93123C0.717627 2.88471 0.845243 2.86186 0.973718 2.86405C1.10219 2.86624 1.2289 2.89343 1.34627 2.94398C1.46364 2.99454 1.56927 3.06743 1.65687 3.15831L4.32836 5.73967L8.75916 0.28219C8.76714 0.272694 8.77565 0.263635 8.78467 0.255056H8.7834Z"
                fill="grey"
              />
            </svg>
            <span>Checkbox</span>
          </MenuItem>
          <MenuItem value="option3" sx={{ gap: "20px", font: "Manrope" }}>
            <svg
              width="20"
              height="8"
              background="rgba(79, 91, 103, 1)"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ verticalAlign: "baseline", marginRight: "1.5rem" }}
            >
              <path
                d="M11 5.5H1C0.734784 5.5 0.48043 5.60536 0.292893 5.79289C0.105357 5.98043 0 6.23478 0 6.5C0 6.76522 0.105357 7.01957 0.292893 7.20711C0.48043 7.39464 0.734784 7.5 1 7.5H11C11.2652 7.5 11.5196 7.39464 11.7071 7.20711C11.8946 7.01957 12 6.76522 12 6.5C12 6.23478 11.8946 5.98043 11.7071 5.79289C11.5196 5.60536 11.2652 5.5 11 5.5ZM19 0.5H1C0.734784 0.5 0.48043 0.605357 0.292893 0.792893C0.105357 0.98043 0 1.23478 0 1.5C0 1.76522 0.105357 2.01957 0.292893 2.20711C0.48043 2.39464 0.734784 2.5 1 2.5H19C19.2652 2.5 19.5196 2.39464 19.7071 2.20711C19.8946 2.01957 20 1.76522 20 1.5C20 1.23478 19.8946 0.98043 19.7071 0.792893C19.5196 0.605357 19.2652 0.5 19 0.5Z"
                fill="#4F5B67"
              />
            </svg>
            <span>Short Answers</span>
          </MenuItem>
        </Select>
      </FormControl>

      {options.map((option, index) => (
        <div key={option.id} className="option-Container">
          <div className={opstyle.row}>
            <p className="option-Letter">{String.fromCharCode(65 + index)}</p>

            <FormControl
              sx={{
                minWidth: "30%",
                marginTop: "-4.5%",
                marginLeft: "5%",
                width: "58%",
                textAlign: "left",

                background: "var(--layoutcolorlayout-01, #FFF)",
              }}
            >
              <InputLabel id={`option-label-${index}`} shrink={option.text !== ""}>
                Option {index + 1}
              </InputLabel>
              <TextField
                id={`option-${index}`}
                label={`Option ${index + 1}`}
                variant="outlined"
                value={option.text}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </FormControl>

            <svg
              id={index}
              width="50"
              height="50"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`tick ${showCard ? "active" : ""}`}
              onClick={() => {
                setSelectedOption(`option-${index}`);
                setShowCard(!showCard);
                settickstate(index);
              }}
              style={{
                marginLeft: "1rem",
                marginTop: "-5.5rem",
                width: "70px",
                height: "70px",
              }}
            >
              <rect
                x="0.5"
                y="0.5"
                width="70"
                height="70"
                rx="3.5"
                fill={showCard && tickstate == index ? "lightgreen" : "none"}
              />
              <g clip-path="url(#clip0_48_854)">
                <path
                  d="M25.167 32.4941L38.189 19.4707L40.1936 21.4739L25.167 36.5005L16.1514 27.4848L18.1545 25.4816L25.167 32.4941Z"
                  fill="#D6DADE"
                />
              </g>
              <rect
                x="0.5"
                y="0.5"
                width="70"
                height="70"
                rx="3.5"
                stroke="#D6DADE"
              />
              <defs>
                <clipPath id="clip0_48_854">
                  <rect
                    width="70"
                    height="70"
                    fill="white"
                    transform="translate(11 11)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      ))}
      <p className="addmore-Options" onClick={addOption}>
        + Add more options
      </p>

      {selectedOption && showCard && (
        <div>
          <Card
            sx={{
              maxWidth: 280,
              minHeight: 180,
              marginLeft: 89,
              marginTop: -35,
              border: 1,
              borderColor: "aliceblue",
              cursor: "pointer",
              width: "225px",
              height: "100px",
              flexShrink: "0",
              fill: "var(--layoutcolorlayout-01, #FFF)",
            }}
            onClick={handleCardClick}
          >
            
              <textarea
              rows = {8}
  cols = {25}    style={{color: 'var(--textcolortext-600, #4F5B67)',
  fontFamily: 'Manrope',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
border:'none',
outline:'none' }}

            
            onClick={handleCardClick} >
              
              </textarea>
           
          </Card>
        </div>
      )}
      <svg
        width="1540"
        height="1"
        viewBox="0 0 1540 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="line-Seperator"
      >
        <line y1="0.5" x2="1540" y2="0.5" stroke="#D6DADE" />
      </svg>

      <Button
        className="save_Btn"
        disabled={disableSave}
        onClick={displayupdated}
      >
        <p className="save_Text">Save</p>
      </Button>
      {/* <Button className="save_Btn" disabled={disableSave}>
        <p className="save_Text">Edit</p>
      </Button> */}

      {/* <img
        src={Dustbin}
        style={{
          marginLeft: "90rem",
          width: "20px",
          height: "20px",
          marginTop: "-3%",
        }}
      ></img> */}
      <Modal
        open={showupdate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          onClick: handleCloseSecond,
        }}
      >
        <QuestionUpdated x_mark_close={closeModal} />
      </Modal>
    </div>
  );
}

export default DropDownOptions;
