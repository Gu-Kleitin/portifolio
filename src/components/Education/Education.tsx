import { timeline, certificates } from "../../data/education.ts";
import "../../styles/education.css";

export default function Education() {
  return (
    <section id="formacao" className="wrap">
      <p className="path-label">formação</p>
      <h2>Educação e certificados</h2>

      <ul className="timeline">
        {timeline.map((item) => (
          <li key={item.title}>
            <span className="period">{item.period}</span>
            <h4>{item.title}</h4>
            <p>{item.place}</p>
          </li>
        ))}
      </ul>

      <div className="certs">
        <h3>Cursos e certificados</h3>
        <ul className="cert-list">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <a href={cert.url} target="_blank" rel="noopener">
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}