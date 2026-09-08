import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeading
          label="Portfolio"
          title="Selected Projects"
          subtitle="Projects demonstrating my experience across web, mobile, backend and embedded-system development."
          align="center"
        />

        {/* Project grid — featured card spans 2 columns on large screens */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
