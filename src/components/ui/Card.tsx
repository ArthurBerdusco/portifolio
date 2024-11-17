import Image from 'next/image';
import { Project } from '@/components/types/index'; // Ajuste o caminho conforme a estrutura do projeto


export interface ProjectCardProps {
  project: Project;
  onOpen?: (project: Project) => void; // Função opcional
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        {project.images && project.images.length > 0 ? (
          <Image
            src={project.images[0].url}
            alt={project.images[0].alt || project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
            Sem Imagem
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
            {project.status}
          </span>
        </div>
        
        {project.subtitle && (
          <p className="text-gray-600 text-sm mb-2">{project.subtitle}</p>
        )}
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech.name}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {tech.name}
              {tech.version && <span className="text-gray-500 text-xs ml-1">v{tech.version}</span>}
            </span>
          ))}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Ver Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                GitHub
              </a>
            </div>
            <button
              onClick={() => onOpen?.(project)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
