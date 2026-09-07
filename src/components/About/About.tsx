import type { ReactNode } from "react";
import "../../styles/about.css";

const FACTS: { k: string; v: ReactNode }[] = [
  {
    k: "FORMAÇÃO",
    v: (
      <span className="formation-list">
        <span>
          Técnico em Informática
          <small>2021 – 2023</small>
        </span>
        <span>
          Bacharelado em Sistemas de Informação
          <small>2024 – atualmente</small>
        </span>
      </span>
    ),
  },
  { k: "INSTITUIÇÃO", v: "IFMG – Campus Sabará" },
  { k: "LOCALIZAÇÃO", v: "Sabará, MG" },
  { k: "IDIOMAS", v: "Português, Inglês" },
];

export default function About() {
  return (
    <section id="sobre" className="wrap">
      <p className="path-label">sobre</p>
      <div className="about-grid">
        <div>
          <p>
            Sou graduando em Sistemas de Informação no IFMG – Campus Sabará,
            onde também concluí o técnico em Informática. Ao longo desse
            percurso venho desenvolvendo aplicações e APIs RESTful,
            participando desde o levantamento de requisitos até a modelagem
            de banco de dados e a integração entre front-end, back-end e
            mobile.
          </p>
          <p>
            Gosto de projetos que me obrigam a entender o problema antes de
            escrever código assim como foi no Pro-Esporte Sabará, um projeto
            interdisciplinar que atualmente está virando uma pesquisa acadêmica, 
            e no Catálogo de Calistenia, onde precisei modelar uma árvore de progressão 
            entre exercícios em SQL e depois desenhá-la em SVG.
          </p>
        </div>
        <ul className="facts">
          {FACTS.map((fact) => (
            <li key={fact.k}>
              <span className="k">{fact.k}</span>
              <span className="v">{fact.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}