import { skillGroups } from "../../data/skills";
import "../../styles/skills.css";

export default function Skills() {
  return (
    <section id="habilidades" className="wrap">
      <p className="path-label">habilidades</p>
      <h2>Com o que eu trabalho</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.id}>
            <h4>{group.title}</h4>
            <div className="tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}