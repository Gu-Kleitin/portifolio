import { useLayoutEffect, useRef, useState } from "react";
import type { TransitionEvent } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "../../styles/projects.css";

export default function Projects() {
  const cycleCount = 7;
  const centerCycle = Math.floor(cycleCount / 2);
  const [activePosition, setActivePosition] = useState(centerCycle * projects.length);
  const [translateX, setTranslateX] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselProjects = Array.from({ length: cycleCount }, () => projects).flat();
  const activeIndex = activePosition % projects.length;

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const activeSlide = slideRefs.current[activePosition];
    if (!stage || !activeSlide) return;

    setTranslateX(
      stage.clientWidth / 2 - activeSlide.offsetLeft - activeSlide.offsetWidth / 2
    );
  }, [activePosition]);

  const showPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActivePosition((current) => current - 1);
  };

  const showNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActivePosition((current) => current + 1);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    const lowerBoundary = projects.length;
    const upperBoundary = projects.length * (cycleCount - 2);

    if (activePosition <= lowerBoundary || activePosition >= upperBoundary) {
      const resetPosition =
        activePosition <= lowerBoundary
          ? activePosition + projects.length * centerCycle
          : activePosition - projects.length * centerCycle;

      setTransitionEnabled(false);
      setActivePosition(resetPosition);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsAnimating(false);
        });
      });
      return;
    }

    setIsAnimating(false);
  };

  const selectProject = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActivePosition(centerCycle * projects.length + index);
  };

  return (
    <section id="projetos" className="wrap">
      <p className="path-label">projetos</p>
      <h2>O que eu tenho construído</h2>

      <div className="projects-carousel" aria-label="Projetos do portfólio">
        <div className="projects-stage" ref={stageRef}>
          <div
            className={`projects-track ${transitionEnabled ? "has-transition" : ""}`}
            style={{ transform: `translateX(${translateX}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {carouselProjects.map((project, index) => (
              <div
                className={`project-slide ${index === activePosition ? "is-active" : ""}`}
                key={`${project.id}-${index}`}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                aria-hidden={index === activePosition ? undefined : true}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-previous"
            type="button"
            onClick={showPrevious}
            aria-label="Projeto anterior"
          >
            ←
          </button>
          <button
            className="carousel-arrow carousel-arrow-next"
            type="button"
            onClick={showNext}
            aria-label="Próximo projeto"
          >
            →
          </button>
        </div>

        <div className="carousel-controls">
          <div className="carousel-dots" aria-label="Selecionar projeto">
            {projects.map((project, index) => (
              <button
                className={index === activeIndex ? "is-active" : ""}
                key={project.id}
                type="button"
                aria-label={`Ver ${project.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => selectProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}