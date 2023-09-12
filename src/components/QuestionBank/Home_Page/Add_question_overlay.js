import add_q_style from "./Add_question_overlay.module.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Input,
  OutlinedInput,
  Modal,
  Backdrop,
} from "@mui/material";
import file_image from "../../../assets/img/File_image.png";
import Button from "@mui/material/Button";
import Topic_Success from "./topic_success";
import { useState } from "react";



function Add_question_overlay({ close_overlay }) {
  const [displaysuccess, setdisplaysuccess] = useState(false);
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
  function submitClick() {
    setdisplaysuccess(true);
    setTimeout(() => {
      setdisplaysuccess(false);
    }, 5000);
  }
  function close_modal() {
    setdisplaysuccess(false);
    close_overlay();
  }
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
  };
  return (
    <div className={add_q_style.form_Style}>
      <p className={add_q_style.add_Topics}>Add Topics</p>
      <hr className={add_q_style.line_Style}></hr>
      <FormControl
        required
        sx={{
          minWidth: "90%",
          marginTop: "1%",
          marginLeft: "4%",
          textAlign: "left",
          minHeight: "10%",
        }}
      >
        <InputLabel
          id="demo-simple-select-required-label"
          className={add_q_style.label_Options}
        >
          Select Department
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Department"
          placeholder="Select Department"
        >
          <MenuItem value=""></MenuItem>
          {departments.map((value) => (
            <MenuItem value={value} className={add_q_style.label_Options}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        required
        sx={{
          minWidth: "90%",
          marginTop: "1%",
          marginLeft: "4%",
          textAlign: "left",
          minHeight: "10%",
          marginTop: "4%",
        }}
      >
        <InputLabel
          htmlFor="department-input"
          className={add_q_style.label_Options}
        >
          Enter the topic name to be added...
        </InputLabel>
        <OutlinedInput
          id="department-input"
          placeholder="New Topic"
          label="New Topic"
        />
      </FormControl>
      <p className={add_q_style.choose_Filefromcomputer}>
        Choose a picture from your computer
      </p>
      <div className={add_q_style.rectangle}>
        <img src={file_image} className={add_q_style.file_Imageicon}></img>
        <p className={add_q_style.drop}>
          Drop a picture file here, or Browse to represent on the topics
        </p>
        <Input
    type="file"
    accept=".jpg,.jpeg,.png"
    id="file-input"
    sx={{
      
      
      marginLeft: "40%",
      
      
      marginTop: "-1%",
    }}
    onChange={(event) => handleFileChange(event)}
  />
        <p className={add_q_style.supports_Csv}>Supports : .jpeg or .png</p>
      </div>
      <div className={add_q_style.button_Holder}>
        <Button variant="text" className={add_q_style.cancel_Buttonclose} onClick={close_modal}>
          <p className={add_q_style.cancel_Word}>Cancel</p>
        </Button>
        <Button
          variant="contained"
          className={add_q_style.import_Buttonopen}
          onClick={submitClick}
        >
          <p className={add_q_style.import_Word}>Submit</p>
        </Button>
      </div>
      <Modal
        open={displaysuccess}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Topic_Success x_mark_close={close_modal} />
      </Modal>
    </div>
  );
}

export default Add_question_overlay;
