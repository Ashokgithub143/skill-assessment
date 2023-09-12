import styles from "./ForgotPassword.module.css";
import "./ForgotPassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = (e) => {
    if (emailRegex.test(email) === false) {
      toast.warning("Please enter a valid email!");
    } 

    else {
      const passcode = async (email) => {
        try {
          const response = await fetch(
            `https://localhost:7272/api/RegisterUsers/${email}`
          );
          const data = await response.json();

          if (response.ok) {
            emailjs
              .send(
                "service_4ctbk9v",
                "template_3tz74bm",
                {
                  to_email: email,
                  password: data.password,
                },
                "gs3CjlRbzWZ_N809E"
              )
              .then(() => {
                toast.success("Password sent to your email ID.");
                props.close(false);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          } else {
            toast.error("Email doesn't exist!");
          }
        } catch (e) {
          console.log(e);
        }
      };

      passcode(email);
    }
  }

    return (
      <div className={styles.forgot_Password_Encompass}>
        <div className={styles.form_Div}>
          <span
            class="material-symbols-outlined"
            id="cancel_Forgot_Password"
            onClick={() => {
              props.close(false);
            }}
          >
            cancel
          </span>

          <div className={styles.forgot_Password_Heading}>
            <span class="material-symbols-outlined" id="lock">
              lock
            </span>
            <h1 className={styles.heading}>Forgot Password</h1>
          </div>

          <div className={styles.form_Inputs}>
            <label for="email" className={styles.email_Label}>
              Email ID
            </label>
            <input
              type="text"
              id="email"
              className={styles.email}
              name="email"
              onChange={changeHandler}
              required
            ></input>

            <button
              type="button"
              className={styles.forgot_Submit}
              onClick={clickHandler}
            >
              Send Reset Link
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  };

export { ForgotPassword };
