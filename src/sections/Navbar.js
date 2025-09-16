import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const SECTIONS = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
];

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const lastScroll = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const current = window.scrollY;
            setHidden(current > lastScroll.current && current > 75);
            lastScroll.current = current;
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
            <div className="navbar-content">
                <span className="navbar-title">V S Manohar Portfolio</span>
                <ul className="navbar-links">
                    {SECTIONS.map((s) =>
                        <li key={s.id}>
                            <button className="nav-link" onClick={() => scrollTo(s.id)}>
                                {s.label}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
