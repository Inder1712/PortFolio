import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="absolute z-10 text-white bg-slate-950 ">
      <div className=" bg-slate-950 md:flex hidden h-14 w-screen  items-center shadow-md shadow-black">
        <div
          className="w-72 h-[100%] bg-slate-950  flex items-center justify-center pt-1 italic text-lg font-serif"
          style={{ fontFamily: "Dancing Script", fontSize: "25px " }}
        >
          Inder's Portfolio
        </div>
        <div className=" h-[100%] flex justify-center items-center">
          <Link
            to="/"
            className="lg:w-36 md:w-24  bg-slate-950 duration-300 h-[70%] text-lg   hover:bg-slate-900 hover:    flex justify-center items-center"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="lg:w-36 md:w-24  bg-slate-950 duration-300 h-[70%] text-lg   hover:bg-slate-900 hover:    flex justify-center items-center"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="lg:w-36 md:w-24  bg-slate-950 duration-300 h-[70%] text-lg   hover:bg-slate-900 hover:    flex justify-center items-center"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="lg:w-36 md:w-24  bg-slate-950 duration-300 h-[70%] text-lg   hover:bg-slate-900 hover:    flex justify-center items-center"
          >
            Contact
          </Link>
        </div>
        <div className="w-72 h-[100%]  bg-slate-9500 flex   justify-center items-center text-lg"></div>
      </div>
      <div
        className={`md:hidden flex h-14 items-center bg-slate-950 shadow-md shadow-black ${
          flip
            ? "h-screen transition-all duration-500  w-fit "
            : "  p-4 w-screen   transition-all duration-500"
        }`}
      >
        {" "}
        {!flip && (
          <button onClick={() => setFlip(true)}>
            <MenuIcon fontSize="large" />
          </button>
        )}
        {flip && (
          <div className="bg-gray-900 flex flex-col items-center h-full w-60 space-y-6 opacity-100 ">
            <button
              onClick={() => setFlip(false)}
              className="h-14 w-full bg-gray-950 flex justify-end pr-2 text-lg   items-center"
            >
              <KeyboardBackspaceIcon fontSize="large" />
            </button>
            <Link
              to="/"
              onClick={() => setFlip(!flip)}
              className="h-12 w-52 bg-slate-950 flex justify-center text-lg   items-center"
            >
              Home
            </Link>
            <Link
              onClick={() => setFlip(!flip)}
              to="/about"
              className="h-12 w-52 bg-slate-950 flex justify-center text-lg   items-center"
            >
              About
            </Link>
            <Link
              onClick={() => setFlip(!flip)}
              to="/projects"
              className="h-12 w-52 bg-slate-950 flex justify-center text-lg   items-center"
            >
              Projects
            </Link>

            <Link
              onClick={() => setFlip(!flip)}
              to="/contact"
              className="h-12 w-52 bg-slate-950 flex justify-center text-lg   items-center"
            >
              Contact
            </Link>
          </div>
        )}{" "}
        <div
          className="w-full  h-full flex justify-end"
          style={{ fontFamily: "Dancing Script", fontSize: "22px" }}
        >
          Inder's Portfolio
        </div>
      </div>
    </div>
  );
}
