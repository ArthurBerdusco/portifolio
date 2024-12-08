'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

import { FaGithub } from 'react-icons/fa';

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';

import getProject, { projects } from '@/app/components/data/projects';
import { Project, ProjectImage } from '@/app/components/types';

import imagem1 from '../../../../public/projeto1.webp';
import imagem2 from '../../../../public/projeto2.webp';
import imagem3 from '../../../../public/projeto3.avif';
import { useParams } from 'next/navigation';
import Header from '@/app/components/layout/Header';

// Types
interface Technology {
  name: string;
  version: string;
}

interface Feature {
  title: string;
  description: string;
}




// Reusable Components
const TechnologiesBadges: React.FC<{ technologies: Technology[] }> = ({ technologies }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {technologies.map((tech, index) => (
      <Badge key={index} variant="secondary">
        {tech.name} {tech.version}
      </Badge>
    ))}
  </div>
);

const ImageCarousel: React.FC<{
  images: ProjectImage[] | null,
  onImageClick: () => void
}> = ({ images, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images?.length || 1));
  };


  const prevImage = () => {
    if (!images || images.length === 0) {
      return; // Evita operações se `images` for `null` ou vazio
    }
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  return (
    <div className="relative w-full aspect-video">
      <Image
        src={images?.[currentImageIndex]?.url || ""}
        alt={images?.[currentImageIndex]?.alt || "Imagem"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain rounded-lg cursor-pointer"
        onClick={onImageClick}
      />


      <div className="absolute inset-0 flex justify-between items-center p-2">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/50 hover:bg-white/75"
          onClick={prevImage}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/50 hover:bg-white/75"
          onClick={nextImage}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-center mt-2 text-sm">
        {images?.[currentImageIndex].caption}
      </p>
    </div>
  );
};

const ProjectDetailsCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Detalhes do Projeto</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Duração:</strong> {project.duration.start} - {project.duration.end}</p>
      <p><strong>Equipe:</strong> {project.team.size} pessoas</p>
      <p><strong>Função:</strong> {project.role}</p>
    </CardContent>
  </Card>
);

const FeatureCards: React.FC<{ features: Feature[] }> = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {features.map((feature, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{feature.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function ProjectDetailsPage() {

  const { id } = useParams();

  const projectId = id && !Array.isArray(id) ? id : ''; // Valor padrão vazio

  if (!projectId) {
    return <p>ID do projeto não encontrado.</p>;
  }

  const project: Project = getProject(projectId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="container mt-12 mx-auto px-4 py-8 max-w-screen-xl">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            {project.subtitle}
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <p className="text-base md:text-lg">{project.longDescription}</p>

            <TechnologiesBadges technologies={project.technologies} />

            <Link href={project.links.github ?? 'https://www.github.com/arthurberdusco'} target="_blank" >
              <Button>
                <FaGithub /> GitHub
              </Button>
            </Link>
          </div>

          <ProjectDetailsCard project={project} />
        </div>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Funcionalidades</h3>
          <FeatureCards features={project.features} />
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Imagens do Projeto</h3>
          <ImageCarousel
            images={project.images || null}
            onImageClick={() => setIsModalOpen(true)}
          />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Desafios</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Soluções</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-white"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Image
                src={project.images[0].url}
                alt={project.images[0].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}