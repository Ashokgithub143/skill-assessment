import styled from "@emotion/styled";
import { FormControl, Stack, MenuItem, Button, DialogTitle,TextField, Dialog, ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledFormControl = styled(FormControl)(() => ({
    width : '90%',
    marginTop:'10px',
    height:'50%'
  }))
  
  const FilterContainer = styled(Stack)(() => ({
    flexDirection:'row',
    width:'70%',
    gap:'20px',
    justifyContent:'space-evenly'
  }))

  const FilterContainerOuter = styled(Stack)(() => ({
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  }))

  const SortBy = styled(FormControl)(() => ({
    width:'10%',
    backgroundColor:'#DFF3FB',
    position:'relative',
    left:'-50px',
    height:'90%'
  }))

  const StyledMenuItem = styled(MenuItem)(() => ({
    fontSize:'90%',
  }))

  const StyledAddIcon = styled(AddIcon)(() => ({
    color:'#1589CC'
  }))
  
const StyledButton = styled(Button)(() => ({
    width : '95%',
    fontSize:'80%',
    textTransform:'none',
    position:'relative',
    marginLeft:'5px',
  })) 

const StyledDialogTitle = styled(DialogTitle)(() => ({
  position: 'relative',
  height: '33px',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '100%',
  color: '#0C1116',
  fontFamily:'Manrope',
}))
  
const StyledCancelButton = styled(Button)(() => ({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '90%',
  color: '#A8B0B9',
  textTransform:'none'
}))

const StyledSubmitButton = styled(Button)(() => ({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '90%',
  color: '#717D8A',
  textTransform:'none',
  background: '#DFF3FB'
}))

const StyledTextField = styled(TextField)(() => ({
  width:'400px',
  marginTop:'10px',
}))

const StyledDialog = styled(Dialog)(() => ({
    
}))
const StyledListItem = styled(ListItemText)(() => ({
  fontSize:'80%',
  height:'50%'
}))

const StyledFooter = styled('div')(() => ({
  display:'flex',
  flexDirection:'row',
  width:'50%',
  justifyContent:'flex-end',
  alignItems:'flex-start',
}))

const StyledCheck = styled(CheckBoxIcon)(() => ({
  color:'#4F5B67',
  borderRadius:'30%'
}))

const StyledUnCheck = styled(CheckBoxOutlineBlankIcon)(() => ({
  borderRadius:'30%'
}))

const StyledDialogAssessment = styled(Dialog)(() => ({
  width: '40%',
  postition:'relative',
  left: '922px',
}))
const StyledAssessmentTitle = styled(Stack)(() => ({
  flexDirection:'row',
  width:'100%',
  justifyContent : 'space-between'
}))

const StyledStack = styled(Stack)(() => ({
  flexDirection:'row',
  width:'100%',
  justifyContent : 'space-between',
}))

const StyledAddIconAssessment = styled(AddIcon)(() => ({
  width:'20px',
  height:'20px'
}))

const StyledCancelIcon = styled(CancelIcon)(() => ({
  width:'30px',
  height:'30px',
  color:'black'
}))

export {StyledFormControl,SortBy, FilterContainerOuter, StyledMenuItem, FilterContainer, StyledAddIcon, StyledButton, StyledCancelButton,StyledDialogTitle, StyledSubmitButton,StyledTextField, StyledListItem, StyledDialog, StyledFooter, StyledCheck, StyledUnCheck, StyledAddIconAssessment, StyledAssessmentTitle, StyledCancelIcon,StyledDialogAssessment, StyledStack}