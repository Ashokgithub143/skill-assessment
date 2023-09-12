import Badge from '@mui/material/Badge';
import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

export const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      top: 80,
      right: -3,
      width: '50px',
      height: '50px',
      padding: "0",
    },
  }));

 export const StyledImage = styled('img')({
    width: '100%',
    height: '100%',
  });

  export const DrawerStyled = styled(Toolbar)(({ theme }) => ({
    marginLeft: "230px",
  }));
  
  export const DrawerHeight = styled(Toolbar)(({ theme }) => ({marginTop:"150px"}));
  