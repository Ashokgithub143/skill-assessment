import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const PasswordResetForm = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false); 

  const handleReset = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setValidationError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setValidationError("New password and confirm password do not match.");
      return;
    }
    setTimeout(() => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setValidationError("");
      setResetSuccess(true);
    }, 1000); 

  };

  const handleCancel = () => {
    onClose();
  };

  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0px 12px 64px 0px rgba(36, 37, 51, 0.1)",
        zIndex: 1,
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
        padding: "40px",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5">Password Reset</Typography>

        <TextField
          label="Current Password"
          type={showCurrentPassword ? "text" : "password"}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleCurrentPasswordVisibility}>
                  {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="New Password"
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleNewPasswordVisibility}>
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {validationError && (
          <Typography variant="body2" color="error">
            {validationError}
          </Typography>
        )}

        {resetSuccess && (
          <Typography variant="body2" color="success">
            Password reset successfully!
          </Typography>
        )}

        <div>
          <Button
            variant="text"
            sx={{ color: "#777777" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#777777", color: "#ffffff" }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </Box>
    </div>
  );
};
