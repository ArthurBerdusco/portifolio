// Projects.tsx
'use client';
import { ProjectCard } from '@/app/components/ui/Card';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Projetos</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Conheça alguns dos principais projetos que desenvolvi durante minha jornada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
