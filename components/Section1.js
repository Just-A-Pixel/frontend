import React from "react";
import styles from "../styles/Section1.module.css";
const Section1 = () => {
  return (
    <>
      <div className={styles.section}>
        <h4> at company </h4>
        <h1> <span style = {{color:"#85C0FF"}}>manage</span> transactions </h1>
        <p>you take the credit of being the coolest in your gang, <span style={{color:"#007BFF", fontWeight: 700}}>we</span> will handle your ‘credits’.</p>
      </div>
    </>
  );
};

export default Section1;
