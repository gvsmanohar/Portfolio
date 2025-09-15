import React from "react";
import "./Skills.css";

const skills = [
    {
        category: "BI & Data Visualization",
        items: ["Tableau", "Power BI", "Excel", "Qlik"]
    },
    {
        category: "Machine Learning/AI",
        items: ["Pandas", "Numpy", "Scikit-learn", "TensorFlow"]
    },
    {
        category: "Cloud / Automation",
        items: ["AWS", "Jenkins", "Alteryx"]
    },
    {
        category: "Programming & Databases",
        items: ["Python", "SQL"]
    },
    {
        category: "ETL & Data Quality",
        items: [
            "Data Transformation",
            "Data Cleaning",
            "Data Quality Assurance",
            "Data Integration"
        ]
    },
    {
        category: "Collaboration & PM",
        items: ["Git", "JIRA", "Agile Methodologies", "Project Coordination"]
    }
];

const certifications = [
    "Google Data Analytics",
    // Add more here if you want to show others
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Key Skills & Certifications</h2>
            <div className="skills-grid">
                {skills.map((block, idx) => (
                    <div className="skill-card" key={idx}>
                        <h4>{block.category}</h4>
                        <ul>
                            {block.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="certifications">
                <h3>Certifications</h3>
                {certifications.map((cert, i) => (
                    <div className="cert-badge" key={i}>
                        {cert}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
