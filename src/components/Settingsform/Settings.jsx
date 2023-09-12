import React from 'react';
import {SettingsForm} from "./SettingsForm";
import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '-45px',
    fontFamily:'Manrope'

  },
};


const DrawerStyled = styled(Toolbar)(({ theme }) => ({
  marginLeft: "240px",
}));

const DrawerHeight = styled(Toolbar)(({ theme }) => ({marginTop:"130px"}));

const Settings = () => {
  return (
    <>
    
    <DrawerStyled>
      <DrawerHeight>
      
    <div style={styles.container}>
    <SettingsForm />
    </div>
    </DrawerHeight>
    </DrawerStyled>
    </>
  );
};

export default Settings;
