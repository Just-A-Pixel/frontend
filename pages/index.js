import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import ScrollPhone from "../components/ScrollPhone";
import ScrollImage from "../components/ScrollImage";
import Image from "next/image";
import src1 from "../components/assets/nocredscore.png";
import paycard from "../components/assets/paycard.png"
import src2 from "../components/assets/creditverse.png"
import Section2 from "../components/Section2";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { isAssetError } from "next/dist/client/route-loader";
export default function Home() {
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }

  // useEffect(() => {
  //   const element = document.getElementById("hello");

  //   var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;


  //   window.addEventListener("scroll", () => {
  //     // console.log(isInViewport(element));
  //     var st = window.pageYOffset || document.documentElement.scrollTop;
  //     console.log(window.innerHeight || document.documentElement.clientHeight)

  //     if (isInViewport(element) && st > lastScrollTop) {
  //       disableScroll();
  //       element.scrollTop += 7;
  //       enableScroll();
  //     } else if (isInViewport(element) && st < lastScrollTop) {
  //       disableScroll();
  //       element.scrollTop -= 7;
  //       enableScroll();
  //     }
  //     lastScrollTop = st <= 0 ? 0 : st;
  //   });
  // });

  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <ScrollPhone />
      <div style={{display: 'flex'}}>
        <Image src={src1} layout="" alt="" />
        <ScrollImage />
      </div>
      <div style={{width: '90vw', margin: 'auto'}}>
        <Image src = {paycard} alt = "" />

      </div>

      {/* <Section2 /> */}

      {/* <Image src = {src2} alt=""/> */}
     
      <Section />
      <Footer />
    
    </>
  );
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
