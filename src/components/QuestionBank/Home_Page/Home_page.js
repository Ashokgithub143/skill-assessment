import React, { useState } from "react";
import Dropdown from "./dropdown";
import Topics from "./topics";
import DepartmentSuccess from "./department_success";
import styles from './Home_Page.module.css';
import SideMenu from '../../SideMenu/SideMenu';
import Header from '../../Header/Header';
import { DrawerHeight, DrawerStyled } from "./StyledElementsHomeMui";




function Home_Page() {
  const [departmentAdded, setDepartmentAdded] = useState(false);
  const handleDepartmentSuccess = () => {
    setDepartmentAdded(true);

    setTimeout(() => {
      setDepartmentAdded(false);
    }, 3000);
  };

  return (
    <div className = {styles.encompassGrid}>

    <DrawerStyled>
      <DrawerHeight>
    <div style={{ width: "100%" }}>
      <Dropdown onDepartmentSuccessChange={handleDepartmentSuccess} />
      <Topics />
      {departmentAdded && <DepartmentSuccess />}
    </div>
    </DrawerHeight>
    </DrawerStyled>
    </div>
  );
}

export default Home_Page;
