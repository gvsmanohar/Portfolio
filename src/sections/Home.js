import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import "./Home.css";

function Home() {
    return (
        <section className="home-section-v2" id="home">
            <div className="hero-content fadein-slide">
                <h1 className="hero-title">Venkata Sai Manohar Gedela</h1>
                <h2 className="hero-role">Data Analyst & BI Specialist</h2>
                <p className="hero-tagline">
                    I convert data into impactful stories and automated analytics.<br />
                    <span className="hero-highlight">
                        Experience in Tableau, Python, SQL, Cloud ETL &amp; ML.
                    </span>
                </p>
                <div className="hero-icons">
                    <a
                        href="mailto:gvsm1704@gmail.com"
                        title="Email"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://linkedin.com/in/gvsmanohar"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/gvsmanohar"
                        title="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="/Resume.pdf"
                        title="Download Resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn"
                        aria-label="Resume"
                    >
                        <FaFilePdf />
                    </a>
                </div>
                <div className="tableau-link-v2">
                    <a href="https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes" target="_blank" rel="noopener noreferrer">
                        Explore My Tableau Dashboards →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
