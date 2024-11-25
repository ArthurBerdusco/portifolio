import React from 'react';
import Image from 'next/image';

interface EducationItem {
  institution: string;
  institutionLogo: string;
  course: string;
  duration: string;
  description: string[];
  type: string;
}

import etec from '../../../../public/formacao/etec.jpg'
import senac from '../../../../public/formacao/senac.png'

const education: EducationItem[] = [
  {
    institution: "Centro Universitário SENAC",
    institutionLogo: senac.src,
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    type: "Ensino Superior",
    duration: "07/2022 - 12/2024",
    description: [
      "Desenvolvimento de aplicações web e mobile com tecnologias modernas.",
      "Criação de APIs RESTful utilizando padrões de mercado.",
      "Gerenciamento de bancos de dados relacionais e não relacionais.",
      "Práticas de DevOps e metodologias ágeis como Scrum e Kanban."
    ],
  },
  {
    institution: "ETEC Guaracy Silveira",
    institutionLogo: etec.src,
    course: "Técnico em Eletrônica",
    type: "Ensino Técnico",
    duration: "07/2017 - 07/2019",
    description: [
      "Projetos de circuitos analógicos e digitais.",
      "Manutenção e reparo de equipamentos eletrônicos.",
      "Desenvolvimento de sistemas embarcados com microcontroladores.",
      "Automação de processos industriais."
    ],
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
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] lg:grid-cols-[280px,1fr]">
                  {/* institution Info Section */}
                  <div className="bg-blue-50 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="relative w-32 h-32 mb-4">
                      <div className="absolute inset-0 bg-white rounded-xl shadow-sm">
                        <Image
                          src={item.institutionLogo}
                          alt={`${item.institution} logo`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.institution}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">{item.duration}</p>
                    
                  </div>
  
                  {/* Experience Details Section */}
                  <div className="p-6 lg:p-8">
                    <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {item.course}
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