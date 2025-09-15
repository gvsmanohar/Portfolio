import React from "react";
import "./Experience.css";

const experienceData = [
    {
        company: "Infonix Solutions, UK",
        role: "Data Analyst",
        dates: "Oct 2023 – Aug 2025",
        details: [
            "Delivered BI solutions & dashboards for key stakeholders in financial and healthcare sectors.",
            "Built and maintained cloud-based ETL pipelines and automation.",
            "Collaborated with project managers, team leads, and business users for BI delivery."
        ]
    },
    {
        company: "HSBC, London, UK",
        role: "Data Analyst / Tableau Developer",
        dates: "June 2022 – Sept 2023",
        details: [
            "Designed 15+ Tableau dashboards for Regulatory Analytics and SLA tracking across 5 global teams.",
            "Automated manual reporting workflows with Excel VBA macros, reducing effort by 40%.",
            "Utilized Alteryx for ETL, automated JIRA story creation using Jenkins based on ServiceNow tickets.",
            "Delivered discriminatory power dashboards and compliance monitoring solutions."
        ]
    },
    {
        company: "NHS, Sheffield, UK",
        role: "Intern Data Analyst",
        dates: "Feb 2021 – May 2021",
        details: [
            "Built predictive ML model (Linear Regression, k-means) to optimize ICU ventilator weaning time.",
            "Integrated model insights into NHS clinical tools, enhancing decision-making for doctors."
        ]
    }
];

function Experience() {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
                {experienceData.map((item, idx) => (
                    <div className="timeline-item" key={idx}>
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3>
                                {item.role} @ <span className="company">{item.company}</span>
                            </h3>
                            <span className="dates">{item.dates}</span>
                            <ul>
                                {item.details.map((point, id) => (
                                    <li key={id}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
