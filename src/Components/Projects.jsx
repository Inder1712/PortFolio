import React, { useEffect } from "react";
import p1 from "../Resources/p1.png";
import p2 from "../Resources/p2.png";
import p3 from "../Resources/p3.png";
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col mt-10 justify-center w-screen items-center bg-gray-900 h-fit py-10">
      <div className="h-fit 2xl:w-fit lg:w-screen md:flex hidden  md:w-screen">
        <div className="h-[551px] lg:w-[60%] 2xl:w-[700px] md:w-[60%] text-white flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">News Site</div>
          <div className="h-fit pb-8">
            I built a news website using Tailwind CSS and React.js, leveraging
            their strengths to create a visually appealing and responsive
            platform. Tailwind CSS provided a flexible framework, allowing for
            easy customization of design elements and ensuring a polished user
            interface. React.js facilitated the development of interactive
            features, enabling seamless article loading and enhancing the
            overall user experience. By integrating an external API, the website
            continuously fetches the latest news articles, ensuring users have
            access to up-to-date and reliable information. Together, these
            technologies allowed me to deliver a dynamic and engaging news
            website that offers a visually appealing design, smooth navigation,
            and a constant stream of current news content.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <a target="_blank" href="https://inder1712.github.io/Nasty-News/">
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View
              </button>
            </a>
          </div>
        </div>
        <div className="h-[551px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={p1}
            alt=""
            className={`w-[90%] transition-all duration-2000 ease-in-out `}
          />
        </div>
      </div>
      <div className="h-fit md:flex hidden 2xl:w-fit  lg:w-screen md:w-screen">
        <div className="h-[551px] 2xl:w-[550px] lg:w-[40%] bg-slate-950 md:w-[40%] flex justify-center items-center">
          <img
            src={p2}
            alt=""
            className={`w-[90%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[551px] lg:w-[60%] 2xl:w-[700px] text-white flex md:w-[60%] bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Dice Game</div>
          <div className="h-fit pb-8">
            I developed an exciting dice game using a combination of React.js,
            Tailwind CSS, and JavaScript. The objective of the game is to match
            all the dice by freezing them at the right moment. The game's
            interface was created using React.js, which allowed for the
            efficient management of components and state. Tailwind CSS was
            utilized to style the game, providing a visually appealing and
            responsive design. Through JavaScript, I implemented the game logic,
            including rolling the dice, freezing them, and checking for matching
            combinations. The combination of these technologies resulted in a
            captivating and interactive dice game experience, engaging players
            with its smooth gameplay, visually appealing design, and challenging
            objective.
          </div>
          <div className="h-14 w-[90%]">
            <a target="_blank" href="https://inder1712.github.io/Nasty-Dice/">
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-fit 2xl:w-fit md:flex hidden lg:w-screen md:w-screen">
        <div className="h-[551px] 2xl:w-[700px] lg:w-[50%] text-white  md:w-[60%] flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">To do list</div>
          <div className="h-fit pb-8">
            I developed a powerful full-stack to-do list application using
            React.js, Tailwind CSS, Node.js, and MongoDB. React.js facilitated
            the creation of a dynamic and interactive frontend, while Tailwind
            CSS ensured a visually appealing design. On the backend, Node.js
            served as the runtime environment, enabling the development of a
            robust API for user requests and authentication. MongoDB was
            utilized as the NoSQL database for efficient data storage and
            retrieval. The integration between the frontend and backend
            components allowed for real-time updates and seamless task
            management. Together, these technologies formed a cohesive and
            feature-rich application, providing users with an intuitive and
            responsive to-do list experience.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <a target="_blank" href="https://task-list-1168.netlify.app/">
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View
              </button>
            </a>
          </div>
        </div>
        <div className="h-[551px] 2xl:w-[550px] md:w-[40%]  lg:w-[60%] flex bg-slate-950 justify-center items-center">
          <img
            src={p3}
            alt=""
            className={`w-[90%] transition-all duration-2000 ease-in-out `}
          />
        </div>
      </div>

      {/* this is mobile one
       */}
      <div className="h-fit 2xl:w-fit lg:w-screen  md:hidden md:w-screen">
        <div className="h-[251px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] pt-5 flex bg-slate-950 justify-center items-center">
          <img
            src={p1}
            alt=""
            className={`h-[100%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[791px] lg:w-[60%] 2xl:w-[700px] md:w-[60%] text-white flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">News Site</div>
          <div className="h-fit pb-8">
            I built a news website using Tailwind CSS and React.js, leveraging
            their strengths to create a visually appealing and responsive
            platform. Tailwind CSS provided a flexible framework, allowing for
            easy customization of design elements and ensuring a polished user
            interface. React.js facilitated the development of interactive
            features, enabling seamless article loading and enhancing the
            overall user experience. By integrating an external API, the website
            continuously fetches the latest news articles, ensuring users have
            access to up-to-date and reliable information. Together, these
            technologies allowed me to deliver a dynamic and engaging news
            website that offers a visually appealing design, smooth navigation,
            and a constant stream of current news content.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <a target="_blank" href="https://inder1712.github.io/Nasty-News/">
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-fit 2xl:w-fit lg:w-screen  md:hidden md:w-screen">
        <div className="h-[251px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={p2}
            alt=""
            className={`h-[100%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[701px] lg:w-[60%] 2xl:w-[700px] text-white flex md:w-[60%] bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">Dice Game</div>
          <div className="h-fit pb-8">
            I developed an exciting dice game using a combination of React.js,
            Tailwind CSS, and JavaScript. The objective of the game is to match
            all the dice by freezing them at the right moment. The game's
            interface was created using React.js, which allowed for the
            efficient management of components and state. Tailwind CSS was
            utilized to style the game, providing a visually appealing and
            responsive design. Through JavaScript, I implemented the game logic,
            including rolling the dice, freezing them, and checking for matching
            combinations. The combination of these technologies resulted in a
            captivating and interactive dice game experience, engaging players
            with its smooth gameplay, visually appealing design, and challenging
            objective.
          </div>
          <div className="h-14 w-[90%]">
            <a target="_blank" href="https://inder1712.github.io/Nasty-Dice/">
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-fit 2xl:w-fit lg:w-screen  md:hidden md:w-screen">
        <div className="h-[251px] 2xl:w-[550px] lg:w-[40%] md:w-[40%] flex bg-slate-950 justify-center items-center">
          <img
            src={p3}
            alt=""
            className={`h-[100%] transition-all duration-2000 ease-in-out `}
          />
        </div>
        <div className="h-[701px] 2xl:w-[700px] lg:w-[50%] text-white  md:w-[60%] flex bg-slate-950 flex-col justify-center p-9">
          <div className="text-4xl h-[10%]">To do list</div>
          <div className="h-fit pb-8">
            I developed a powerful full-stack to-do list application using
            React.js, Tailwind CSS, Node.js, and MongoDB. React.js facilitated
            the creation of a dynamic and interactive frontend, while Tailwind
            CSS ensured a visually appealing design. On the backend, Node.js
            served as the runtime environment, enabling the development of a
            robust API for user requests and authentication. MongoDB was
            utilized as the NoSQL database for efficient data storage and
            retrieval. The integration between the frontend and backend
            components allowed for real-time updates and seamless task
            management. Together, these technologies formed a cohesive and
            feature-rich application, providing users with an intuitive and
            responsive to-do list experience.
          </div>
          <div className="h-14 w-[90%] justify-between flex">
            <a target="_blank" href="https://task-list-1168.netlify.app/">
              <button className="bg-blue-500 rounded-xl hover:bg-blue-400 hover:shadow-blue-500 shadow-sm shadow-blue-500/50 h-full w-44">
                View
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
