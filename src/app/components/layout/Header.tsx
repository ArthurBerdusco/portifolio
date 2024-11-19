import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">Arthur Silva</Link>
          <nav className="space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">Sobre</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projetos</Link>
            <Link href="#technologies" className="text-gray-600 hover:text-gray-900">Tecnologias</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}