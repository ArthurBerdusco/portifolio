import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { SiteContent } from "@/lib/types";
import { techIcon } from "@/lib/icons";
import SmartImage from "./SmartImage";

const STACK_STRIP = ["Java", "Spring Boot", "Spring Security", "React Native", "MySQL", "Docker", "AWS"];

export default function Hero({ content }: { content: SiteContent }) {
  const { profile, skills } = content;
  const all = new Set(skills.flatMap((g) => g.items));
  const strip = STACK_STRIP.filter((s) => all.has(s));

  return (
    <section className="bg-boxwood text-paper">
      <div className="container-page grid items-center gap-12 pb-14 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pb-20">
        <div>
          {profile.availability && (
            <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-boxwood-600 bg-boxwood-800 px-4 py-1.5 text-sm text-paper/90">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#5fd08f] opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5fd08f]" />
              </span>
              {profile.availability}
            </p>
          )}
          <h1 className="max-w-[22ch] text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="btn btn-brass">
              Ver projetos
            </a>
            <a href={profile.resumeUrl} download className="btn btn-ghost-light">
              <FiDownload aria-hidden /> Baixar currículo
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper/75">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brass">
              <FaGithub aria-hidden /> GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brass">
              <FaLinkedinIn aria-hidden /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-brass">
              <FiMail aria-hidden /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <FiMapPin aria-hidden /> {profile.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-none">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[11rem] rounded-b-3xl border border-brass/70" />
          <div className="portrait-reveal relative aspect-[4/5] overflow-hidden rounded-t-[11rem] rounded-b-3xl bg-boxwood-700">
            <SmartImage src={profile.photo} alt={`Retrato de ${profile.name}`} fill priority sizes="(min-width:1024px) 380px, 90vw" className="object-cover object-top" />
          </div>
        </div>
      </div>

      {strip.length > 0 && (
        <div className="border-t border-boxwood-700">
          <ul className="container-page flex flex-wrap items-center gap-x-8 gap-y-3 py-5 text-sm text-paper/70">
            <li className="text-paper/50">Stack principal</li>
            {strip.map((s) => {
              const Icon = techIcon(s);
              return (
                <li key={s} className="inline-flex items-center gap-2">
                  <Icon aria-hidden className="text-base text-brass" /> {s}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
