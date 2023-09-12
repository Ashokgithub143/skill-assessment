import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { React, useState, Fragment, useContext } from "react";
import "./JobSeeker.css";
import { styled, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import styles2 from "./JobSeeker.module.css";
import {
  CreateAssessmentSubHeading,
  CreateAssessmentHeading,
  CreateAssessmentButton,
  JobCard,
} from "./StyledElements";
import styles from "./Assessments.module.css";
import { departments, topics } from "../../../constants/constants";
import basic from "../../../assets/img/Basic.jpg";
import intermediate from "../../../assets/img/Inter.jpg";
import advanced from "../../../assets/img/Advanced.jpg";
import { AssignedModal } from "../AssignedSuccessfullyModal/AssignedModal";
import { context } from "../../../Context/SharedData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

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

const JobSeeker = () => {
  const sharedData = useContext(context);

  const [state, setState] = useState({
    right: false,
  });
  const [topic, setTopic] = useState([]);
  const [modal, setModal] = useState(false);
  const [jobseekerData, setJobseekerData] = useState({
    Email: "",
    AssessmentID: "",
    Department: "",
    levels: "",
    noOfQuestions: "",
    Date: "",
    description: "",
  });
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    setJobseekerData((prev) => ({
      ...prev,
      ["topics"]: topic,
    }));
  }, [topic]);

  const changeHandler = (event) => {
    setJobseekerData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const sendButtonClickHandler = (event) => {
    if (
      Object.values(jobseekerData).includes("") ||
      Object.keys(jobseekerData).length < 8
    ) {
      toast.error("Please fill in all data");
    } else if (!emailRegex.test(jobseekerData.Email)) {
      toast.warning("Please enter a valid email ID.");
    } else {
      setModal(true);
      setState({ ...state, ["right"]: false });
      console.log(jobseekerData);
      setJobseekerData({
        Email: "",
        AssessmentID: "",
        Department: "",
        levels: "",
        noOfQuestions: "",
        Date: "",
        description: "",
      });
      setTopic([]);
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTopic(typeof value === "string" ? value.split(",") : value);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      {modal && (
        <AssignedModal
          setModal={setModal}
          details="The jobseeker assessment has been successfully sent through their respective email id"
        />
      )}
      <JobCard>
        <CreateAssessmentHeading>Setup Job Seeker</CreateAssessmentHeading>
        <CreateAssessmentHeading>Assessment</CreateAssessmentHeading>
        <CreateAssessmentSubHeading>
          Create asssessments for Job Seekers/Freshers
        </CreateAssessmentSubHeading>

        <CreateAssessmentButton onClick={toggleDrawer("right", true)}>
          CREATE ASSESSMENT
        </CreateAssessmentButton>
        <img
          id="group1"
          src={require("../../../assets/img/Mask group.png")}
        ></img>
      </JobCard>

      <div>
        {["right"].map((anchor) => (
          <Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{
                sx: {
                  width: "39%",
                  padding: "2.5rem 2.5rem 0rem 2.5rem",
                },
              }}
            >
              <span
                className="material-symbols-outlined cross_Button"
                onClick={() => {
                  setState({ ...state, ["right"]: false });
                }}
              >
                close
              </span>

              <div id="heading" className={styles.jobseeker_Title}>
                <Typography variant="h4">
                  Create Jobseeker Assessment
                </Typography>
              </div>

              <TextField
                id="jobseekerEmail"
                name="Email"
                label="Email ID"
                variant="outlined"
                placeholder="Enter jobseeker email id"
                inputProps={{
                  style: {
                    height: "1.5rem",
                    fontSize: "1.5rem",
                  },
                }}
                onChange={changeHandler}
                value={jobseekerData.Email}
              />

              <Typography
                variant="h6"
                className={styles.details_Title}
                sx={{
                  marginTop: "3rem",
                  fontSize: "1.7rem",
                  color: "gray",
                }}
              >
                Assessment Detail
              </Typography>

              <TextField
                id="jobseekerEmail"
                name="AssessmentID"
                label="Assessment ID"
                variant="outlined"
                placeholder="Add assessment id"
                inputProps={{
                  style: {
                    height: "1.5rem",
                    fontSize: "1.5rem",
                  },
                }}
                sx={{ marginTop: "2rem" }}
                onChange={changeHandler}
                value={jobseekerData.AssessmentID}
              />
              <Typography
                variant="p"
                sx={{
                  color: "gray",
                  marginTop: "0.5rem",
                  marginLeft: "1.5rem",
                }}
              >
                Please enter the ID of assessment, that will help you to manage.
              </Typography>

              <FormControl sx={{ marginTop: "2rem" }}>
                <InputLabel id="demo-simple-select-required-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  name="Department"
                  label="Department"
                  sx={{ height: "4.5rem" }}
                  onChange={changeHandler}
                  value={jobseekerData.Department}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {sharedData.departmentNames.map((value) => (
                    <MenuItem value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ marginTop: "3rem" }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Select Levels
                </FormLabel>
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
                        <div className="pair">
                          <img
                            src={basic}
                            alt="Basic"
                            className={styles2.network1}
                          />
                          Basic
                        </div>
                      </div>
                    }
                    onChange={changeHandler}
                    name="levels"
                  />

                  <FormControlLabel
                    value="Intermediate"
                    control={<Radio />}
                    label={
                      <div>
                        <div className="pair">
                          <img
                            src={intermediate}
                            alt="Intermediate"
                            className={styles2.network1}
                          />
                          Intermediate
                        </div>
                      </div>
                    }
                    onChange={changeHandler}
                    name="levels"
                    sx={{ marginLeft: "1.5rem" }}
                  />
                  <FormControlLabel
                    value="Advanced"
                    control={<Radio />}
                    label={
                      <div>
                        <div className="pair">
                          <img
                            src={advanced}
                            alt="Advanced"
                            className={styles2.network1}
                          />
                          Advanced
                        </div>
                      </div>
                    }
                    onChange={changeHandler}
                    name="levels"
                    sx={{ marginLeft: "1.5rem" }}
                  />
                </RadioGroup>
              </FormControl>

              <FormControl sx={{ marginTop: "1rem" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Select Topics
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={topic}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  sx={{ height: "4.5rem" }}
                >
                  {topics.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={topic.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div className={styles.input_Div}>
                <div className={styles.column_Layout}>
                  <TextField
                    id="outlined-error-helper-text"
                    label="No. Of Questions"
                    defaultValue=""
                    placeholder="No. Of Questions"
                    helperText=""
                    inputProps={{
                      style: {
                        height: "1rem",
                        width: "15vw",
                      },
                    }}
                    type="number"
                    onChange={changeHandler}
                    name="noOfQuestions"
                    value={jobseekerData.noOfQuestions}
                  />

                  <p className={styles.validUntil}>
                    Time allocated for a question is 90 sec.
                  </p>
                </div>

                <div className={styles.column_Pattern}>
                  <input
                    type="date"
                    id="date-picker"
                    label="Date of completion"
                    className={styles.date_Picker}
                    onChange={changeHandler}
                    name="Date"
                    value={jobseekerData.Date}
                  />
                  <p className={styles.validUntil}>
                    Valid till 11:59PM of the selected date
                  </p>
                </div>
              </div>

              <TextField
                id="filled-textarea"
                label="Add Descriptions"
                placeholder="Add Descriptions"
                multiline
                variant="filled"
                inputProps={{
                  style: {
                    height: "8rem",
                  },
                }}
                sx={{ marginTop: "2rem" }}
                onChange={changeHandler}
                name="description"
                value={jobseekerData.description}
              />

              <div className={styles.button_Section}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setState({ ...state, ["right"]: false });
                  }}
                  color="error"
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ marginLeft: "3rem" }}
                  onClick={sendButtonClickHandler}
                >
                  Send Mail
                </Button>
              </div>
            </Drawer>
          </Fragment>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export { JobSeeker };
