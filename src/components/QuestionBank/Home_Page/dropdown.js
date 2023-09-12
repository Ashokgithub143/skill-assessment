import dropstyle from "./dropdown.module.css";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import { useContext, useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import down_arrow from "../../../assets/img/Vector.png";
import import_symbol from "../../../assets/img/import_symbol.png";
import plus from "../../../assets/img/plus1.png";
import { Backdrop, Modal, Box, Drawer } from "@mui/material";
import ImportForm from "./importForm";
import Add_question_overlay from "./Add_question_overlay";

import DepartmentSuccess from "./department_success";
import Home_Page from "./Home_page";
import { context } from "../../../Context/SharedData";

function Dropdown({ onDepartmentSuccessChange }) {
  const sharedData = useContext(context);

  const [state, setState] = React.useState({
    right: false,
  });
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
  const [options, setOptions] = useState(departments);
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdown, setdisplaydropdown] = useState(false);
  const [addtopicoverlay, setaddtopicoverlay] = useState(false);
  const [displaydepsuccess, setdisplaydepsuccess] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    setdisplaydropdown(false);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function displaydropdown() {
    setdisplaydropdown(true);
  }
  function displayaddtopicform() {
    setaddtopicoverlay(true);
  }
  const handleClose = () => {
    setdisplaydropdown(false);
  };
  const handleCloseSecond = () => {
    setaddtopicoverlay(false);
  };
  function Close_add_overlay() {
    setaddtopicoverlay(false);
  }
  function close_drawer() {
    setState({ right: false });
  }
  const textFieldStyle = {
    input: {
      border: "none",
    },
  };
  const handleInputClick = (e) => {
    // Prevent the click event from bubbling up to parent elements
    e.stopPropagation();
  };

  const add_option = (e) => {
    e.stopPropagation();
    const inputValue = document.getElementById("add-option-input").value; 
    if (inputValue.trim() !== "") {
    
      setOptions([...options, inputValue]);
      setdisplaydepsuccess(true);
      onDepartmentSuccessChange(true);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={3.5}>
          <FormControl
            required
            sx={{ minWidth: "100%", marginTop: "0.5rem", width: "100%" }}
          >
            <InputLabel
              id="demo-simple-select-required-label"
              className={dropstyle.label_Options}
            >
              Select Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              label="Department"
              className={dropstyle.dropdown_Style}
            >
              <MenuItem className={dropstyle.enter_Text}>
                <input
                  type="text"
                  placeholder="Type here..."
                  className={dropstyle.custom_TextField}
                  onClick={handleInputClick}
                  id="add-option-input"
                ></input>
                <button
                  className={dropstyle.add_Button}
                  variant="outlined"
                  onClick={add_option}
                >
                  <p className={dropstyle.add_Text}>Add</p>
                </button>
              </MenuItem>
             
              {sharedData.departmentNames.map((value) => (
                <MenuItem
                  value={value}
                  key={value}
                  className={dropstyle.label_Options}
                >
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
       
        <Grid item xs={3}>
          <Button
            variant="outlined"
            size="large"
            className={dropstyle.addtopic}
            onClick={displayaddtopicform}
          >
            <span className={dropstyle.plus_Sign}>+</span>
            <span className={dropstyle.topic_Text}>Add Topic</span>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <button className={dropstyle.add_Questions} onClick={displaydropdown}>
            <span className={dropstyle.add_q_Text}>Add Questions</span>
            <img src={down_arrow} alt="html" className={dropstyle.vector} />
          </button>
          <Modal
            open={dropdown}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
              onClick: handleClose,
            }}
          >
            <div className={dropstyle.overlay_Content}>
              <div className={dropstyle.button_Style}>
                <img src={plus} className={dropstyle.plus} alt="Plus Icon" />
                <p className={dropstyle.import_QuestionsText}>Add Questions</p>
              </div>
              <div className={dropstyle.button_Style}>
                <button onClick={toggleDrawer("right", true)} className={dropstyle.button_style_Remover}>
                  <div>
                  <img
                    src={import_symbol}
                    className={dropstyle.plus}
                    alt="Import Symbol"
                  />
                  <p className={dropstyle.import_QuestionsText}>Import Questions</p>
                  </div>
                </button>
              </div>
            </div>
          </Modal>
          <Modal
            open={addtopicoverlay}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
              onClick: handleCloseSecond,
            }}
          >
            <Add_question_overlay close_overlay={Close_add_overlay} />
          </Modal>
        </Grid>
      </Grid>
      <br />
      <br />
      <p className={dropstyle.avail_Text}>Available Topics</p>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: { width: "30%" },
          }}
        >
          <ImportForm close_form={close_drawer} />
        </Drawer>
      </React.Fragment>
    
    </div>
  );
}

export default Dropdown;
