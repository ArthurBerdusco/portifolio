import Image from 'next/image';
import Link from 'next/link';
import arthur from '../../../public/WhatsApp Image 2024-11-16 at 23.26.29.jpeg'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Desenvolvedor de Software
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transformando ideias em soluções digitais com código limpo e eficiente.
            </p>
            <Link 
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Ver Projetos
            </Link>
          </div>
          <div className="relative aspect-square">
            <Image
              src={arthur}
              alt="Arthur Silva"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}