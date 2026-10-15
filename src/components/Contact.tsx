import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiDownload, FiPhone } from "react-icons/fi";
import type { Profile } from "@/lib/types";

export default function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contato" className="section bg-boxwood text-paper">
      <div className="container-page">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/80">{profile.contactIntro}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all font-display text-2xl font-semibold text-brass underline decoration-brass/40 underline-offset-8 hover:decoration-brass sm:text-4xl"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-3">
          <li>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <FaLinkedinIn aria-hidden /> LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <FaGithub aria-hidden /> GitHub
            </a>
          </li>
          {profile.whatsapp && (
            <li>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <FaWhatsapp aria-hidden /> WhatsApp
              </a>
            </li>
          )}
          {profile.phone && (
            <li>
              <a href={`tel:+${profile.whatsapp || profile.phone.replace(/\D/g, "")}`} className="btn btn-ghost-light">
                <FiPhone aria-hidden /> {profile.phone}
              </a>
            </li>
          )}
          <li>
            <a href={profile.resumeUrl} download className="btn btn-brass">
              <FiDownload aria-hidden /> Baixar currículo
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
