import React from 'react';
import ProfileCard from './ProfileCard';
import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '-45px',
  },
};

const DrawerStyled = styled(Toolbar)(({ theme }) => ({
  marginLeft: "70px",
}));



const ManageEmployeeParent = () => {
  return (
    <>
    
    <DrawerStyled>
      
    <div style={styles.container}>
      <ProfileCard />
    </div>
   
    </DrawerStyled>
    </>
  );
};

export default ManageEmployeeParent;
