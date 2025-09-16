import React from "react";
import "./Projects.css";

const projects = [
    {
        name: "Market Basket Analysis & Recommender",
        desc: "Association rules, bundles, and cross-selling insights.",
        link: "https://github.com/gvsmanohar/Markets-Basket-Analysis-and-Recommendation-Systems"
    },
    {
        name: "Sales Forecasting & Dashboards",
        desc: "Weekly sales forecasts and Tableau automated visualizations.",
        link: "https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes"
    },
    // Add more as needed
];

function Projects() {
    return (
        <section className="projects-yan" id="projects">
            <h2 className="section-title-yan">Key Projects</h2>
            <ul className="projects-list-yan">
                {projects.map((p, idx) =>
                    <li key={idx}>
                        <strong>{p.name}:</strong> {p.desc}{" "}
                        <a href={p.link} target="_blank" rel="noopener noreferrer">[link]</a>
                    </li>
                )}
            </ul>
        </section>
    );
}
export default Projects;
