import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export const JobCard = styled(Paper)(({ theme }) => ({
    position: "relative",
    height: "18rem",
    width: "100%",
    borderRadius: "0.8rem",
    background: "linear-gradient(to left, #DFF3FB, white)",
    boxShadow: theme.shadows[3],
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "1rem 2rem 1rem 0rem",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "0.8rem",
      zIndex: -1,
    },
  }));

  export const CreateAssessmentButton = styled(Button)(() => ({
    backgroundColor: "rgba(123, 204, 237, 1)",
    height: "42px",
    width: "198px",
    lineHeight: "19.12px",
    fontWeight: "600",
    color: "black",
    fontFamily: "Manrope",
    fontSize: "14px",
    border: "0.2rem solid rgba(123, 204, 237, 1)",
    color: "#373F47",
    marginTop: "3rem",

    "&:hover": {
      backgroundColor: "#99d7ef",
    },
  }));

  export const CreateAssessmentHeading = styled(Typography)(() => ({
    fontFamily: "Manrope",
    textAlign: "right",
    fontWeight: "400",
    fontSize: "26px",
    lineHeight: "38.25px",
    color: "#151515",
  }));

  export const CreateAssessmentSubHeading = styled(Typography)(() => ({
    fontFamily: "Manrope",
    textAlign: "right",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "19px",
    textAlign: "right",
    color: "#575757D1",
  }));