import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import React, { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className='dark:bg-gray-700 border-neutral-100'>
        <Header dark={dark} setDark={setDark} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
