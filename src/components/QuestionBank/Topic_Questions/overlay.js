import React, { useState } from 'react';
import { Backdrop, Modal, Box } from '@mui/material';
import plus from '../../../assets/img/plus1.png';
import overlay_style from './overlay.module.css';
import import_symbol from '../../../assets/img/import_symbol.png';



function OverlayOptions(){
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Overlay</button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       
          

          <div className={overlay_style.overlay_content}>
          
            <div className={overlay_style.button_style}>
                <img src={plus} className={overlay_style.plus}></img>
                <p className={overlay_style.add_q}>Add Questions</p>
            </div>
            <div className={overlay_style.button_style}>
                <img src={import_symbol} className={overlay_style.plus}></img>
                <p className={overlay_style.add_q}>Import Questions</p>
            </div>
            </div>
          
       
      
      </Modal>
    </div>
  )

}
export default OverlayOptions;