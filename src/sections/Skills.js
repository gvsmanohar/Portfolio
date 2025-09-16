import React from "react";
import "./Skills.css";
const skills = [
    "Tableau", "Power BI", "Python", "SQL", "ETL Automation",
    "Data Visualization", "AWS", "Machine Learning"
];
function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="section-title">Key Skills</h2>
            <ul className="skills-list">
                {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </section>
    );
}
export default Skills;
