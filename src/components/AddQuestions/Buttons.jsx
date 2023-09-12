import { Button } from '@mui/material';
import * as React from 'react';
import '../AddQuestions/Buttons.css'
import Topic_Success from './Topic_Success';
import { Modal,Backdrop} from "@mui/material";
import { useState } from 'react';


export  function Buttons(props){
  const[displaysuccess,setdisplaysuccess]=useState(false);
          function submitClick(){
            setdisplaysuccess(true);  
            setTimeout(() => {
                window.location.reload();
              }, 2000);
        }

        function addNewQuestionClick() {
            props.setAddCard(true);
          }
        
        function close_modal(){
          setdisplaysuccess(false);
        }
    
        
return (
    <>
    <div className='buttons'>
        <Button variant="outlined" className='submit' onClick={submitClick}>
          Submit Question
        </Button>
        {/* Add an onClick event for "Add New Question" button */}
        <Button variant="outlined" className='addq' onClick={addNewQuestionClick}>
          + Add New Question
        </Button>
        <Modal
          open={displaysuccess}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Topic_Success x_mark_close={close_modal} />
        </Modal>
      </div>
    </>
);
}
