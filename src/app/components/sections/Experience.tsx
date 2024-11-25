import React from 'react';
import Image from 'next/image';

interface ExperienceItem {
  company: string;
  companyLogo: string;
  role: string;
  duration: string;
  description: string[];
  keyServices: string[];
}

import dbdLogo from '../../../../public/experiencia/dbd.png'
import jciLogo from '../../../../public/experiencia/jci.svg'

const experiences: ExperienceItem[] = [
  {
    company: "Johnson Controls",
    companyLogo: jciLogo.src, // Adicione o logo da Johnson Controls
    role: "Técnico de Sistemas II",
    duration: "2019 - Presente",
    description: [
      "Implementação e gestão de sistemas de automação predial, garantindo eficiência energética e conforto aos usuários.",
      "Análise avançada de falhas e execução de manutenção preventiva/corretiva em sistemas críticos.",
      "Desenvolvimento e documentação de soluções técnicas personalizadas para necessidades específicas dos clientes.",
      "Configuração e programação de controladores Metasys para otimização de performance dos sistemas.",
    ],
    keyServices: [
      "Automação Predial",
      "HVAC Systems",
      "Building Management"
    ]
  },
  {
    company: "Diebold Nixdorf",
    companyLogo: dbdLogo.src, // Adicione o logo da Diebold
    role: "Estagiário em Controle de Qualidade",
    duration: "2018 - 2019",
    description: [
      "Realização de inspeção minuciosa em equipamentos de autoatendimento bancário, garantindo altos padrões de qualidade.",
      "Execução de testes funcionais em ATMs e desenvolvimento de relatórios detalhados de qualidade.",
      "Suporte na implementação de processos de melhoria contínua no controle de qualidade."
    ],
    keyServices: [
      "Inspeção de ATMs",
      "Controle de Qualidade",
      "Testes Funcionais"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experiência Profissional
        </h2>

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[280px,1fr]">
                {/* Company Info Section */}
                <div className="bg-blue-50 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-white rounded-xl shadow-sm">
                      <Image
                        src={item.companyLogo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.company}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{item.duration}</p>
                  
                  {/* Key Services Pills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {item.keyServices.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Details Section */}
                <div className="p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    {item.role}
                  </h4>
                  <ul className="space-y-3">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full mr-3" />
                        <span className="text-gray-700">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}