import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import styles from "./ModalJoinWebinar.module.scss";
import joinWebimg from "../../assets/modalJoinWeb.png";
import closeIcon from "../../assets/closeIcon.svg";
import { modalWebinarStyles } from "../../constants/styles/modalWebinar";
import useDebounce from "../../hooks/useDebounce";

const ModalJoinWebinar = ({ btnText, classes }) => {
  const [open, setOpen] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEdit, setEdit] = useState(true);

  const handleChangeEmail = (e) => {
    const val = e.target.value;
    setEmailError("");
    setEmailValue(val);
    setEdit(false);

    if (!val) {
      setEmailError("Please, enter your email");
      return;
    }
  };

  const debouncedEmail = useDebounce(emailValue, 500);

  useEffect(() => {
    if (debouncedEmail) {
      validateEmail();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]);

  const validateEmail = () => {
    setEdit(true);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = regex.test(emailValue);
    if (emailValue.length === 0) {
      setEmailError("Please, enter your email");
      return;
    }

    if (!checkEmail) {
      setEmailError("Email is not correct");
      return;
    }
    setEmailError("");
  };

  const isDisabled = !emailValue || !isEdit || !!emailError;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btnWeb} ${classes && classes}`}
          onClick={handleOpen}
        >
          {/* Sign Up for Webinar */}
          {btnText}
        </button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalWebinarStyles}>
          <img src={joinWebimg} alt="house" className={styles.imgWeb} />
          <div className={styles.contentWrapper}>
            <h4 className={styles.contentTitle}>
              Learn more about House Relocation Marketplace, sign up for the
            </h4>
            <h4 className={styles.contentTitleSecond}>
              GETTING STARTED WEBINAR
            </h4>
            <p className={styles.contentText}>
              Register your email address with House Relocation Marketplace to
              receive a 50% discount code.
            </p>
            <input
              placeholder="Email address"
              className={styles.email}
              value={emailValue}
              onChange={handleChangeEmail}
            />
            <span className={styles.helperText}>{emailError}</span>
            <button
              className={styles.signBtn}
              onClick={handleClose}
              disabled={isDisabled}
            >
              sign up for webinar
            </button>
          </div>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "20px",
              top: "25px",
              color: "#fff",
              "@media (max-width:782px)": {
                right: "5px",
                top: "10px",
              },
            }}
          >
            <img src={closeIcon} alt="close" className={styles.close} />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalJoinWebinar;
