import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import '../../styles/HeaderStyles.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  top:'5px',
  borderRadius: '5px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border : '1px solid #A8B0B9',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  height:'80%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '70%',
  },
  color : '#A8B0B9',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  color:'#A8B0B9',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    position:'relative',
    top:'-3px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '70%',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
}));

const SearchBar = () => {
  return (
      <Search>
          <SearchIconWrapper>
            <SearchIcon/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search here...."
            inputProps={{ 'aria-label': 'search' }}
            className='searchPlace'
          />
        </Search>
  )
}

  export default SearchBar