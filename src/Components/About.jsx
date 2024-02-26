import React, { useEffect } from "react";
import profile from "../Resources/profile.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-fit w-screen bg-gray-900 flex py-20 justify-center items-center">
      <div className="h-fit w-[90%] bg-slate-950 shadow-md shadow-black">
        <div className="h-fit w-fit md:flex">
          <div className="flex p-10 h-fit w-fit">
            <img
              src={profile}
              alt=""
              className="h-50 w-50 xs:h-60 xs:w-50 rounded-full bg-contain"
            />
          </div>
          <div className="md:p-10 pl-10 pb-7 sm:text-6xl md:text-7xl lg:text-8xl text-5xl text-start lg:w-[60%] md:w-[50%] sm:w-[100%] flex flex-col mt-10">
            Inderpreet Singh
          </div>
        </div>
        <div className="h-fit w-full px-10 pb-10">
          <div className="h-full w-full font-semibold text-lg">
            Hi, I'm Inderpreet, a 20-year-old third-year BCA student at Himachal
            Pradesh University. I graduated from Guru Nanak Mission Public
            School with a 12th-grade commerce degree. I'm the academic
            representative for BCA in my college, and I was ranked first in my
            first year. I've also done an internship in web development at
            Scaptor Limited.
            <br /> <br /> I'm passionate about technology and learning new
            things. I'm always looking for ways to improve my skills and
            knowledge. I'm also a team player, and I'm always willing to help
            others.
            <br /> <br /> I live in Paonta Sahib, Himachal Pradesh, and I love
            the natural beauty of the area. I'm also a keen hiker, and I love
            exploring the mountains. I'm particularly interested in the history
            and culture of the region, and I'm always looking for new things to
            learn.
            <br />
            <br /> I'm excited to share my journey with you on this website. I
            hope you'll find my content informative and helpful. I'll be writing
            about my experiences as a student, my thoughts on technology, and my
            travels around Himachal Pradesh. I'll also be sharing some of my
            favorite recipes and tips for hiking and exploring the mountains.
            <br /> <br /> I hope you'll join me on my journey!
          </div>
          <a
            href="https://www.linkedin.com/in/inderpreetsingh1168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded-xl mt-10 text-xl font-medium hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-12 w-44">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
