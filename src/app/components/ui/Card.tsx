import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 h-full">
      {/* Image Section */}
      <div className="relative h-64">
        {project.images?.[0]?.url ? (
          <Image
            src={project.images[0].url}
            alt={project.images[0].alt || project.title}
            layout="fill"
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
            <span>Sem Imagem</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4">
        {/* Title and Type */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-gray-500 text-sm mb-2">{project.subtitle}</p>
        )}

        {/* Description */}
        <p className="text-gray-700 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tech.name}
              {tech.version && ` v${tech.version}`}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          {/* Botão GitHub */}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          )}

          {/* Botão Ver Projeto */}
          <a
            href={`/projetos/${project.id}`}
            className="flex items-center text-gray-800 border border-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
