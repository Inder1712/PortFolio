import React, { useState, useEffect } from "react";
import p2 from "../Resources/p2.png";
import internship2 from "../Resources/internship2.png";
import { Link } from "react-router-dom";

import hu2 from "../Resources/hu2.svg";
import Internship from "../Resources/Internship.jpg";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col mt-10 z-10 justify-center w-screen items-center bg-gray-900 h-fit py-10">
      <div className="h-fit 2xl:w-fit lg:w-screen md:flex hidden  md:w-screen">
        <div className="h-[551px] lg:w-[60%] 2xl:w-[700px] md:w-[60%] text-white flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Hi, I'm Inder!</div>
          <div className="h-fit pb-8">
            Welcome to my portfolio. As a full-stack developer, I thrive on
            creating dynamic and impactful web applications. With a keen eye for
            detail and a passion for problem-solving, I strive to deliver
            top-notch solutions that exceed expectations. I am committed to
            staying up-to-date with the latest technologies and best practices
            to ensure that my work is at the forefront of innovation. Take a
            moment to browse through my portfolio and discover the diverse range
            of projects that showcase my skills as a full-stack developer.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <Link to={"/contact"}>
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[551px]  2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={hu2}
            alt=""
            className={`w-[90%] z-40 transition-all duration-2000 ease-in-out `}
          />
        </div>
      </div>
      <div className="h-fit md:flex hidden 2xl:w-fit  lg:w-screen md:w-screen">
        <div className="h-[551px] 2xl:w-[550px] lg:w-[40%] bg-slate-950 md:w-[40%] flex justify-center items-center">
          <img
            src={Internship}
            alt=""
            className={`w-[90%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[551px] lg:w-[60%] 2xl:w-[700px] text-white flex md:w-[60%] bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Internship!</div>
          <div className="h-fit pb-8">
            I completed a web development internship at Scaptor Ltd, where I
            gained hands-on experience in HTML, CSS, JavaScript, React, and
            Tailwind. This opportunity allowed me to expand my skills in
            front-end development, enhancing my proficiency in creating dynamic
            and visually appealing web applications.
          </div>
          <div className="h-14 w-[90%]">
            <a target="_blank" href="https://variablee.com/internship">
              <button className=" bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View Internship
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-fit 2xl:w-fit md:flex hidden lg:w-screen md:w-screen">
        <div className="h-[551px] 2xl:w-[700px] lg:w-[50%] text-white  md:w-[60%] flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Projects!</div>
          <div className="h-fit pb-8">
            I have completed various projects that showcase my abilities.
            Highlights include a news site utilizing an external API for
            fetching current articles, a task list app with front-end and
            back-end functionality, and a captivating dice game where players
            aim to match and freeze the dice. These projects exemplify my
            diverse skill set in web development. To explore more of my work,
            please visit my portfolio for a comprehensive view of my expertise
            and dedication.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <Link to={"/projects"}>
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[551px] 2xl:w-[550px] md:w-[40%]  lg:w-[60%] flex bg-slate-950 justify-center items-center">
          <img
            src={internship2}
            alt=""
            className={`w-[90%] transition-all duration-2000 ease-in-out `}
          />
        </div>
      </div>

      {/* this is mobile one
       */}
      <div className="h-fit 2xl:w-fit lg:w-screen  md:hidden md:w-screen">
        <div className="h-[251px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={hu2}
            alt=""
            className={`h-[100%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[551px] lg:w-[60%] 2xl:w-[700px] md:w-[60%] text-white flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Hi, I'm Inder!</div>
          <div className="h-fit pb-8">
            Welcome to my portfolio. As a full-stack developer, I thrive on
            creating dynamic and impactful web applications. With a keen eye for
            detail and a passion for problem-solving, I strive to deliver
            top-notch solutions that exceed expectations. I am committed to
            staying up-to-date with the latest technologies and best practices
            to ensure that my work is at the forefront of innovation. Take a
            moment to browse through my portfolio and discover the diverse range
            of projects that showcase my skills as a full-stack developer.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <Link to={"/contact"}>
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-fit 2xl:w-fit lg:w-screen  md:hidden md:w-screen">
        <div className="h-[251px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={Internship}
            alt=""
            className={`h-[100%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[551px] lg:w-[60%] 2xl:w-[700px] text-white flex md:w-[60%] bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Internship!</div>
          <div className="h-fit pb-8">
            I completed a web development internship at Scaptor Ltd, where I
            gained hands-on experience in HTML, CSS, JavaScript, React, and
            Tailwind. This opportunity allowed me to expand my skills in
            front-end development, enhancing my proficiency in creating dynamic
            and visually appealing web applications.
          </div>
          <div className="h-14 w-[90%]">
            <a target="_blank" href="https://variablee.com/internship">
              <button className="bg-blue-500  rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View Internship
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-fit 2xl:w-fit lg:w-screen  md:hidden md:w-screen">
        <div className="h-[251px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={internship2}
            alt=""
            className={`h-[100%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[551px] 2xl:w-[700px] lg:w-[50%] text-white  md:w-[60%] flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Projects!</div>
          <div className="h-fit pb-8">
            I have completed various projects that showcase my abilities.
            Highlights include a news site utilizing an external API for
            fetching current articles, a task list app with front-end and
            back-end functionality, and a captivating dice game where players
            aim to match and freeze the dice. These projects exemplify my
            diverse skill set in web development. To explore more of my work,
            please visit my portfolio for a comprehensive view of my expertise
            and dedication.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <Link to={"/projects"}>
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
