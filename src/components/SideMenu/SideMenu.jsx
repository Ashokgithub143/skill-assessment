import * as React from 'react';
import PropTypes from 'prop-types'; 
import styled from '@emotion/styled';
import SideMenu from './Navigation';
import SideHead from './SideHead';
import Toolbar from '@mui/material/Toolbar';
const drawerWidth = 240;

const DrawerStyled = styled(Toolbar)(() => ({
  backgroundColor : '#AFE0F4',
  height : '100vh',
  position:'fixed',
  width : `${drawerWidth - 0.5 }px`,
  padding : '0',
  margin : '0',
  
}));

const StyledSideBarWrap = styled('div')(() => ({
  display : 'flex',
  flexDirection : 'column',
  position:'relative',
  top : '30px',
  alignItems : 'center',
  height : '100%',
  width : '130%'
}));

function ResponsiveDrawer(props) {
  return (
    <DrawerStyled style={{position:'fixed', zIndex: '1234'}}>
      <StyledSideBarWrap>
        <SideHead ></SideHead>
        <SideMenu></SideMenu>
      </StyledSideBarWrap>
    </DrawerStyled>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;