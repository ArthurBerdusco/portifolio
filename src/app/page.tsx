import Head from 'next/head';

import Header from '../components/layout/Header';

import  Hero  from '@/components/sections/Hero';
import  About  from '@/components/sections/About';
import  Projects  from '@/components/sections/Projects';
import  Technologies  from '@/components/sections/Technologies';


export default function Home() {
  return (
    <>
      <Head>
        <title>Arthur Silva - Desenvolvedor de Software</title>
        <meta 
          name="description" 
          content="Portfólio de Arthur Silva - Desenvolvedor de Software formado pelo SENAC" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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