import React from "react";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import TeckStack from "./pages/TeckStack/TeckStack";
import Project from "./pages/Project/Project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <TeckStack />
          <Project />
          <Education />
          <WorkExp />
          <Contact />
        </div>
      </div>
      <div className="footer  py-3">
        <h4 className="text-center">Made With 😍 Mahmud &copy; 2023</h4>
      </div>
    </>
  );
};

export default App;
