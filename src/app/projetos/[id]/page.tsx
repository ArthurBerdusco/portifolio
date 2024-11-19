'use client';

import { useParams } from 'next/navigation';
import { projects } from '../../components/data/projects';

export default function Page() {
  // Extrair o ID da rota usando o hook `useParams`
  const { id } = useParams();

  // Encontrar o projeto correspondente
  const projeto = projects.find((x) => x.id === Number(id));

  // Renderizar a página
  return (
    <div className="md:container md:mx-auto h-lvh bg-stone-600">
      <h1>Projeto: {projeto?.title || 'Não encontrado'}</h1>
      <p>{projeto?.description || 'Nenhuma descrição disponível.'}</p>
    </div>
  );
}
