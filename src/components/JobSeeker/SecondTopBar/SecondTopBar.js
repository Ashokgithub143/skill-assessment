import React from "react";
import "./SecondTopBar.css";
import ModalComponent from "./ModalComponent";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { plussvg } from "../../../constants/EmployeeAssessmentConstant";

import Offcanvas from "react-bootstrap/Offcanvas";
import styles2 from "../../Dashboard/AssessmentForms/JobSeeker.module.css";
import advanced from "../../../assets/img/Advanced.jpg";
import intermediate from "../../../assets/img/Inter.jpg";
import basic from "../../../assets/img/Basic.jpg";

import { departments } from "../../../constants/constants";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

function SecondTopBar() {
  const [showUnderline, setShowUnderline] = useState(true);
  const [showUnderline1, setShowUnderline1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [jobseekerEmail, setJobseekerEmail] = useState("");
  const [assessmentDetail, setAssessmentDetail] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState("");
  const [dateOfCompletion, setDateOfCompletion] = useState("");
  const [description, setDescription] = useState("");

  const topics = [
    "Design Psychology",
    "Research Methods",
    "Information Architecture",
    "Interaction Design",
  ];

  const handleJobseekerEmailChange = (event) => {
    setJobseekerEmail(event.target.value);
  };

  const handleAssessmentDetailChange = (event) => {
    setAssessmentDetail(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopics(event.target.value);
  };

  const handleNumberOfQuestionsChange = (event) => {
    setNumberOfQuestions(event.target.value);
  };

  const handleDateOfCompletionChange = (event) => {
    setDateOfCompletion(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      jobseekerEmail,
      assessmentDetail,
      selectedDepartment,
      selectedLevel,
      selectedTopics,
      numberOfQuestions,
      dateOfCompletion,
      description,
    };

    console.log(formData);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    if (isClicked) {
      setIsClicked1(!isClicked1);
      setIsClicked(!isClicked);
    }
    setShowUnderline1(false);
    setShowUnderline(true);
  };
  const handleClick1 = () => {
    if (!isClicked1) {
      setIsClicked(!isClicked);
      setIsClicked1(!isClicked1);
      navigate("/employeeassessmentdata");
    }
    setShowUnderline(false);
    setShowUnderline1(true);
  };
  
  return (
    <>
      <div id="second-top-bar">
        <div className="second-top-bar-list">
          <a
            id="assessment-list"
            onClick={handleClick}
            className={isClicked ? "clicked" : ""}
          >
            Assessment list
          </a>
          {showUnderline && <div id="underline-blue"></div>}
          <a
            id="available-list"
            onClick={handleClick1}
            className={isClicked1 ? "clicked" : ""}
          >
            Available Assessment
          </a>
          {showUnderline1 && <div id="underline-blue1"></div>}
        </div>
        <div>
          <div className="sort-create-button">
            <button
              id="create-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#j-offcanvas"
              onClick={handleShow}
            >
              <div
                id="svg-container-button"
                dangerouslySetInnerHTML={{ __html: plussvg }}
              ></div>
              <h3 className="create-Assessment" id="create-assessment">
                Create Assessment
              </h3>
            </button>
            <div className="sort-button-component">
              <ModalComponent></ModalComponent>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "fixed", height: "100%" }}>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          className="off-Canvas-React-Bootstrap"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h1 className="offcanvas-Header">Create Jobseeker Assessment </h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form onSubmit={handleFormSubmit}>
              <div className="pb-4">
                <input
                  type="email"
                  className="form-control"
                  id="jemail"
                  placeholder="Enter jobseeker email id"
                  name="jemail"
                  value={jobseekerEmail}
                  onChange={handleJobseekerEmailChange}
                />
              </div>

              <br></br>
              <div>
                <h1 className="form-label mb-3">Assessment Detail</h1>
                <input
                  type="text"
                  className="form-control"
                  id="assessment-detail"
                  placeholder="Assessment ID"
                  name="assessment-detail"
                  value={assessmentDetail}
                  onChange={handleAssessmentDetailChange}
                />
                <label
                  className="form-label text-muted ms-3"
                  htmlFor="assessment-detail"
                  style={{ fontSize: 10 }}
                >
                  Please enter the title of employee assessment, that helps you
                  to manage
                </label>
              </div>
              <FormControl sx={{ marginTop: "2rem" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  name="Department"
                  label="Department"
                  sx={{ height: "4.5rem" ,width:'526px'}}
                  value={selectedDepartment}
                onChange={handleDepartmentChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {departments.map((value) => (
                    <MenuItem value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div>
                <label className="form-label text-secondary">
                  Select Levels
                </label>
              </div>
              <div className="d-flex flex-row">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="basic"
                    defaultValue="basic"
                    name="levels"
                    checked={selectedLevel === "basic"}
                    onChange={handleLevelChange}
                  />
                  <img
                    id="level-Image"
                    src={basic}
                    alt="Basic"
                    className={styles2.network1}
                  />
                  <label className="form-check-label me-5" htmlFor="basic">
                    Basic
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="intermediate"
                    name="levels"
                    defaultValue="intermediate"
                    checked={selectedLevel === "intermediate"}
                    onChange={handleLevelChange}
                  />
                  <img
                    id="level-Image"
                    src={intermediate}
                    alt="Intermediate"
                    className={styles2.network1}
                  />
                  <label
                    className="form-check-label me-5"
                    htmlFor="intermediate"
                  >
                    Intermediate
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="levels"
                    id="advanced"
                    defaultValue="advanced"
                    checked={selectedLevel === "advanced"}
                    onChange={handleLevelChange}
                  />

                  <img
                    id="level-Image"
                    src={advanced}
                    alt="Advanced"
                    className={styles2.network1}
                  />
                  <label className="form-check-label">Advanced</label>
                </div>
              </div>

              <br></br>

              <FormControl fullWidth>
                <InputLabel>Select Topics</InputLabel>
                <Select
                  multiple
                  value={selectedTopics}
                  onChange={handleTopicChange}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {topics.map((topic) => (
                    <MenuItem key={topic} value={topic}>
                      <Checkbox checked={selectedTopics.includes(topic)} />
                      <ListItemText primary={topic} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br></br>
              <br></br>

              <div className="d-flex flex-row justify-content-between">
                <div>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="No. Of Question"
                    id="no-questions"
                    value={numberOfQuestions}
                    onChange={handleNumberOfQuestionsChange}
                  />
                  <label
                    className="form-label text-muted ms-3"
                    htmlFor="no-questions"
                    style={{ fontSize: 10 }}
                  >
                    Time alloted for a question is sec
                  </label>
                </div>
                <div>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date of completion"
                    id="date-completion"
                    value={dateOfCompletion}
                    onChange={handleDateOfCompletionChange}
                  />
                  <label
                    className="form-label text-muted ms-3"
                    htmlFor="no-questions"
                    style={{ fontSize: 10 }}
                  >
                    Valid till 11:59PM on the selected dates
                  </label>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  placeholder="Add Descriptions"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="d-flex flex-row justify-content-end pt-4">
                <button
                  className="btn me-4"
                  data-bs-dismiss="offcanvas"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-outline-primary w-25">
                  Send Mail
                </button>
              </div>
            </form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
export default SecondTopBar;
