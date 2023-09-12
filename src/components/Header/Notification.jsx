import React, { } from 'react'
import '../../styles/HeaderStyles.css'
import NotificationOn from '../../assets/img/notification-on.svg';
import {styled} from '@mui/material/styles'


const NotificationIcon = styled('div')(({theme}) => ({
    cursor : 'pointer',
    position : 'relative',
    left : '-40px'
}));

function Notification() {
  return (
    <NotificationIcon>
        <img src={NotificationOn} alt='' className='notificationIconStyle'></img>
    </NotificationIcon>
  )
}

export default Notification