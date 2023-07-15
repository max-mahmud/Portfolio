import React from "react";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
      </div>
    </>
  );
};

export default App;
