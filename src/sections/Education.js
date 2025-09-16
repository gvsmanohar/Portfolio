import React from "react";
import "./Education.css";

const schools = [
    {
        degree: "MSc Data Analytics",
        institution: "University of Sheffield, UK",
        year: "2021"
    },
    {
        degree: "B.E. Electronics & Communication",
        institution: "VIT, Vellore, India",
        year: "2019"
    }
];

function Education() {
    return (
        <section className="edu-yan" id="education">
            <h2 className="section-title-yan">Education</h2>
            <div className="edu-list-yan">
                {schools.map((s, idx) =>
                    <div className="edu-block-yan" key={idx}>
                        <div className="edu-degree">{s.degree}</div>
                        <div className="edu-meta">{s.institution} • {s.year}</div>
                    </div>
                )}
            </div>
        </section>
    );
}
export default Education;
