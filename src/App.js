import React from "react";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
    return (
        <div className="app-main">
            <Navbar />
            <Home />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Contact />
        </div>
    );
}

function SectionDivider() {
    return <hr className="section-divider" />;
}

export default App;
