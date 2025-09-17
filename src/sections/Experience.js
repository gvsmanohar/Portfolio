import React from "react";
import "./Experience.css";

const experienceData = [
    {
        company: "Infonix Solutions, UK",
        role: "Senior Consultant",
        dates: "Oct 2023 – Aug 2025"
    },
    {
        company: "HSBC, London, UK",
        role: "Analytics Consultant",
        dates: "June 2022 – Sept 2023"
    },
    {
        company: "NHS, Sheffield, UK",
        role: "Intern Data Analyst",
        dates: "Feb 2021 – May 2021"
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
