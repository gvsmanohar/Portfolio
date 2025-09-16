import React from "react";
import "./Education.css";
const schools = [
    {
        degree: "MSc Data Analytics",
        school: "University of Sheffield, UK",
        year: "2021"
    },
    {
        degree: "B.E. Electronics & Communication",
        school: "VIT, Vellore, India",
        year: "2019"
    }
];
function Education() {
    return (
        <section className="education" id="education">
            <h2 className="section-title">Education</h2>
            <div className="edu-list">
                {schools.map((s, i) => (
                    <div className="edu-block" key={i}>
                        <span className="edu-degree">{s.degree}</span>
                        {" — "}
                        <span className="edu-inst">{s.school}</span>
                        {" ("}
                        <span className="edu-year">{s.year}</span>
                        {")"}
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Education;
