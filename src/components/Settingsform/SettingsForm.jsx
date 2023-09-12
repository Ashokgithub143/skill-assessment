import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Profile from "../../assets/img/Profileset.png";
import { PasswordResetForm } from "../Settingsform/PasswordResetForm";
import "../Settingsform/Settings";
import "../Settingsform/SettingsModule.css";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { Modal, Backdrop } from "@mui/material";
import { departments, location } from "../../constants/constants";
import {
  EditButton,
  profilestyling,
  SaveChangesButtonstyling,
  changepassword,
} from "./StylingComponents";

export function SettingsForm(props) {
  const initialData = {
    firstName: "John",
    lastName: "Doe",
    Gender: "Male",
    selectedDate: "1990-01-01",
    email: "john@example.com",
    phoneNumber: "+1234567890",
    location: "Mumbai",
    address: "123 Main Street",
    educationLevel: "Bachelor",
    departments: "IT Application Development",
    employeeId: "2458",
    designation: "HR MANAGER",
    avatar: Profile,
  };

  const [formData, setFormData] = useState(initialData);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formdisplay, setFormDisplay] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const displayForm = () => {
    setFormDisplay(true);
  };

  const closeTheModal = () => {
    setFormDisplay(false);
  };

  const handleSaveChanges = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="settings-container">
      <div className="banner"></div>
      <div className="content">
        <Stack direction={"row"}>
          <img
            alt="prof"
            src={initialData.avatar}
            className="profile"
            style={profilestyling}
          />

          <Stack direction={"column"} className="profile-details">
            <Typography variant="h6" className="profile-name">
              <b>
                {formData.employeeId}-{formData.firstName} {formData.lastName}
              </b>
            </Typography>
            <Typography variant="caption" className="profile-role">
              {formData.designation} {formData.departments}
            </Typography>
          </Stack>
        </Stack>

        <Grid container spacing={2} className="info-Grid">
          <Grid item xs={5} md={6}>
            <Box p={2}>
              <Stack variant="h3">
                <Typography variant="h3" className="heading-SettingsForm">
                  Personal
                </Typography>
              </Stack>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={5} sm={5}>
                <Stack className="field-container">
                  <Typography className="field-label">First Name</Typography>
                  <TextField
                    id="firstName"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Stack>
              </Grid>

              <Grid item xs={5} sm={5}>
                <Stack>
                  <Typography className="field-label">Last Name</Typography>
                  <TextField
                    id="lastName"
                    name="lastName"
                    variant="outlined"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Stack>
              </Grid>

              <Grid item xs={10}>
                <Stack className="field-container">
                  <Typography className="field-label">Department</Typography>
                </Stack>
                <FormControl fullWidth>
                  <Select>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {departments.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={5} sm={5}>
                <Stack className="field-container">
                  <Typography className="field-label">Date of Birth</Typography>
                </Stack>
                <TextField
                  type="date"
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={8} sm={5}>
                <Stack className="field-container">
                  <Typography className="field-label">Gender</Typography>
                </Stack>
                <FormControl fullWidth>
                  <Select
                    name="Gender"
                    value={formData.Gender}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={10}>
                <Stack className="field-container">
                  <Typography className="field-label">
                    Education Level
                  </Typography>
                </Stack>
                <TextField
                  id="educationLevel"
                  name="educationLevel"
                  variant="outlined"
                  fullWidth
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Stack variant="h6" gutterBottom className="section-title">
                <Typography variant="h3" className="heading-SettingsForm">
                  Contact Details
                </Typography>
              </Stack>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Stack className="field-container">
                  <Typography className="field-label">Email</Typography>
                </Stack>
                <TextField
                  id="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={8}>
                <Stack className="field-container">
                  <Typography className="field-label">Phone Number</Typography>
                </Stack>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  variant="outlined"
                  fullWidth
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={8}>
                <Stack className="field-container">
                  <Typography className="field-label">Location</Typography>
                </Stack>
                <FormControl fullWidth>
                  <Select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {location.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <Stack>
                  <Typography className="field-label">Address</Typography>
                </Stack>
                <TextField
                  id="address"
                  name="address"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Modal
          open={formdisplay}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <PasswordResetForm onClose={closeTheModal} />
        </Modal>

        <Grid item xs={6} md={8}>
          <Button
            variant="outlined"
            style={SaveChangesButtonstyling}
            className="save-button"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>

          <Button style={changepassword} onClick={displayForm}>
            Change Password
          </Button>
        </Grid>
      </div>
    </div>
  );
}
