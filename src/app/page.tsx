import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { ProjectShowcase } from "@/components/project-showcase";
import { SiteHeader } from "@/components/site-header";
import { capabilities, process, stack } from "@/config/content";
import { siteConfig } from "@/config/site";

const emailHref = `mailto:${siteConfig.email}`;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__meta">
            <p>Hi, I am</p>
            <p>India / Available worldwide</p>
          </div>

          <div className="hero__title-wrap">
            <h1 id="hero-title">
              <span>Sourav</span>
              <span className="hero__surname">Mane<span className="hero__period">.</span></span>
            </h1>
            <p className="hero__role">{siteConfig.role}</p>
          </div>

          <div className="hero__statement">
            <p>{siteConfig.positioning}</p>
            <div className="hero__actions">
              <a className="button" href="#work">
                View my work <ArrowDown aria-hidden="true" size={16} />
              </a>
              <a
                className="text-link"
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </div>

          <div className="hero__footer">
            <p>AI Agents · Agentic Workflows · RAG · Automation · Production AI</p>
            <div className="hero__socials" aria-label="Contact links">
              <a href={emailHref} aria-label={`Email ${siteConfig.name}`}>
                <Mail aria-hidden="true" size={17} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on LinkedIn`}
              >
                <span aria-hidden="true">in</span>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} on GitHub`}
              >
                <span aria-hidden="true">gh</span>
              </a>
            </div>
          </div>
        </section>

        <ProjectShowcase />

        <section className="capabilities section-light" aria-labelledby="capabilities-title">
          <div className="section-shell">
            <header className="section-heading section-heading--split">
              <p className="kicker">Capability index / 01—10</p>
              <h2 id="capabilities-title">What I build</h2>
              <p>
                The systems layer between a capable model and a dependable
                product.
              </p>
            </header>

            <ol className="capability-index">
              {capabilities.map((capability, index) => (
                <li key={capability}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{capability}</strong>
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div className="section-shell">
            <header className="process-section__intro">
              <p className="kicker">From idea to production</p>
              <h2 id="process-title">
                Beyond the
                <br />
                prototype.
              </h2>
              <p>
                I like taking AI systems beyond prompts and prototypes —
                designing the workflow, grounding the model, evaluating
                behavior, integrating tools, and shipping the result.
              </p>
            </header>

            <ol className="process-line">
              {process.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about section-light" id="about" aria-labelledby="about-title">
          <div className="section-shell about__grid">
            <div>
              <p className="kicker">About / Sourav Mane</p>
              <h2 id="about-title">
                Engineering intelligence into useful products.
              </h2>
            </div>

            <div className="about__copy">
              <p>
                I&apos;m an AI Engineer focused on building intelligent systems
                that can reason, use tools, interact with external systems, and
                automate meaningful work.
              </p>
              <p>
                My work sits at the intersection of AI agents, LLM
                orchestration, RAG, automation, and full-stack product
                engineering.
              </p>
              <p>
                I&apos;ve independently designed and shipped three production AI
                applications spanning software engineering, startup
                intelligence, and agricultural assistance.
              </p>
              <a
                className="text-link"
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="stack-section section-light" aria-labelledby="stack-title">
          <div className="section-shell">
            <header className="section-heading section-heading--split">
              <p className="kicker">Technical stack / Selected tools</p>
              <h2 id="stack-title">Built across<br />the system.</h2>
              <p>
                A practical toolkit for orchestrating, evaluating, and shipping
                production AI.
              </p>
            </header>

            <div className="stack-groups">
              {stack.map((group, index) => (
                <div className="stack-group" key={group.category}>
                  <p>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {group.category}
                  </p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" id="contact" aria-labelledby="closing-title">
          <div className="closing__topline">
            <p>AI Engineer / India</p>
          </div>

          <div className="closing__name">
            <h2 id="closing-title">
              <span>Sourav</span>
              <span>Mane<span className="hero__period">.</span></span>
            </h2>
            <p>AI Engineer</p>
          </div>

          <p className="closing__statement">{siteConfig.statement}</p>
          <p className="closing__availability">Open to meaningful work</p>

          <nav className="closing__links" aria-label="Contact and profile links">
            <a href={emailHref}>
              Email <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </nav>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.role}</span>
        </div>
        <p>© 2026 {siteConfig.name}</p>
        <div className="site-footer__links">
          <a href={emailHref}>Email</a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
