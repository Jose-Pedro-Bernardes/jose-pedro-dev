import { StackCarousel } from "@/components/home/StackCarousel";
import { Header } from "@/components/shared/Header";
import { HeroContent } from "@/reference/HeroContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[image:var(--bg-primary)]">
      <Header />
      <HeroContent />
      <StackCarousel />
    </main>
  );
}
