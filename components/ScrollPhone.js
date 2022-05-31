import React from "react";
import src from "./assets/phone.png";
import Image from "next/image";
import styles from "../styles/ScrollPhone.module.css";
import GetAppButton from "./GetAppButton";
const ScrollPhone = () => {
  return (
    <>
      <div className={styles.scrollphone}>
        <Image src={src} alt="" />
      </div>
      <GetAppButton />
    </>
  );
};

export default ScrollPhone;
