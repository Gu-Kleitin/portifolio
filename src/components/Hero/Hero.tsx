import "../../styles/hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="wrap hero">
      <div>
        <h1>
          Gustavo Oliveira
          <br />
          <span className="role">Desenvolvedor Full Stack</span>
        </h1>
        <p className="lead">
          Construo APIs e aplicações web com Node.js, TypeScript e Python.
          Atualmente em formação em Sistemas de Informação onde estou aprendendo,
          desenvolvendo, testando, quebrando e corrigindo projetos.
        </p>
        <div className="cta-row">
          <a className="btn primary" href="#projetos">
            Ver projetos
          </a>
          <a
            className="btn"
            href="https://github.com/Gu-Kleitin"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a className="btn" href="mailto:gustavod.oliveira080@gmail.com">
            Contato
          </a>
        </div>
      </div>

      <div className="term">
        <div className="term-bar">
          <div className="term-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>perfil.json</span>
        </div>
        <div className="term-body">
          <div className="term-req">
            <span className="method">GET</span> /gustavo/perfil{" "}
            <span className="term-status">200 OK</span>
          </div>
          <div>
            <span className="json-punct">{"{"}</span>
            <br />
            &nbsp;&nbsp;<span className="json-key">"nome"</span>
            <span className="json-punct">:</span>{" "}
            <span className="json-str">"Gustavo de Oliveira Pedrosa"</span>
            <span className="json-punct">,</span>
            <br />
            &nbsp;&nbsp;<span className="json-key">"cargo"</span>
            <span className="json-punct">:</span>{" "}
            <span className="json-str">"Full Stack Developer"</span>
            <span className="json-punct">,</span>
            <br />
            &nbsp;&nbsp;<span className="json-key">"local"</span>
            <span className="json-punct">:</span>{" "}
            <span className="json-str">"Sabará, MG"</span>
            <span className="json-punct">,</span>
            <br />
            &nbsp;&nbsp;<span className="json-key">"stack"</span>
            <span className="json-punct">:</span>{" "}
            <span className="json-punct">[</span>
            <span className="json-str">"Node.js"</span>
            <span className="json-punct">,</span>{" "}
            <span className="json-str">"TypeScript"</span>
            <span className="json-punct">,</span>{" "}
            <span className="json-str">"React"</span>
            <span className="json-punct">,</span>{" "}
            <span className="json-str">"Python"</span>
            <span className="json-punct">],</span>
            <br />
            &nbsp;&nbsp;<span className="json-key">"status"</span>
            <span className="json-punct">:</span>{" "}
            <span className="json-str">"disponível para oportunidades"</span>
            <span className="cursor"></span>
            <br />
            <span className="json-punct">{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}