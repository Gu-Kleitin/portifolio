import { contactLinks } from "../../data/contact.ts";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <section id="contato" className="wrap">
      <p className="path-label">contato</p>
      <h2>Vamos conversar</h2>
      <div className="contact-grid">
        {contactLinks.map((link) =>
          link.href ? (
            <a
              className="contact-card"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
            >
              <span className="k">{link.label}</span>
              <span className="v">{link.value}</span>
            </a>
          ) : (
            <div className="contact-card static" key={link.label}>
              <span className="k">{link.label}</span>
              <span className="v">{link.value}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}