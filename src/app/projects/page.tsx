import { HeroContent } from "@/components/projects/HeroContent";
import { Header } from "@/components/shared/Header";

export default function Projects() {
  return (
    <div
      className="
        bg-[image:var(--bg-primary)]
        h-screen
      "
    >
      <Header />

      <HeroContent />
    </div>
  );
}