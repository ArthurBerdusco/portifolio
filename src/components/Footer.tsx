import type { Profile } from "@/lib/types";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-boxwood-700 bg-boxwood text-sm text-paper/60">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 py-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
