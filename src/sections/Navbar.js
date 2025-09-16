import React from "react";
import "./Navbar.css";

const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
];

function Navbar() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="yan-navbar">
            <div className="navbar-container">
                <span className="nav-name">V S Manohar Portfolio</span>
                <ul className="nav-list">
                    {sections.map(({ id, label }) =>
                        <li key={id}>
                            <button className="nav-item" onClick={() => scrollTo(id)}>
                                {label}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
