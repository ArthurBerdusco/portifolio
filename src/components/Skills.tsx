import type { SkillGroup } from "@/lib/types";
import { techIcon } from "@/lib/icons";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="habilidades" className="section">
      <div className="container-page">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Habilidades</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">Tecnologias que usei nos projetos e no trabalho, agrupadas por área.</p>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {skills.map((g) => (
            <div key={g.id} className="grid gap-4 py-6 md:grid-cols-[14rem_1fr]">
              <h3 className="text-lg font-semibold">{g.category}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((item) => {
                  const Icon = techIcon(item);
                  return (
                    <li key={item} className="chip">
                      <Icon aria-hidden className="text-leaf" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
