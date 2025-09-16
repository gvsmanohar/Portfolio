import React from "react";
import "./Experience.css";
const jobs = [
    {
        company: "Infonix Solutions, UK",
        role: "Data Analyst",
        dates: "Oct 2023 – Aug 2025",
        details: [
            "Delivered BI solutions & dashboards for financial/healthcare.",
            "Built cloud-based ETL pipelines and reporting automations.",
            "Collaborated across functions for BI delivery."
        ]
    },
    {
        company: "HSBC, London, UK",
        role: "Data Analyst / Tableau Developer",
        dates: "Jun 2022 – Sept 2023",
        details: [
            "Designed Tableau dashboards for regulatory analytics.",
            "Automated reporting in Excel and JIRA with Jenkins.",
            "Provided compliance dashboards and SLA tracking."
        ]
    },
    {
        company: "NHS, Sheffield, UK",
        role: "Intern Data Analyst",
        dates: "Feb 2021 – May 2021",
        details: [
            "Built ML model for ventilator weaning optimization.",
            "Integrated insights into NHS clinical workflows."
        ]
    }
];
function Experience() {
    return (
        <section className="experience" id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="exp-items">
                {jobs.map((j, idx) => (
                    <div className="exp-block" key={idx}>
                        <div className="exp-header">
                            <span className="exp-role">{j.role}</span>{' '}
                            <span className="exp-company">@ {j.company}</span>
                            <span className="exp-dates">{j.dates}</span>
                        </div>
                        <ul className="exp-bullets">
                            {j.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Experience;
