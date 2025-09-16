import React from "react";
import "./Skills.css";

const skills = [
    "Tableau", "Power BI", "Python", "SQL", "ETL Automation", "Data Visualization", "Cloud (AWS)", "Machine Learning"
];

function Skills() {
    return (
        <section className="skills-yan" id="skills">
            <h2 className="section-title-yan">Key Skills</h2>
            <ul className="skills-list-yan">
                {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </section>
    );
}

export default Skills;
