import { FiDownload } from "react-icons/fi";
import type { Profile } from "@/lib/types";

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="sobre" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre mim</h2>
          <div className="mt-6 max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink/85">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <dl className="divide-y divide-line border-y border-line">
            {profile.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
                <dt className="text-sm text-ink-soft">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
          <a href={profile.resumeUrl} download className="btn btn-outline mt-6">
            <FiDownload aria-hidden /> Currículo completo (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
