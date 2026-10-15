import type { Project } from "@/lib/types";
import SmartImage from "./SmartImage";

/** Mockup do projeto: três telas de celular para apps; janela de navegador para o resto. */
export default function ProjectMedia({ project }: { project: Project }) {
  const imgs = project.images;
  if (imgs.length === 0) return <div className="aspect-[16/10] rounded-xl bg-paper-2" />;

  if (project.type === "mobile") {
    const trio = [imgs[1] ?? imgs[0], imgs[0], imgs[2] ?? imgs[0]];
    return (
      <div className="flex items-end justify-center gap-3 rounded-2xl bg-paper-2 px-4 pb-0 pt-8 sm:gap-5 sm:px-8">
        {trio.map((im, i) => (
          <div
            key={i}
            className={`relative aspect-[9/19] overflow-hidden rounded-t-[1.5rem] border-[5px] border-b-0 border-ink bg-white shadow-lg ${
              i === 1 ? "w-[38%] translate-y-0" : "w-[30%] translate-y-6"
            }`}
          >
            <SmartImage src={im.url} alt={im.alt} fill sizes="(min-width:1024px) 160px, 30vw" className="object-cover object-top" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-md">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper-2 px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div className="relative aspect-[16/10]">
        <SmartImage src={imgs[0].url} alt={imgs[0].alt} fill sizes="(min-width:1024px) 560px, 92vw" className="object-cover object-top" />
      </div>
    </div>
  );
}
