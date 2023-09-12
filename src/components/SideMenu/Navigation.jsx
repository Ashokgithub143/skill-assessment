import { Menu } from "antd";

import { useNavigate } from "react-router-dom";

import React from "react";
import DashboardIco from "../../assets/img/dashboard.svg";
import QuestionsIco from "../../assets/img/questions.svg";
import Jobseeker from "../../assets/img/jobseeker.svg";
import EmployeeIco from "../../assets/img/employee.svg";
import SettingsIco from "../../assets/img/settings.svg";
import "../../styles/SideMenuStyles.css";
import { SideMenuStyles } from "./StyledExternalMui";

const SideMenu = () => {
  const navigate = useNavigate();
  const clearToken = () => {
    sessionStorage.clear();
  };

  const handleMenuItemClick = (key) => {
    switch (key) {
      case "1":
        navigate("/dashboard");
        break;
      case "11":
        navigate("/addquestions");
        break;
      case "12":
        navigate("/questionbank");
        break;
      case "3":
        navigate("/jobseeker");
        break;
      case "13":
        navigate("/assessmentdata");
        break;
      case "14":
        navigate("/manage-employee");
        break;
      case "5":
        navigate("/settings");
        break;
      case "6":
        clearToken();
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["1"]}
      className=""
      style={SideMenuStyles()}
      onSelect={({ key }) => handleMenuItemClick(key)}
      items={[
        {
          key: "1",
          icon: <img src={DashboardIco} alt=""></img>,
          label: "Dashboard",
        },
        {
          key: "2",
          icon: <img src={QuestionsIco} alt=""></img>,
          label: "Questions",
          children: [
            { key: "11", label: `Add Questions` },
            { key: "12", label: `Question Bank` },
          ],
        },
        {
          key: "3",
          icon: <img src={Jobseeker} alt=""></img>,
          label: "Jobseeker",
        },
        {
          key: "4",
          icon: <img src={EmployeeIco} alt=""></img>,
          label: "Employee",
          children: [
            { key: "13", label: `Assesment Data` },
            { key: "14", label: `Manage Employee` },
          ],
        },
        {
          key: "5",
          icon: <img src={SettingsIco} alt=""></img>,
          label: "Settings",
        },
        {
          key: "6",
          icon: <img src={require('../../assets/img/logout.png')} alt=""></img>,
          label: "Log Out",
        },
      ]}
    />
  );
};
export default SideMenu;
