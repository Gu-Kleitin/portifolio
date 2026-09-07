import type { CSSProperties } from "react";
import type { Project } from "../../types";
import TreeAccent from "./TreeAccent";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="project"
      style={{ "--project-accent": project.accent ?? "#6cc79a" } as CSSProperties}
    >
      <div className="project-media">
        {project.media?.type === "image" && (
          <img src={project.media.src} alt={project.media.alt} />
        )}
        {project.media?.type === "video" && (
          <video controls poster={project.media.poster} title={project.media.title}>
            <source src={project.media.src} />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        )}
        {!project.media && <span>Mídia do projeto em breve</span>}
      </div>
      {project.hasTreeAccent && <TreeAccent />}
      <div className="project-head">
        <h3>{project.title}</h3>
        <time>{project.period}</time>
      </div>
      <p className="desc">{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.linkUrl} target="_blank" rel="noopener">
          {project.linkLabel}
        </a>
      </div>
    </div>
  );
}