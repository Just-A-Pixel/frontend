import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import ScrollPhone from "../components/ScrollPhone";
import ScrollImage from "../components/ScrollImage";

export default function Home() {
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }

  useEffect(() => {
    const element = document.getElementById("hello");

    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", () => {
      // console.log(isInViewport(element));
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (isInViewport(element) && st > lastScrollTop) {
        disableScroll();
        element.scrollTop += 10;
        enableScroll();
      } else if (isInViewport(element) && st < lastScrollTop) {
        disableScroll();
        element.scrollTop -= 10;
        enableScroll();
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <ScrollPhone />
      <ScrollImage />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) / 1.5 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
