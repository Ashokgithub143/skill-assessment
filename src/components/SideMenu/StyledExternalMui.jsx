import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';

const drawerWidth = 240;

export const DrawerStyled = styled(Toolbar)(() => ({
  backgroundColor : '#AFE0F4',
  height : '100vh',
  position:'fixed',
  width : `${drawerWidth - 0.5 }px`,
  padding : '0',
  margin : '0',
  
}));

export const NavStyle = {
  display : 'flex',
  flexDirection : 'column',
  position:'relative',
  top : '30px',
  alignItems : 'center',
  height : '100%',
  width : '120%'
  
}

export const KaniniHead = {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '38px',
    letterSpacing: '0.1em',
    color: '#0C1116',
}

export const KaniniSubHead = {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '0.09em',
    color: '#373F47',
}
export const KaniniLogoStyle = {
    width : '47px',
    height : '47px',
    position : 'relative',
    top : '7px',
    right : '15px',
}

export const SideMenuStyles = () => ({
    height: '80%',
    borderRight: 0,
    marginTop: '20px',
    backgroundColor: '#AFE0F4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  });