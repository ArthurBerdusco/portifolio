'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import getProject from '@/app/components/data/projects';
import { Project } from '@/app/components/types';
import Header from '@/app/components/layout/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


export default function ProjectDetailsPage() {
  const { id } = useParams();

  const projectId = id && !Array.isArray(id) ? id : ''; 

  if (!projectId) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-700">
        <p className="text-xl font-medium">ID do projeto não encontrado.</p>
      </div>
    );
  }

  const project: Project = getProject(projectId);

  return (
    <>
      <Header />



      <div className="bg-gradient-to-br from-indigo-50 to-white min-h-screen">

        <main className="container mx-auto px-6 mt-12 py-6">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="align-middle	justify-items-center	 text-start border-b pb-6">
                <h1 className="text-4xl font-bold text-indigo-700">{project.title}</h1>
                <h2 className="text-lg text-gray-600 mt-2">{project.subtitle}</h2>
                <p className="text-gray-700 mt-4">{project.description}</p>
                <p className="text-gray-500 mt-2 w-1/2">{project.longDescription}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-indigo-600">Detalhes</h3>
                <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
                  <li>
                    <span className="font-medium">Tipo:</span> {project.type}
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> {project.status}
                  </li>
                  <li>
                    <span className="font-medium">Duração:</span>{' '}
                    {project.duration.start} - {project.duration.end}
                  </li>
                  <li>
                    <span className="font-medium">Cargo:</span> {project.role}
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-indigo-600">Tecnologias</h3>
                <ul className="mt-4 flex flex-wrap gap-4">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium shadow-sm"
                    >
                      {tech.name} {tech.version}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-indigo-600">Destaques</h3>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-indigo-600">Imagens</h3>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="mt-4"
                  spaceBetween={16}
                  slidesPerView={1}
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <figure className="rounded-lg overflow-hidden shadow-md">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="object-contain w-full h-[400px]"
                        />
                        <figcaption className="text-gray-600 text-sm p-6 my-4 text-center">
                          {image.caption}
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="mt-6 text-center">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-stone-600 text-white rounded-lg shadow-lg hover:bg-stone-500 transition"
                >
                  <FaGithub className="mr-2" />
                  Repositório no GitHub
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>

  );
}
