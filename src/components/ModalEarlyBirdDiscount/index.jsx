import React, { useEffect, useState, Suspense } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

import useDebounce from "../../hooks/useDebounce";
import { LoadingFallback } from "../../utils/loadingFallback";

import { modalDiscountStyles } from "../../constants/styles/modalDiscount";
import styles from "./ModalJoinWebinar.module.scss";
import joinWebimg from "../../assets/modalDiscount.png";
import closeIcon from "../../assets/closeIcon.svg";

const ModalEarlyBirdDiscount = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [anchorel, setAnchorel] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEdit, setEdit] = useState(true);

  const handleOpen = (evt) => {
    setOpen(true);
    setAnchorel(evt.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorel(null);
  };

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

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal open={open} onClose={handleClose} anchorel={anchorel}>
        <Box sx={modalDiscountStyles}>
          <Suspense fallback={<LoadingFallback />}>
            <img src={joinWebimg} alt="house" className={styles.imgWeb} />
          </Suspense>
          <div className={styles.contentWrapper}>
            <h4 className={styles.contentTitle}>EARLY BIRD DISCOUNTS</h4>
            <h4 className={styles.contentTitleSecond}>Get an extra 50% OFF*</h4>
            <p className={styles.contentText}>
              Register your email address with House Relocation Marketplace to
              receive a 50% discount code.
            </p>
            <div className={styles.wrapperEmail}>
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
                GET 50% OFF, EARLY BIRD DISCOUNT
              </button>
            </div>
          </div>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "20px",
              top: "25px",
              color: "#fff",
              "@media (max-width:630px)": {
                right: "2px",
                top: "0px",
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

export default ModalEarlyBirdDiscount;
