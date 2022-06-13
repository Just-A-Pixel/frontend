import { useState, useEffect } from 'react';
import styles from "../styles/Navbar.module.css"
import hamburger from "../components/assets/hamburger.svg"
import Image from 'next/image';
const Navbar = () => {
  
  const size = useWindowSize();
  console.log(size)
  if(size.width > 942) 
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.navbar__logo}>logo</span>
        {}
        <span>about</span>
        <span style={{ marginRight: "auto" }}>how it works</span>
        <span>download</span>
      </div>
      <div className={styles.disclaimer}>
            no credit score required*
      </div>
    </>
  );

  else return (
    <>
      <div className={styles.navbar}>
        <span className={styles.navbar__logo}>logo</span>
        {}
        
        <span><Image src={hamburger} alt=""/></span>
      </div>
      <div className={styles.disclaimer}>
            no credit score required*
      </div>
    </>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export default Navbar