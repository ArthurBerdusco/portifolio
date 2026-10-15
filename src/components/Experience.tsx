import type { Experience as Exp } from "@/lib/types";
import SmartImage from "./SmartImage";

export function Logo({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white">
      {src ? (
        <SmartImage src={src} alt={`Logo ${name}`} fill sizes="56px" className="object-contain p-2" />
      ) : (
        <span className="font-display text-lg font-bold text-leaf">{name.slice(0, 1)}</span>
      )}
    </div>
  );
}

export default function Experience({ experience }: { experience: Exp[] }) {
  return (
    <section id="experiencia" className="section bg-paper-2">
      <div className="container-page">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiência profissional</h2>
        <ol className="mt-10 space-y-10">
          {experience.map((e) => (
            <li key={e.id} className="grid gap-5 md:grid-cols-[14rem_1fr] md:gap-10">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <Logo src={e.logo} name={e.company} />
                <p className="text-sm font-medium text-ink-soft">{e.period}</p>
              </div>
              <div className="border-line md:border-l md:pl-10">
                <h3 className="text-xl font-bold">{e.role}</h3>
                <p className="font-medium text-leaf">{e.company}</p>
                <ul className="mt-4 max-w-[68ch] list-disc space-y-2.5 pl-5 leading-relaxed text-ink/85 marker:text-brass-dark">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
