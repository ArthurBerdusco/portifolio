import Image from 'next/image';
import { Project } from '@/app/components/types/index';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 md:h-60">
        {project.images && project.images.length > 0 ? (
          <Image
            src={project.images[0].url}
            alt={project.images[0].alt || project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg font-medium">Sem Imagem</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            {project.title}
          </h3>

          <span className="px-3 py-1 text-xs whitespace-nowrap rounded-full bg-blue-100 text-blue-800">
            {project.type}
          </span>

          <span className="px-3 py-1 text-xs whitespace-nowrap rounded-full bg-blue-100 text-blue-800">
            {project.status}
          </span>
        </div>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-gray-600 text-sm mb-3">{project.subtitle}</p>
        )}

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-2.5 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
            >
              {tech.name}
              {tech.version && (
                <span className="text-gray-500 ml-1">v{tech.version}</span>
              )}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <Link
            href={project.links.github ?? 'https://www.github.com/arthurberdusco'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="flex items-center gap-2">
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </Button>
          </Link>
        

          <Link
            href={`/projetos/${project.id}`}
            className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
          >


            <Button variant="outline" size="sm" className="flex items-center gap-2">
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
              <span className="mr-2">Ver Projeto</span>
            </Button>
            
            
          </Link>
        </div>
      </div>
    </div>
  );
}