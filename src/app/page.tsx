import Head from 'next/head';
import Header from './components/layout/Header';

import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Projects from '@/app/components/sections/Projects';
import Technologies from '@/app/components/sections/Technologies';
import Experience from '@/app/components/sections/Experience';
import Education from '@/app/components/sections/Education';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <div className="bg-white">
          <Hero />
        </div>
        
        <div className="bg-gray-200">
          <About />
        </div>
        
        <div className="bg-white">
          <Projects />
        </div>
        
        <div className="bg-gray-200">
          <Technologies />
        </div>
        
        <div className="bg-white">
          <Experience />
        </div>
        
        <div className="bg-gray-200">
          <Education />
        </div>
      </main>
    </>
  );
}
