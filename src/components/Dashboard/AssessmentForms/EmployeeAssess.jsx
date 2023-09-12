import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { React, useState, Fragment, useContext } from "react";
import "./EmployeeAssess.css";
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
import Paper from "@mui/material/Paper";
import { departments, topics, names } from "../../../constants/constants";
import styles from "./Assessments.module.css";
import basic from "../../../assets/img/Basic.jpg";
import intermediate from "../../../assets/img/Inter.jpg";
import advanced from "../../../assets/img/Advanced.jpg";
import upskill from "../../../assets/img/Upskill.png";
import styles2 from "./JobSeeker.module.css";
import { AssignedModal } from "../AssignedSuccessfullyModal/AssignedModal";
import { useEffect } from "react";
import {
  JobCard,
  CreateAssessmentButton,
  CreateAssessmentHeading,
  CreateAssessmentSubHeading,
} from "./StyledElementsEmployee";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { context } from "../../../Context/SharedData";

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

const EmployeeAssess = () => {
  const sharedData = useContext(context);

  const [state, setState] = useState({
    left: false,
  });
  const [data, setData] = useState({
    ID: "",
    Department: "",
    Level: "",
    employeeProfile: "",
    noOfQuestions: "",
    dateOfCompletion: "",
    description: "",
  });
  const [profile, setProfile] = useState([]);
  const [modal, setModal] = useState(false);
  const [topic, setTopic] = useState([]);

  const changeHandler = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      ["topics"]: topic,
    }));
  }, [topic]);

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

  const sendButtonClickHandler = (event) => {
    if (Object.values(data).includes("") || Object.keys(data).length < 8) {
      toast.error("Please fill in all data");
    } else {
      setModal(true);
      setState({ ...state, ["right"]: false });
      console.log(data);
      setData({
        ID: "",
        Department: "",
        Level: "",
        employeeProfile: "",
        noOfQuestions: "",
        dateOfCompletion: "",
        description: "",
      });
      setTopic([]);
    }
  };

  return (
    <>
      {modal && (
        <AssignedModal
          setModal={setModal}
          details="The employee assessment has been successfully sent through their respective email id"
        />
      )}
      <JobCard>
        <CreateAssessmentHeading>Setup Employee</CreateAssessmentHeading>
        <CreateAssessmentHeading>Assessment</CreateAssessmentHeading>
        <CreateAssessmentSubHeading>
          Create asssessment for employees to upgrade their skills
        </CreateAssessmentSubHeading>

        <CreateAssessmentButton onClick={toggleDrawer("right", true)}>
          CREATE ASSESSMENT
        </CreateAssessmentButton>
        <img
          id="profile_Image"
          src={require("../../../assets/img/Priya.png")}
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

              <div id="heading" style={{ marginBottom: "3rem" }}>
                <Typography variant="h4">Create Employee Assessment</Typography>
              </div>

              <TextField
                id="employeeAssessmentID"
                label="Assessment ID"
                variant="outlined"
                placeholder="Add assessment id"
                inputProps={{
                  style: {
                    height: "1rem",
                  },
                }}
                name="ID"
                onChange={changeHandler}
                value={data.ID}
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
                  label="Department"
                  sx={{ height: "4.5rem" }}
                  name="Department"
                  onChange={changeHandler}
                  value={data.Department}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {sharedData.departmentNames.map((value) => (
                    <MenuItem value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ minWidth: "100%", marginTop: "2rem" }}>
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
                    name="Level"
                    onChange={changeHandler}
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
                    name="Level"
                    onChange={changeHandler}
                    sx={{ marginLeft: "0.5rem" }}
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
                    name="Level"
                    onChange={changeHandler}
                    sx={{ marginLeft: "0.5rem" }}
                  />
                  <FormControlLabel
                    value="Upskill"
                    control={<Radio />}
                    label={
                      <div>
                        <div className="pair">
                          <img
                            src={upskill}
                            alt="Upskill"
                            className={styles2.upskill}
                          />
                          Upskill
                        </div>
                      </div>
                    }
                    name="Level"
                    onChange={changeHandler}
                    sx={{ marginLeft: "0.5rem" }}
                  />
                </RadioGroup>
              </FormControl>

              <FormControl sx={{ marginTop: "1rem" }}>
                <TextField
                  id="employeeProfile"
                  label="Employee Profile"
                  variant="outlined"
                  placeholder="Enter the employee profile"
                  inputProps={{
                    style: {
                      height: "1rem",
                    },
                  }}
                  name="employeeProfile"
                  onChange={changeHandler}
                  value={data.employeeProfile}
                />
              </FormControl>

              <FormControl sx={{ marginTop: "2rem" }}>
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
                    inputProps={{
                      style: {
                        height: "1rem",
                        width: "15vw",
                      },
                    }}
                    type="number"
                    name="noOfQuestions"
                    onChange={changeHandler}
                    value={data.noOfQuestions}
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
                    name="dateOfCompletion"
                    onChange={changeHandler}
                    value={data.dateOfCompletion}
                  />
                  <p style={{ fontSize: "1rem", color: "rgb(157, 150, 150)" }}>
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
                name="description"
                onChange={changeHandler}
                value={data.description}
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

export { EmployeeAssess };
