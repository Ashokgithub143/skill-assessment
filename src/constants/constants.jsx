import Group1 from '../assets/img/GroupVector1.png'
import Group2 from '../assets/img/GroupVector2.png'
import Group3 from '../assets/img/GroupVector3.png'
import Group4 from '../assets/img/GroupVector4.png'
import Group5 from '../assets/img/GroupVector5.png'
import Group6 from '../assets/img/GroupVector6.png'
import { Grid } from "@mui/material";
import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

export const exploreCardData = [
    {
      title: "Add Questions",
      data: "Last created on 27 june 2022 08:00am ",
      images: Group1,
      routelink:"/addquestions"
    },
    {
      title: "Question Bank",
      data: "Last created on 27 june 2022 08:00am",
      images: Group2,
      routelink:"/questionbank"
    },
    {
      title: "Jobseeker Assessments",
      data: "Last created on 27 june 2022 08:00am",
      images: Group3,
      routelink:"/jobseeker"
    },
    {
      title: "Employee Assessments",
      data: "Last created on 27 june 2022 08:00am",
      images: Group4,
      routelink:"/assessmentdata"
    },
    {
      title: "Employee Management",
      data: "Last created on 27 june 2022 08:00am",
      images: Group5,
      routelink:"/manageemployee"
    },
    {
      title: "Request Received",
      data: "Last created on 27 june 2022 08:00am",
      images: Group6,
      routelink:"/ApproveEmployee"
    },
    
  ];

  export const departments = [
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

  export const topics = [
    "Applications Development",
    "Design Psychology",
    "Data Visualization",
    "Data Science",
    "DevOps",
    "DotNet",
    "ETL Development",
    "Frontend Development",
    "Backend Development",
  ];

 export const names = [
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

  export const location = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
  ];

  export const DrawerStyled = styled(Toolbar)(({ theme }) => ({
    marginLeft: "210px",
  }));

  export const DrawerHeight = styled(Toolbar)(({ theme }) => ({marginTop:"150px"

  }));