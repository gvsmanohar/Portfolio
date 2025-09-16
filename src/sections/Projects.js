import React from "react";
import "./Projects.css";

const projectList = [
    {
        title: "Market Basket Analysis & Recommendation System",
        desc: "Identified product association rules using Apriori & FP-Growth. Enabled merchants to personalize bundles and cross-selling.",
        tags: ["Python", "Tableau", "EDA", "Machine Learning"],
        link: "https://github.com/gvsmanohar/Markets-Basket-Analysis-and-Recommendation-Systems"
    },
    {
        title: "Sales Forecasting (52 Weeks, Multi-product)",
        desc: "Developed weekly sales forecasting model leveraging last year’s data and weather insights. Automated forecasts and dashboard reporting.",
        tags: ["Tableau", "Forecasting", "SQL", "Python"],
        link: "https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes"
    },
    {
        title: "Optimal Time for Mechanical Ventilation Weaning",
        desc: "Built a predictive ML model for NHS UK to optimize ventilator weaning. Improved ICU workflow and patient care.",
        tags: ["Machine Learning", "Scikit-learn", "Pandas"],
        link: "https://github.com/gvsmanohar/Optimal-time-for-weaning-of-patients-in-mechanical-ventilation"
    }
];

const externalLinks = [
    {
        label: "See all Tableau Dashboards",
        url: "https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes"
    },
    {
        label: "See all GitHub Projects",
        url: "https://github.com/gvsmanohar?tab=repositories"
    }
];

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">Key Projects & Portfolio</h2>
            <div className="projects-grid">
                {projectList.map((project, idx) => (
                    <div className="project-card" key={idx}>
                        <h4>{project.title}</h4>
                        <p>{project.desc}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span className="tag" key={i}>{tag}</span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
            <div className="portfolio-links">
                {externalLinks.map((ext, i) => (
                    <a
                        href={ext.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                        className="external-link"
                    >
                        {ext.label}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;
