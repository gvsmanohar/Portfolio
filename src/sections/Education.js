import React from "react";
import "./Education.css";

const educationData = [
    {
        degree: "Master of Science (Data Analytics)",
        institution: "The University of Sheffield, United Kingdom",
        year: "2021"
    },
    {
        degree: "Bachelors in Electronics and Communication",
        institution: "VIT, Vellore, India",
        year: "2020"
    }
];

function Education() {
    return (
        <section className="education-section" id="education">
            <h2 className="section-title">Education</h2>
            <div className="edu-grid">
                {educationData.map((item, idx) => (
                    <div className="edu-card" key={idx}>
                        <h3>{item.degree}</h3>
                        <p>{item.institution}</p>
                        <span className="edu-year">{item.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
