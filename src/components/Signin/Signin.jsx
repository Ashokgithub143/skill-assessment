import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import kanini from "../../assets/img/kan_logo.png";
import FormLabel from "@mui/material/FormLabel";
import quotes from "../../assets/img/quotes.png";
import TextField from "@mui/material/TextField";
import {
  TopImage,
  DownImage,
  KaniniLogo,
  Encompass,
  QuotesImage,
  ModifiedDiv,
  background,
} from "./StyledElements";
import styles from "./styled.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const ProceedLoginusingAPI = (e) => {
    e.preventDefault(); 
    if (validate()) {
      let inputobj = { email: email, password: password };

      fetch("https://localhost:7272/api/Auth/Login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Login failed, invalid credentials");
          } else {
            toast.success("Success", {
              autoClose: 2000,
            });
            sessionStorage.setItem("token", resp.token);
            sessionStorage.setItem("id", resp.user.id);
            usenavigate("/dashboard");
            setTimeout(function () {
              window.location.reload();
            }, 3000);
          }
        })
        .catch((err) => {
          toast.error(
            "Login Failed due to : User Not Found Or Invalid Password"
          );
        });
    }
  };

  const validate = () => {
    let result = true;
    if (!email.match(emailRegex) || email === "" || email === null) {
      result = false;
      toast.warning("Please Enter a Valid Email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <>
      {forgotPassword && <ForgotPassword close={setForgotPassword} />}
      <Encompass>
        <div className={styles.encompass}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} sx={background}>
            <div id="leftText">
              <QuotesImage src={quotes} alt="quotes"></QuotesImage>
              <Typography
                variant="h2"
                component="div"
                className={styles.heading}
                sx={{ marginBottom: "0.5rem", fontWeight: "bold" }}
              >
                Helps You To Evaluate Skills
              </Typography>
              <Typography
                variant="h3"
                component="div"
                className={styles.sub_Heading}
              >
                Kanini Evaluation Platform
              </Typography>
              <TopImage
                src={require("../../assets/img/top.png")}
                alt="topSymbol"
              />
            </div>

            <DownImage
              src={require("../../assets/img/down.png")}
              alt="topSymbol"
            />
          </Grid>
        </div>

        <ModifiedDiv className={styles.mod_Div}>
          <KaniniLogo src={kanini} alt="Kanini" />

          <div className={styles.logo}> 
            <Typography
              component="h1"
              variant="h3"
              className={styles.sign_Text}
            >
              Sign In
            </Typography>
            <Typography
              variant="p"
              className={styles.welcome_Text}
              sx={{ fontSize: "1.3rem", margin: "0.5rem 0rem 3rem 0rem" }}
            >
              Welcome back! Please enter email id and password
            </Typography>

            <div className={styles.email_Section}>
              <FormLabel
                id="email"
                className={styles.email_Label}
                sx={{ fontSize: "1.2rem" }}
              >
                Email ID
              </FormLabel>
              <TextField
                id="email-"
                variant="outlined"
                className={styles.email_Input}
                inputProps={{
                  style: {
                    height: "0.3rem",
                  },
                }}
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                error={!email.match(emailRegex) && email !== ""}
                helperText={!email.match(emailRegex) && email !== "" ? "Invalid email format" : ""} 
              />
            </div>

            <div className={styles.password_Section}>
              <FormLabel
                id="password"
                className={styles.password_Label}
                sx={{ fontSize: "1.2rem" }}
              >
                Password
              </FormLabel>
              <TextField
                variant="outlined"
                type={showPassword ? "text" : "password"}
                className={styles.password_Input}
                inputProps={{
                  style: {
                    height: "0.3rem",
                  },
                }}
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                }} 
              />
            </div>

            <Link
              variant="body2"
              sx={{
                textDecoration: "none",
                textAlign: "right",
                fontSize: "1.2rem",
                color: "#626D8A",
                marginTop: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setForgotPassword(true);
              }}
            >
              Forgot your password?
            </Link>
            <Button
              type="submit"
              onClick={ProceedLoginusingAPI}
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                color: "#0C1116",
                backgroundColor: "#7BCCED",
                marginTop: "5rem",
                height: "4rem",
                fontSize: "1.5rem",
              }}
              className={styles.hover_Signin}
            >
              SIGN IN
            </Button>
          </div>
        </ModifiedDiv>
      </Encompass>
      <ToastContainer />
    </>
  );
};
export default Signin;
