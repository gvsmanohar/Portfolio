import React from "react";
import "./Contact.css";
function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section-title">Contact</h2>
            <ul className="contact-info">
                <li><b>Email:</b> <a href="mailto:gvsm1704@gmail.com">gvsm1704@gmail.com</a></li>
                <li><b>LinkedIn:</b> <a href="https://linkedin.com/in/gvsmanohar" target="_blank" rel="noopener noreferrer">linkedin.com/in/gvsmanohar</a></li>
                <li><b>GitHub:</b> <a href="https://github.com/gvsmanohar" target="_blank" rel="noopener noreferrer">github.com/gvsmanohar</a></li>
            </ul>
        </section>
    );
}
export default Contact;
