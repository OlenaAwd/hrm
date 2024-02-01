import React, { useEffect, useState } from "react";
import ModalEbook from "../ModalEbook";
import styles from "./ebookCard.module.scss";
import useDebounce from "../../hooks/useDebounce";

const EbookCard = ({ img, title, cost, description, type, href }) => {
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

  const isDisable = !emailValue || !isEdit || !!emailError;

  const handleDownload = () => {
    setEmailValue("");
  };

  return (
    <div className={styles.ebookCard}>
      <div className={styles.imgContainer}>
        <img src={img} alt="book" />
      </div>

      <div className={styles.textContainer}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{cost}</p>
        <p className={styles.text}>{description}</p>
        {type === "Download" && (
          <ModalEbook
            btn="Download"
            img={img}
            header="Download your free copy today"
            title={title}
            cost={cost}
            description={description}
            children={
              <div>
                <p className={styles.label}>Enter your email to download</p>
                <input
                  placeholder="Email address"
                  className={styles.input}
                  value={emailValue}
                  onChange={handleChangeEmail}
                />
                <span className={styles.helperText}>{emailError}</span>
                <div className={styles.btnContainer}>
                  <a href={href} download className={styles.linkDownload}>
                    <button
                      disabled={isDisable}
                      className={styles.btnJoin}
                      onClick={handleDownload}
                    >
                      Download
                    </button>
                  </a>
                </div>
              </div>
            }
          />
        )}
        {type === "Members Only" && (
          <ModalEbook
            btn="Members Only"
            img={img}
            header="Become a member to receive your copy"
            title={title}
            cost="Included in House Relocation Marketplace Membership membership"
            description={description}
            span="Members Only"
            children={
              <div>
                <p className={styles.label}>
                  Become a member of House Relocation Marketplace to receive
                  your free copy
                </p>

                <div className={styles.btnContainer}>
                  <button className={styles.btnJoin}>Join</button>
                </div>
              </div>
            }
          />
        )}
        {type === "Buy Now" && (
          <ModalEbook
            btn="Buy Now"
            img={img}
            header="Buy Now"
            title={title}
            // cost="Included in House Relocation Marketplace Membership"
            description={description}
            span={title === "How to Relocate an Inground Pool" ? <span className={styles.span}>$99 AUD</span>  : <span className={styles.span}>$150 AUD</span> }
            children={
              <div>
                 {title === "How to Relocate an Inground Pool" ? 
                <p className={styles.label}>
                  100  pages
                  <br /> A4 PDF format
                </p>
                :
                <p className={styles.label}>
                  100 plus pages
                  <br /> A4 PDF format
                </p>
            }

                <div className={styles.btnContainer}>
                  <button className={styles.btnJoin}>Buy E-book</button>
                </div>
              </div>
            }
          />
        )}
        {type === "Coming in 2024" && (
          <ModalEbook
            btn="Coming in 2024"
            img={img}
            header="Coming Soon"
            title={title}
            // cost="Included in House Relocation Marketplace Membership"
            description={description}
            span="Coming late 2023"
            children={
              <div>
                <p className={styles.label}>
                  Join the wait list to be one of the first to acquire your copy
                  in late 2023.
                </p>
                <input placeholder="Email address" className={styles.input} />
                <div className={styles.btnContainer}>
                  <button className={styles.btnJoin}>Join the wait list</button>
                </div>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

export default EbookCard;
