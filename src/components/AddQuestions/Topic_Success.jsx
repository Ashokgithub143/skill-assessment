import success_style from './topic_success.module.css';
import green_tick from '../../assets/img/green_tick.gif';
import x_mark from '../../assets/img/cancel_button.jpg';

function Topic_Success({x_mark_close}){
    const buttonStyle = {
        border: 'none',
        outline: 'none',
        background: 'transparent',
        padding: '0',
      };

      const x_close = () =>{
        x_mark_close();
      }

    return( 
    <div className={success_style.rectangle}>
            <button style={buttonStyle} onClick={x_close}><img src={x_mark} className={success_style.x_mark}></img></button>
            <img src={green_tick} className={success_style.green_tick_style}></img>
            <p className={success_style.added}>Question Added  Successfully</p>
           <p className={success_style.reflected}>Questions has been imported successfully, it will be reflected on page in few minutes</p>
        </div>
    )
}

export default Topic_Success;