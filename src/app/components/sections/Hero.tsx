import Image from 'next/image';
import Link from 'next/link';
import arthur from '../../../../public/WhatsApp Image 2024-11-16 at 23.26.29.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 via-white to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="animate-fadeIn">
              <span className="text-blue-600 font-medium text-lg">
                Olá, eu sou o
              </span>
              <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Arthur Silva
              </h1>
              <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                Desenvolvedor de Software
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transformando ideias em soluções digitais com código limpo e eficiente. 
              Especializado em desenvolvimento fullstack com foco em tecnologias modernas.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Link 
                href="https://github.com/arthurberdusco" 
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub size={24} />
              </Link>
              <Link 
                href="https://linkedin.com/in/arthur-silva-26008318b/" 
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link 
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaEnvelope size={24} />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                Ver Projetos
              </Link>
              <Link
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl font-medium border border-blue-600"
              >
                Contato
              </Link>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Java'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6 opacity-10"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform -rotate-6 opacity-10"></div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-2xl">
              <Image
                src={arthur}
                alt="Arthur Silva"
                
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}