import React from 'react'
import kaniniLogo from '../../assets/img/bg-logo.svg'
import {Typography, Stack} from '@mui/material'
import '../../styles/SideMenuStyles.css'
import styled from '@emotion/styled'

const StyledSideHead = styled(Typography)(() => ({
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '38px',
    letterSpacing: '0.099em',
    color: '#0C1116',
}))

const StyledSideSubHead = styled(Typography)(() => ({
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '0.009em',
    color: '#373F47',
}))

const StyledSideHeadWrap = styled(Stack)(() => ({
    flexDirection:'row'
}))

function SideHead() {
  return (
    <StyledSideHeadWrap>
       <img src={kaniniLogo} alt="" className='kanini-logo-style'></img>

        <Stack>
            <StyledSideHead>Kanini</StyledSideHead>
            <StyledSideSubHead>Assessment</StyledSideSubHead>
        </Stack> 
    </StyledSideHeadWrap>
  )
}

export default SideHead