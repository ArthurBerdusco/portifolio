import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-boxwood px-6 text-center text-paper">
      <div>
        <h1 className="text-4xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-paper/70">O endereço não existe ou o projeto foi removido.</p>
        <Link href="/" className="btn btn-brass mt-8">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
