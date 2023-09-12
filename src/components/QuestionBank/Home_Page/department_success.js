import black_tick from "../../../assets/img/black_tick.png";
import alert_style from "./department_success.module.css";

function DepartmentSuccess() {
  return (
    <div className={alert_style.div_Display}>
      <img src={black_tick} className={alert_style.tick}></img>
      <p className={alert_style.text}>Department Added Successfully</p>
    </div>
  );
}

export default DepartmentSuccess;
