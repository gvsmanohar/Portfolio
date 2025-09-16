import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [copied, setCopied] = useState(false);

    const email = "gvsm1704@gmail.com";
    const phone = "+91 7680859925";
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-card">
                <p>
                    <strong>Email:</strong>
                    <span
                        className="copyable"
                        onClick={() => handleCopy(email)}
                        title="Click to copy"
                        tabIndex={0}
                    >
                        {email}
                    </span>
                </p>
                <p>
                    <strong>Phone:</strong>
                    <span
                        className="copyable"
                        onClick={() => handleCopy(phone)}
                        title="Click to copy"
                        tabIndex={0}
                    >
                        {phone}
                    </span>
                </p>
                <a
                    href="https://linkedin.com/in/gvsmanohar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    LinkedIn Profile
                </a>
                <a
                    href="https://github.com/gvsmanohar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    GitHub Profile
                </a>
                <p className="copy-status">
                    {copied ? "Copied!" : <span>&nbsp;</span>}
                </p>
            </div>
        </section>
    );
}

export default Contact;
