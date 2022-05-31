import React from 'react'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.navbar__logo}>logo</span>
        <span>about</span>
        <span style={{ marginRight: "auto" }}>how it works</span>
        <span>download</span>
      </div>
      <div className={styles.disclaimer}>
            no credit score required*
      </div>
    </>
  );
}

export default Navbar