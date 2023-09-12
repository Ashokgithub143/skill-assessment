import styles from "./AssignedModal.module.css";
import "../../ForgotPassword/ForgotPassword.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AssignedModal = (props) => {
  return (
    <div className={styles.assigned_Modal_Layout}>
      <div className={styles.success_Modal}>
        <span
          className="material-symbols-outlined"
          id="cancel_Forgot_Password"
          onClick={() => {
            props.setModal(false);
          }}
        >
          close
        </span>

        <div className={styles.modal_Content}>
          <img
            src={require("../../../assets/img/email_tick.png")}
            className={styles.email_Sent_Image}
          />
          <h3 className={styles.modal_Heading}>
            Assessment Assigned Successfully
          </h3>
          <h6 className={styles.modal_Subheading}>{props.details}</h6>

          <div className={styles.modal_Actions}>
            <TextField
              id="outlined-read-only-input"
              label="Assessment Link"
              defaultValue="join.l1assessment.com/o8o9uxi"
              InputProps={{
                readOnly: true,
              }}
              sx={{ width: "73%" }}
            />
            <div className={styles.copy_Link}>
              <span class="material-symbols-outlined" id="copy">
                content_copy
              </span>
              <p className={styles.copy_Guide}>Copy Link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AssignedModal };
