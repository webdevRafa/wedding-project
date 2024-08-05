import wedding from "./assets/wedding.svg";
import dj from "./assets/dj.svg";
import photographer from "./assets/photographer.svg";
import marriage from "./assets/marriage.svg";
import bartender from "./assets/bartender.svg";
import catering from "./assets/catering.svg";

import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

function App() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="first"
        className="relative flex items-center justify-center w-full h-[100vh] scroll-smooth transition duration-150 ease-in-out"
      >
        <div className="mx-auto w-[90%] max-w-[1200px] relative z-50">
          <h1 className="font-bodoni text-4xl mb-2 text-white">
            <span className="bg-dark-green px-2">VENDOR ARRIVAL</span>
          </h1>
          <h2 className="mr-[50%] mb-5 font-bold text-green">
            08/09/2024 Day before Event all tables chair and hardware equipment
            will arrive to ensure set up before guest and Brides arrival.
          </h2>
          <ul className="font-bodoni-italic text-1xl cursor-pointer">
            <li onClick={() => scrollToSection("second")}>
              <span className="transition duration-150 ease-in-out hover:bg-green hover:text-white p-1">
                DJ
              </span>
            </li>
            <li onClick={() => scrollToSection("third")}>
              <span className="transition duration-150 ease-in-out hover:bg-green hover:text-white p-1">
                Photographer
              </span>
            </li>
            <li onClick={() => scrollToSection("fourth")}>
              <span className="transition duration-150 ease-in-out hover:bg-green hover:text-white p-1">
                Wedding Officiant
              </span>
            </li>
            <li onClick={() => scrollToSection("fifth")}>
              <span className="transition duration-150 ease-in-out hover:bg-green hover:text-white p-1">
                Bartender
              </span>
            </li>
            <li onClick={() => scrollToSection("sixth")}>
              <span className="transition duration-150 ease-in-out hover:bg-green hover:text-white p-1">
                Caterer
              </span>
            </li>
          </ul>
        </div>

        <span
          onClick={() => scrollToSection("second")}
          className="flex items-center gap-1.5 absolute bottom-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleDown className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>DJ</button>
        </span>

        <div className="z-0 absolute w-[50%] h-[50vh]">
          <img className="opacity-40 mx-auto" src={wedding} alt="" />
        </div>
      </div>

      <div
        id="second"
        className="relative flex items-center justify-center w-full h-[100vh] scroll-smooth"
      >
        <div className="mx-auto w-[90%] max-w-[1200px] relative z-50">
          <h1 className="font-bodoni text-4xl mb-2 text-white">
            <span className="bg-dark-green px-2">DJ ARRIVAL</span>
          </h1>
          <h2 className="mr-[50%] mb-5 font-bold text-green">
            5:00 PM – 6:00 PM: DJ will arrive two hours prior for set up.
          </h2>
        </div>
        <span
          onClick={() => scrollToSection("first")}
          className="z-50 flex items-center gap-1.5 absolute top-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleUp className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>VENDORS</button>
        </span>

        <span
          onClick={() => scrollToSection("third")}
          className="z-50 flex items-center gap-1.5 absolute bottom-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleDown className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>PHOTOGRAPHER</button>
        </span>
        <div className="z-0 absolute w-full h-[100vh] flex justify-center items-center">
          <img
            className="opacity-40 mx-auto w-full max-w-[600px]"
            src={dj}
            alt=""
          />
        </div>
      </div>

      <div
        id="third"
        className="relative flex items-center justify-center w-full h-[100vh] scroll-smooth"
      >
        <div className="mx-auto w-[90%] max-w-[1200px] relative z-50">
          <h1 className="font-bodoni text-4xl mb-2 text-white">
            <span className="bg-dark-green px-2">PHOTOGRAPHER</span>
          </h1>
          <h2 className="mr-[50%] mb-5 font-bold text-green">
            5:30 PM – 6:00 PM: Wedding photographer and assistant to arrive for
            first looks and detail photos
          </h2>
        </div>
        <span
          onClick={() => scrollToSection("second")}
          className="z-50 flex items-center gap-1.5 absolute top-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleUp className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>DJ</button>
        </span>

        <span
          onClick={() => scrollToSection("fourth")}
          className="z-50 flex items-center gap-1.5 absolute bottom-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleDown className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>WEDDING OFFICIANT</button>
        </span>
        <div className="z-0 absolute w-full h-[100vh] flex justify-center items-center">
          <img
            className="w-full max-w-[1200px] opacity-40 mx-auto"
            src={photographer}
            alt=""
          />
        </div>
      </div>

      <div
        id="fourth"
        className="relative flex items-center justify-center w-full h-[100vh] scroll-smooth"
      >
        <div className="mx-auto w-[90%] max-w-[1200px] relative z-50">
          <h1 className="font-bodoni text-4xl mb-2 text-white">
            <span className="bg-dark-green px-2">WEDDING OFFICIANT</span>
          </h1>
          <h2 className="mr-[50%] mb-5 font-bold text-green">
            6:00 PM – 6:15 PM: Wedding officiant will arrive will need to set up
            table/podium as well as speaker and microphone.
          </h2>
        </div>
        <span
          onClick={() => scrollToSection("third")}
          className="z-50 flex items-center gap-1.5 absolute top-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleUp className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>PHOTOGRAPHER</button>
        </span>

        <span
          onClick={() => scrollToSection("fifth")}
          className="z-50 flex items-center gap-1.5 absolute bottom-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleDown className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>BARTENDER</button>
        </span>
        <div className="z-0 absolute w-full h-[100vh] flex justify-center items-center">
          <img
            className="opacity-40 mx-auto w-full max-w-[700px]"
            src={marriage}
            alt=""
          />
        </div>
      </div>

      <div
        id="fifth"
        className="relative flex items-center justify-center w-full h-[100vh] scroll-smooth"
      >
        <div className="mx-auto w-[90%] max-w-[1200px] relative z-50">
          <h1 className="font-bodoni text-4xl mb-2 text-white">
            <span className="bg-dark-green px-2">BARTENDER</span>
          </h1>
          <h2 className="mr-[50%] mb-5 font-bold text-green">
            6:00 PM – 6:30 PM: Bartender will arrive for set up to ensure
            cocktail hour starts promptly after cemermony
          </h2>
        </div>
        <span
          onClick={() => scrollToSection("fourth")}
          className="z-50 flex items-center gap-1.5 absolute top-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleUp className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>WEDDING OFFICIANT</button>
        </span>

        <span
          onClick={() => scrollToSection("sixth")}
          className="z-50 flex items-center gap-1.5 absolute bottom-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleDown className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>CATERER</button>
        </span>
        <div className="z-0 absolute w-full h-[100vh] flex justify-center items-center">
          <img
            className="opacity-40 mx-auto w-full max-w-[700px]"
            src={bartender}
            alt=""
          />
        </div>
      </div>

      <div
        id="sixth"
        className="relative flex items-center justify-center w-full h-[100vh] scroll-smooth"
      >
        <div className="mx-auto w-[90%] max-w-[1200px] relative z-50">
          <h1 className="font-bodoni text-4xl mb-2 text-white">
            <span className="bg-dark-green px-2">CATERER</span>
          </h1>
          <h2 className="mr-[50%] mb-5 font-bold text-green">
            6:00 PM – 6:30 PM: Cater will arrive for food truck set up
          </h2>
        </div>
        <span
          onClick={() => scrollToSection("fifth")}
          className="z-50 flex items-center gap-1.5 absolute top-5 mx-auto font-bodoni font-bold"
        >
          <FaArrowAltCircleUp className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>BARTENDER</button>
        </span>

        <span
          onClick={() => scrollToSection("first")}
          className="z-50 flex items-center gap-1.5 absolute bottom-5 mx-auto font-bodoni font-bold"
        >
          <IoHomeSharp className="animate-bounce size-10 cursor-pointer hover:scale-110 transition duration-150 ease-in-out" />
          <button>HOME</button>
        </span>
        <div className="z-0 absolute w-full h-[100vh] flex justify-center items-center">
          <img
            className="opacity-40 mx-auto w-full max-w-[700px]"
            src={catering}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
