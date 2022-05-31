import React, { useState, useEffect } from "react";
import src from './assets/test.png'
import Image from "next/image";
const ScrollImage = () => {
  // useEffect(() => {
  //     const x = document.getElementById("hello")
  //     x.addEventListener('scroll')
  //     console.log(x)

  // }, [])

  return (
    <>
      <div id="hello" style = {{height: '150px', overflow:'scroll'}}>
        <Image src = {src} alt="" />
        <Image src = {src} alt="" />
        <Image src = {src} alt="" />
      </div>
    </>
  );
};

export default ScrollImage;
