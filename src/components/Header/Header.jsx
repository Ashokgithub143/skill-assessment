import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import SearchBar from './Searchbar';
import Notification from './Notification';
import Profile from './Profile';
import {styled} from '@mui/material/styles'
import { Grid } from '@mui/material';
import '../../styles/HeaderStyles.css'

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)(() => ({
    height: '90px',
    width: `calc(100% - ${drawerWidth}px)`,
    background: 'linear-gradient(138.51deg, #F8FDFF 59.84%, #F6FAEF 116.14%)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0px 2px 4px -1px rgba(200, 200, 200, 0.2), 0px 4px 5px 0px rgba(200, 200, 200, 0.14), 0px 1px 10px 0px rgba(200, 200, 200, 0.12)',
    zIndex:'1000'
  }));

const StyledHeading = styled(Typography)(() => ({
    position: 'relative',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '33px',
    color: '#242D35',
    fontSize:'115%'
}))

const StyledPageDescription = styled(Typography)(() => ({
    position: 'relative',
    width: '393px',
    height: '18px',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '70%',
    lineHeight: '18px',
    color: '#A8B0B9',
}))

const PageHeading = styled('div')(()  =>  ({
    display : 'flex',
    flexDirection : 'column',
    width : '60%',
    paddingLeft : '30px',
    flexWrap:'wrap',
}))
  
  export default function SearchAppBar() {
    return (
      <StyledAppBar>
        <PageHeading>
            <StyledHeading variant='h6'>Welcome Admin !</StyledHeading>
            <StyledPageDescription variant='p'>View complete details of all location and its corresponding details.</StyledPageDescription>
        </PageHeading>
        <Grid container spacing={1} width={'50%'}>
            <Grid item xs={6} md={8}>
                <SearchBar></SearchBar>
            </Grid>
            <Grid item xs={6} md={1}>
                <Notification></Notification>
            </Grid>
            <Grid item xs={6} md={2}>
                <Profile></Profile>
            </Grid>
        </Grid>
      </StyledAppBar>
    );
  }