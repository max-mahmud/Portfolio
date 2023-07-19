import React from "react";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import TeckStack from "./pages/TeckStack/TeckStack";
import Project from "./pages/Project/Project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
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
      <div className="footer bg-success py-3 ms-3">
        <h4 className="text-center">Made With 😍 Mahmud &copy; 2023</h4>
      </div>
    </>
  );
};

export default App;
