// src/components/sections/Technologies.tsx
import { getTechnologiesByCategory, categoryTranslations } from '@/components/data/technologies'

export default function Technologies() {
  const technologiesByCategory = getTechnologiesByCategory();

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Tecnologias</h2>
        
        {Object.entries(technologiesByCategory).map(([category, technologies]) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="text-xl font-semibold mb-6">
              {categoryTranslations[category as keyof typeof categoryTranslations]}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <tech.icon className="w-8 h-8 text-gray-600" />
                  <div>
                    <span className="font-medium block">{tech.name}</span>
                    <span className="text-sm text-gray-500">
                      {tech.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}