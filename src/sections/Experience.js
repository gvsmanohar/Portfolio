import React from "react";
import "./Experience.css";

const jobs = [
    {
        place: "Infonix Solutions, UK",
        role: "Data Analyst",
        period: "Oct 2023–Aug 2025",
        bullets: [
            "Delivered BI dashboards for finance/healthcare executives.",
            "Built and maintained ETL pipelines and automations.",
            "Coordinated with business users and project managers."
        ]
    },
    {
        place: "HSBC, London, UK",
        role: "Data Analyst / Tableau Developer",
        period: "June 2022–Sept 2023",
        bullets: [
            "Designed 15+ Tableau dashboards for global teams.",
            "Automated reporting workflows with VBA/Excel & Jenkins.",
            "Used Alteryx for ETL, automated JIRA, compliance dashboards."
        ]
    },
    {
        place: "NHS, Sheffield, UK",
        role: "Intern Data Analyst",
        period: "Feb 2021–May 2021",
        bullets: [
            "Built ML model for ICU ventilator optimization.",
            "Integrated analytics for clinical decision support."
        ]
    }
];

function Experience() {
    return (
        <section className="exp-yan" id="experience">
            <h2 className="section-title-yan">Experience</h2>
            <div className="exp-list-yan">
                {jobs.map((j, idx) => (
                    <div className="exp-block-yan" key={idx}>
                        <div className="exp-role">{j.role}</div>
                        <div className="exp-meta">
                            <span className="exp-place">{j.place}</span> · <span>{j.period}</span>
                        </div>
                        <ul>
                            {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Experience;
