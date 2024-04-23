"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { useRef, useState } from "react";

export default function Home() {

  const [text, setText] = useState("Start Now");
  const buttonRef = useRef(null);

  const HandleMouseOver = () => {
    setText("Start Now ->")
  }

  const HandleMouseLeave = () => {
    setText("Start Now")
  }


  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="flex fixed left-0 right-0 top-0 bottom-0 justify-center items-center main">
        <h1 className="text-7xl block"><img src="/logo2.jpg" className="w-72 inline-block" alt="Logo" />StudyPdf</h1>
        <button ref={buttonRef} className='home-start-button'>
          {text}
        </button>
      </div >
    </>
  );
}
