import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";

function Home() {
    return (
        <section className="home-yan" id="home">
            <h1 className="yan-title">Venkata Sai Manohar Gedela</h1>
            <p className="yan-role">
                <strong>Data Analyst & BI Specialist</strong>
            </p>
            <p className="yan-about">
                Senior Data Analyst & BI Specialist passionate about automation, AI, and transforming complex data into business decisions.<br />
                I’ve delivered results in banking, fintech, and healthcare, crafting modern dashboards, automating reporting, and thriving at the intersection of analytics and engineering.
            </p>
            <div className="yan-socials">
                <a href="mailto:gvsm1704@gmail.com" aria-label="Email"><FaEnvelope /></a>
                <a href="https://linkedin.com/in/gvsmanohar" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://github.com/gvsmanohar" aria-label="GitHub"><FaGithub /></a>
            </div>
        </section>
    );
}

export default Home;
