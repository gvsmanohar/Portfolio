import React from "react";
import "./Home.css";

function Home() {
    return (
        <section className="home-section" id="home">
            <div className="home-content">
                <h1>Venkata Sai Manohar Gedela</h1>
                <h2>Data Analyst | BI Specialist | Data Visualization Engineer</h2>
                <p>
                    <strong>Location:</strong> Visakhapatnam, India
                </p>
                <p>
                    I convert data into actionable insights and deliver automation-driven BI solutions. 3+ years experience across the financial and healthcare sectors—specialized in Tableau, Power BI, SQL & Python. Passionate about scalable data architecture, optimizing analytics, and outcome-driven solutions. <br />
                    <span className="animated-tagline">
                        Creating Insights | Automating Analytics | Empowering Decisions
                    </span>
                </p>
                <div className="home-buttons">
                    <a href="mailto:gvsm1704@gmail.com" target="_blank" rel="noopener noreferrer" className="primary-btn">Email Me</a>
                    <a href="https://linkedin.com/in/gvsmanohar" target="_blank" rel="noopener noreferrer" className="outline-btn">LinkedIn</a>
                    <a href="https://github.com/gvsmanohar" target="_blank" rel="noopener noreferrer" className="outline-btn">GitHub</a>
                    <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className="outline-btn">Download CV</a>
                </div>
                <div className="tableau-link">
                    <a href="https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes" target="_blank" rel="noopener noreferrer">
                        → View My Tableau Dashboards
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
