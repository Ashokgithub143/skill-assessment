import 'bootstrap/dist/css/bootstrap.min.css';
import success_style from '../Home_Page/topic_success.module.css';
import green_tick from '../../../assets/img/green_tick.gif';
import { green } from '@mui/material/colors';
import x_mark from '../../../assets/img/cancel_button.png';

function QuestionUpdated({x_mark_close}){
    const buttonStyle = {
        border: 'none',
        outline: 'none',
        background: 'transparent',
        padding: '0',
      };

      const x_close = () =>{
        x_mark_close();
      }

    return( <div className={success_style.rectangle}>
            <button style={buttonStyle} onClick={x_close}><img src={x_mark} className={success_style.cancel_Image}></img></button>
            <img src={green_tick} className={success_style.green_Tickstyle}></img>
            <p className={success_style.added_Question}>Questions Updated Successfully</p>
           <p className={success_style.reflected_Question}>Questions has been updated successfully, it will be reflected on question bank in few minutes</p>
        </div>
    
    )

}

export default QuestionUpdated;
