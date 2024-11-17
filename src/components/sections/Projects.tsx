'use client'
// src/components/sections/Projects.tsx
import { useState } from 'react';
import { ProjectCard } from '@/components/ui/Card';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog';
import Image from 'next/image';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">Projetos</h2>
        <p className="text-gray-600 mb-12">
          Conheça alguns dos principais projetos que desenvolvi durante minha jornada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleOpenProject}
            />
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={handleCloseProject}>
          <DialogContent className="max-w-3xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  {/* Galeria de imagens */}
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.images ? (
                      selectedProject.images.map((image, index) => (
                        <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                          <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 text-center text-gray-500">
                        Nenhuma imagem disponível
                      </div>
                    )}
                  </div>

                  {/* Descrição detalhada */}
                  <div className="prose max-w-none">
                    <p className="text-gray-600">{selectedProject.longDescription}</p>
                  </div>

                  {/* Tecnologias */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tecnologias Utilizadas</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                        >
                          {tech.name} {tech.version && <span className="text-gray-500">v{tech.version}</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Funcionalidades Principais</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>
                          <span className="font-medium">{feature.title}:</span> {feature.description}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Destaques */}
                  {selectedProject.highlights && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Destaques</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="text-gray-600">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Desafios e Soluções */}
                  {selectedProject.challenges && (
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Desafios</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="text-gray-600">{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Soluções</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedProject.solutions?.map((solution, index) => (
                            <li key={index} className="text-gray-600">{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t">
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Ver Demo
                    </a>
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                    {selectedProject.links.deployed && (
                      <a
                        href={selectedProject.links.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                      >
                        Site Live
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}