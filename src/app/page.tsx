import Head from 'next/head';

import Header from './components/layout/Header';

import  Hero  from '@/app/components/sections/Hero';
import  About  from '@/app/components/sections/About';
import  Projects  from '@/app/components/sections/Projects';
import  Technologies  from '@/app/components/sections/Technologies';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
      </main>

    </>
  );
}