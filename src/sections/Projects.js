import React from "react";
import "./Projects.css";
const projects = [
    {
        title: "Market Basket Analysis & Recommendation System",
        desc: "Association rules with Apriori & FP-Growth. Personalized product bundles and cross-sell.",
        link: "https://github.com/gvsmanohar/Markets-Basket-Analysis-and-Recommendation-Systems"
    },
    {
        title: "Sales Forecasting (52 weeks, multi-product)",
        desc: "Automated weekly forecast using last year and weather data; live reporting in Tableau.",
        link: "https://public.tableau.com/app/profile/venkata.sai.manohar.gedela/vizzes"
    },
    {
        title: "Optimal Time for Mechanical Ventilation Weaning (NHS)",
        desc: "ML model to optimize ICU ventilator use. Integrated with NHS decision support.",
        link: "https://github.com/gvsmanohar/Optimal-time-for-weaning-of-patients-in-mechanical-ventilation"
    }
];
function Projects() {
    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Key Projects</h2>
            <ul className="projects-list">
                {projects.map((p, i) => (
                    <li key={i}>
                        <b>{p.title}:</b> {p.desc}&nbsp;
                        <a href={p.link} target="_blank" rel="noopener noreferrer">[View]</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default Projects;
