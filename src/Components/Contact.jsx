import React, { useEffect } from "react";
import GitHub from "../Resources/Github.png";
import LinkedIn from "../Resources/LinkedIn.png";
import Phone from "../Resources/Phone.png";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlePhoneButtonClick = () => {
    window.location.href = "tel:8219109010";
  };

  return (
    <div className="bg-gray-900 md:h-screen h-fit w-screen flex justify-center items-center pt-10 md:mt-0 mt-10 text-center text-white text-xl font-bold">
      <div className="bg-slate-950 h-[90%] w-[90%] md:flex-row flex flex-col space-y-10 py-9  md:space-y-0 justify-between items-center ">
        <div className="md:w-[33%] flex flex-col justify-start items-center space-y-10 pt-5 h-[100%] md:bg-slate-950 md:pb-0 px-4 w-[80%] pb-5 rounded-lg">
          <img src={GitHub} alt="" className="w-[50%]" />
          <div>
            Contact Through <br /> Github
          </div>
          <a
            href="https://github.com/Inder1712"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded-xl text-xl font-medium hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-12 w-44">
              Github
            </button>
          </a>
        </div>
        <div className="md:w-[33%] flex flex-col justify-start items-center space-y-10 pt-5 h-[100%] md:bg-slate-950 md:pb-0 px-4 w-[80%] pb-5 rounded-lg">
          <img src={LinkedIn} alt="" className="w-[50%]" />
          <div>
            Contact Through <br /> LinkedIn
          </div>
          <a
            href="https://www.linkedin.com/in/inderpreetsingh1168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded-xl text-xl font-medium hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-12 w-44">
              LinkedIn
            </button>
          </a>
        </div>
        <div className="md:w-[33%] flex flex-col justify-start items-center space-y-10 pt-5 h-[100%] md:bg-slate-950 md:pb-0 px-4 w-[80%] pb-5 rounded-lg">
          <img src={Phone} alt="" className="w-[50%]" />
          <div>
            Contact direct <br /> through phone
          </div>
          <button
            className="bg-blue-500 rounded-xl text-xl font-medium hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-12 w-44"
            onClick={handlePhoneButtonClick}
          >
            Call
          </button>
        </div>
      </div>
    </div>
  );
}
