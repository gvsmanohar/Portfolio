import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import "./Home.css";

function Home() {
    return (
        <section className="home-hero" id="home">
            <div className="hero-bg-svg" /> {/* Decorative SVG background */}
            <div className="hero-center-content">
                <h1 className="hero-main">Venkata Sai Manohar Gedela</h1>
                <h2 className="hero-role-alt">Data Analyst & BI Specialist</h2>
                <p className="hero-tagline-alt">
                    Transforming data into insight and automation.<br />
                    <span>Tableau | Python | SQL | Cloud ETL | ML</span>
                </p>
                <p className="hero-about">
                    Senior Data Analyst and BI Specialist passionate about automation, AI, and transforming raw data into business decisions.
                    Experienced in banking, fintech, and healthcare.
                    I craft modern dashboards, automate reporting, and thrive at the intersection of analytics and engineering.
                </p>
                <div className="hero-social-row">
                    {/* ...icons... */}
                </div>
                <a
                    href="https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-tableau-link"
                >
                    Explore My Tableau Dashboards →
                </a>
            </div>

        </section>
    );
}

export default Home;
