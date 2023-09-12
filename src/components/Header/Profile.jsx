import React from 'react'
import ProfileIcon from '../../assets/img/profile-icon.png'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import '../../styles/HeaderStyles.css'

const ProfileStyle = styled('div')(({theme}) => ({
    display : 'flex',
    flexDirection : 'row',
    width: '150%',
    justifyContent: 'space-around',
    alignItems: 'center',   
    cursor : 'pointer',
    color : '#242D35',    
    position : 'relative',
    left : '-40px',
    top : '7px'
}));

function Profile() {
  return (
    <ProfileStyle>
        <img src={ProfileIcon} alt='' className='profileImageStyle'></img>
        <Typography>HR Admin</Typography>
    </ProfileStyle>
  )
}

export default Profile