import Edit_Button from "../../../assets/img/Edit_Button.png";
import Delete_Button from "../../../assets/img/Delete_Button.png";
import Down_arrow from "../../../assets/img/down_arrow.png";
import question_style from "./question_display.module.css";
import DropDownOptions from "./DropDownOptions";
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import QuestionUpdated from "./quesupdated";
import dropstyle from "../Home_Page/dropdown.module.css";
import Add_question_overlay from "../Home_Page/Add_question_overlay";

import down_arrow from "../../../assets/img/Vector.png";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import ImportForm from "../Home_Page/importForm";
import import_symbol from "../../../assets/img/import_symbol.png";
import plus from "../../../assets/img/plus1.png";
import React from "react";
import { Button, Drawer } from "@mui/material";

function QuestionDisplay() {
  const childDivStylewithoutclick = {
    flex: "1",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: "4px",
    marginTop: "-20px",
    marginLeft: "35px",
  };
  const childDivStylewithclick = {
    display: "inline-flex",
    height: "56px",
    padding: "5px 275px 30px 20px",

    alignItems: "center",
    flexShrink: "0",
    borderRadius: "4px",
    border: "1px solid var(--textcolortext-300, #D6DADE)",
    background: "var(--layoutcolorlayout-01, #FFF)",
    marginLeft: "30%",
    marginTop: "10%",
  };
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const questions = [
    "What does the abbreviation HTML stand for?",
    "How many sizes of headers are available in HTML by default?",
    "What is the smallest header in HTML by default?",
    "What are the types of lists available in HTML?",
    "How to create an ordered list in HTML?",
    "HTML files are saved by default with the extension?",
    "We enclose HTML tags within?",
  ];
  const [state, setState] = React.useState({
    right: false,
  });

  const [showOptions, setshowOptions] = useState(false);
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

  function displayOptions(index) {
    setSelectedQuestionIndex(index);
    setshowOptions(true);
  }
  const handleClose = () => {
    setdisplaydropdown(false);
  };
  function close_drawer() {
    setState({ right: false });
  }

  const buttonStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "0",
    width: "20px",
    height: "20px",
    marginLeft: "2rem",
    marginTop: "-3rem",
  };

  const [dropdown, setdisplaydropdown] = useState(false);
  const [addtopicoverlay, setaddtopicoverlay] = useState(false);

  function displaydropdown() {
    setdisplaydropdown(true);
  }
  function Close_add_overlay() {
    setaddtopicoverlay(false);
  }
  const handleCloseSecond = () => {
    setaddtopicoverlay(false);
  };
  function displayaddtopicform() {
    setaddtopicoverlay(true);
  }
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div style={{ width: "50%", marginLeft: "-1%" ,marginTop:'20%'}}>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{
            marginBottom: "100px",
            color: "#848386",
            marginLeft: "30px",
            fontSize: "14px",
          }}
        >
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Questions
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Question Bank
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Frontend Developer
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Intermediate
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            HTML
          </Link>
        </Breadcrumbs>
      </div>
      <p
        style={{
          marginTop: "-40px",
          marginLeft: "30px",
          fontSize: "14px",
          fontFamily: "Manrope",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          marginBottom: "60px",
        }}
      >
        Available Questions in HTML
      </p>
      <Button
        variant="outlined"
        size="large"
        className={dropstyle.addtopic}
        onClick={displayaddtopicform}
        style={{ marginTop: "-17rem", marginLeft: "46rem" }}
      >
        <span className={dropstyle.plus_Sign}>+</span>
        <span className={dropstyle.topic_Text}>Add Topic</span>
      </Button>
      <button
        className={dropstyle.add_Questions}
        onClick={displaydropdown}
        style={{ marginTop: "-11rem", marginRight: "23rem" }}
      >
        <span className={dropstyle.add_q_Text}>Add Questions</span>
        <img src={down_arrow} alt="html" className={dropstyle.vector} />
      </button>
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
            <p className={dropstyle.add_Q}>Add Questions</p>
          </div>

          <div className={dropstyle.button_Style}>
            <button
              onClick={toggleDrawer("right", true)}
              className={dropstyle.button_style_Remover}
            >
              <img
                src={import_symbol}
                className={dropstyle.plus}
                alt="Import Symbol"
              />
              <p className={dropstyle.add_Q}>Import Questions</p>
            </button>
          </div>
        </div>
      </Modal>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: { width: "39%" },
          }}
        >
          <ImportForm close_form={close_drawer} />
        </Drawer>
      </React.Fragment>
      <div className={question_style.dropdown_Grind}>
        <div className={question_style.grid}>
          {questions.map((value, index) => (
            <div className={question_style.parent_Div}>
              <div className={question_style.parent_Divnull} key={index}>
                <div
                  style={
                    selectedQuestionIndex === index
                      ? childDivStylewithclick
                      : childDivStylewithoutclick
                  }
                >
                  <p className={question_style.question}>
                    {index + 1}
                    <sp>.</sp>
                    {value}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: selectedQuestionIndex === index ? "none" : "flex",
                }}
              >
                <img
                  src={Edit_Button}
                  className={question_style.edit_Button}
                ></img>
                <img
                  src={Delete_Button}
                  className={question_style.delete_Button}
                ></img>
                <button
                  style={buttonStyle}
                  onClick={() => displayOptions(index)}
                >
                  <img
                    src={Down_arrow}
                    className={question_style.down_Arrow}
                  ></img>
                </button>
              </div>
              {selectedQuestionIndex === index && <DropDownOptions />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionDisplay;
