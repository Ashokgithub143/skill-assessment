import React, { useState, useRef } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import basic from "../../assets/img/Basic.jpg";
import intermediate from "../../assets/img/Inter.jpg";
import advanced from "../../assets/img/Advanced.jpg";
import file_image from "../../assets/img/File_image.jpg";
import cancel_button from "../../assets/img/cancel_button.jpg";
import { Modal, Backdrop } from "@mui/material";
import Topic_Success from "./Topic_Success";
import { context } from "../../Context/SharedData";

import import_style from "./importForm.module.css"; // Import the CSS module here.

function ImportForm(props) {
  const sharedData = React.useContext(context);
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
  const ref = useRef();
  const [validate, setValidate] = useState(false);
  const [fileName, setFileName] = useState("");
  const [displaysuccess, setDisplaysuccess] = useState(false);
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  function submitClick() {
    setDisplaysuccess(true);
  }

  function closeModal() {
    setDisplaysuccess(false);
  }

  const dragHandler = (event) => {
    event.preventDefault();
    ref.current.files = event.dataTransfer.files[0];
    console.log(event.dataTransfer.files[0]);
  };

  const changeHandler = (event) => {
    if(event.target.files[0].name.endsWith('.csv')){
    setValidate(false);
    setFileName(event.target.files[0].name);
    const file = event.target.files[0];
    const fr = new FileReader();
    fr.readAsText(file);
    fr.addEventListener("load", () => {
      const csv = fr.result;

      const arr = csv.split("\r\n").map((line) => {
        return line.split(",");
      });

      console.log(csv);
    });
  }
  else{
    setFileName("Please share a .csv file!");
    setValidate(true);
  }
  };

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <p className={import_style.heading}>Import questions from CSV file</p>

      <p className={import_style.tool_Guide_Line}>
        This tool allows you to import (or merge) questions to your <br></br>{" "}
        question bank from a CSV file.
      </p>
      <img
        src={cancel_button}
        className={import_style.x_mark}
        alt="Cancel"
        onClick={props.closeDrawer}
      />
      <hr className={import_style.line} />

      <div className={import_style.download_Container}>
        <p className={import_style.download_template}>Download Template</p>

        <button className={import_style.download_button}>
          <p className={import_style.text_inside_button}>Download Template</p>
        </button>
      </div>

      <p className={import_style.match}>
        Download the CSV file template to match your question
      </p>
      <hr className={import_style.line} />

      <FormControl required sx={{ marginTop: "0.5rem", width: "100%" }}>
        <InputLabel
          id="demo-simple-select-required-label"
          className={import_style.label_options}
        >
          Select Department
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Department"
          className={import_style.dropdown_style}
        >
          <MenuItem value="">
           
          </MenuItem>
          {sharedData.departmentNames.map((value) => (
            <MenuItem
              value={value}
              key={value}
              className={import_style.label_options}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel
          id="demo-multiple-checkbox-label"
          className={import_style.label_options2}
        >
          Select Topics
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          className={import_style.dropdown_style2}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              className={import_style.label_options2}
            >
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          <p className={import_style.Select_Level}>Select Levels</p>
        </FormLabel>
        <br></br>
        <div className={import_style.container}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Basic"
              control={<Radio />}
              label={
                <div>
                  <div className={import_style.pair}>
                    <img
                      src={basic}
                      alt="Basic"
                      className={import_style.network1}
                    />
                    Basic
                  </div>
                </div>
              }
              className={import_style.basic}
            />
            <FormControlLabel
              value="Intermediate"
              control={<Radio />}
              label={
                <div>
                  <div className={import_style.pair}>
                    <img
                      src={intermediate}
                      alt="Intermediate"
                      className={import_style.network1}
                    />
                    Intermediate
                  </div>
                </div>
              }
              className={import_style.Intermediate}
            />
            <FormControlLabel
              value="Advanced"
              control={<Radio />}
              label={
                <div>
                  <div className={import_style.pair}>
                    <img
                      src={advanced}
                      alt="Advanced"
                      className={import_style.network1}
                    />
                    Advanced
                  </div>
                </div>
              }
              className={import_style.Advanced}
            />
          </RadioGroup>
        </div>
      </FormControl>
      <p className={import_style.choose_file}>
        Choose a CSV file from your computer
      </p>

      <label
        htmlFor="csv"
        className={import_style.encompass}
        onDrop={dragHandler}
        style = {{borderColor: `${validate && 'red'}`}}
      >
        <input
          type="file"
          accept=".csv"
          name="csv"
          id="csv"
          className={import_style.csv_Input}
          onChange={changeHandler}
          onDrop={dragHandler}
          ref={ref}
          hidden
        />
        {ref.current && ref.current.files && ref.current.files[0] ? (
          <p className={import_style.csv_Filename}>{fileName}</p>
        ) : (
          <>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "4rem" }}
            >
              description
            </span>
            <h3 className={import_style.csv_Heading}>
              Drop your CSV file here, or Browse
            </h3>
            <p className={import_style.csv_Subheading}>Supports: CSV</p>
          </>
        )}
      </label>

      <div className={import_style.divpos}>
        <Button
          variant="text"
          className={import_style.cancel}
          onClick={props.closeDrawer}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className={import_style.import}
          onClick={submitClick}
        >
          Import
        </Button>
        <Modal
          open={displaysuccess}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Topic_Success x_mark_close={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default ImportForm;
