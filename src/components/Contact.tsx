import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [openSnackBar, setSnackBarOpen] = useState<boolean>(false);

  const form = useRef();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim() === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (e.target.value.trim() === "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  const handleClose = (
    _?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  const SERVICEID = "";
  const TEMPLATEID = "";
  const PUBLICAPIKEY = "";

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name !== "" && email !== "" && message !== "") {
      const templateParams = {
        from_name: name,
        from_email: email,
        from_message: message,
      };

      emailjs.send(SERVICEID, TEMPLATEID, templateParams, PUBLICAPIKEY).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSnackBarOpen(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={handleNameChange}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={handleMessageChange}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
            <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                I have received your message. Can't wait to connect with you!
              </Alert>
            </Snackbar>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;