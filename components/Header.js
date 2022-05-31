import React from 'react'
import src from './assets/main.png'
import Image from 'next/image'
import styles from "../styles/Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
        <Image src={src} alt=""/>
        <p>a upi based creditline for gen-z.</p>
    </div>
  )
}

export default Header