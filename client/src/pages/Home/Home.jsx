import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/resume.txt";
import "./home.css";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Home = ({toggle}) => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`container-fluid ${toggle ? "home-container" : "home-container-less"}`} id="home">
        <div className="container home-content">
          <div className="theme-btn" onClick={handleTheme}>
            {theme === "light" ? <BsFillMoonStarsFill size={30} /> : <BsFillSunFill size={30} />}
          </div>
          <Fade right>
            <h2>Hi I'm Mahmud Hossain </h2>

            <h1>
              <Typewriter
                options={{
                  strings: [`FullStack Developer!`, "Mern Stack Developer!", "React Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv" href={Resume} download="mahmud-resume.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
