import React from "react";
import "./App.css";

// Import sections
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="app-container">
            <Home />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
}

export default App;
