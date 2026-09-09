"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitFork } from "lucide-react";
import { useState } from "react";
import { projects } from "@/config/projects";

function ProjectVisual({
  project,
}: {
  project: (typeof projects)[number];
}) {
  if (project.image) {
    return (
      <div className="project-image">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={`system-map system-map--${project.id}`}>
      <div className="system-map__topline">
        <span>{project.visual.eyebrow}</span>
        <span>SYS / {project.number}</span>
      </div>

      <div className="system-map__canvas" aria-hidden="true">
        <div className="system-map__rail" />
        {project.visual.nodes.map((node, index) => (
          <div className="system-node" key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>

      <div className="system-map__footer">
        <span>{project.visual.caption}</span>
        <span className="status-dot">Operational concept</span>
      </div>
    </div>
  );
}

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const selectProject = (index: number) => {
    setActiveIndex(index);
  };

  const moveProject = (direction: -1 | 1) => {
    setActiveIndex(
      (current) => (current + direction + projects.length) % projects.length,
    );
  };

  return (
    <section className="projects section-dark" id="work" aria-labelledby="work-title">
      <div className="section-shell">
        <header className="projects__header">
          <div>
            <p className="kicker kicker--light">Selected systems / 2026</p>
            <h2 id="work-title">Work that thinks<br />and does.</h2>
          </div>

          <nav className="project-index" aria-label="Select a featured project">
            {projects.map((item, index) => (
              <button
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                key={item.id}
                onClick={() => selectProject(index)}
                aria-label={`View project ${item.number}: ${item.title}`}
                aria-pressed={index === activeIndex}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </nav>
        </header>

        <article className="project-chapter" key={project.id}>
          <div className="project-chapter__intro">
            <div className="project-count">
              <span>{project.number}</span>
              <span>/ {String(projects.length).padStart(2, "0")}</span>
            </div>
            <p className="project-subtitle">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-actions">
              <a
                className="button button--inverse"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              {project.githubUrl ? (
                <a
                  className="text-link text-link--light"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitFork aria-hidden="true" size={16} />
                  GitHub <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              ) : (
                <span
                  className="text-link text-link--light is-disabled"
                  aria-label="GitHub repository link not yet available"
                >
                  <GitFork aria-hidden="true" size={16} />
                  GitHub link pending
                </span>
              )}
            </div>
          </div>

          <div className="project-chapter__visual">
            <ProjectVisual project={project} />
          </div>

          <div className="project-chapter__details">
            <div>
              <p className="detail-label">What it does</p>
              <p>{project.whatItDoes}</p>
            </div>
            <div>
              <p className="detail-label">The problem</p>
              <p>{project.problem}</p>
            </div>
            <div className="detail-main-idea">
              <p className="detail-label">The main idea</p>
              <p>{project.mainIdea}</p>
            </div>
          </div>

          <ul className="tech-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>

        <div className="project-controls">
          <button
            type="button"
            onClick={() => moveProject(-1)}
            aria-label="View previous project"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Previous
          </button>
          <p aria-live="polite">
            {project.number} / {String(projects.length).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={() => moveProject(1)}
            aria-label="View next project"
          >
            Next project
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
