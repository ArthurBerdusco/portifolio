import { getContent, SITE_URL } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const content = await getContent();
  const { profile } = content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: `${SITE_URL}${profile.photo.startsWith("/") ? profile.photo : ""}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    sameAs: [profile.social.github, profile.social.linkedin],
    knowsAbout: content.skills.flatMap((g) => g.items),
  };

  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero content={content} />
        <About profile={profile} />
        <Projects projects={content.projects} />
        <Skills skills={content.skills} />
        <Experience experience={content.experience} />
        <Education education={content.education} certifications={content.certifications} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
