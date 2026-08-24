import { StackCarousel } from "@/components/StackCarousel";
import { Header } from "@/components/Header";
import { ImersiveBG } from "@/components/ImersiveBG";
import { HeroContent } from "@/components/HeroContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[image:var(--bg-primary)]">
      <section
        className="
          relative
          bg-[image:var(--bg-primary)]
          z-0
          overflow-hidden
          min-h-[650px]
        "
      >
        <div className="relative mx-auto w-full max-w-[1400px]">

          <Header />
          <ImersiveBG />
          <HeroContent />
          
        </div>
      </section>
      <StackCarousel />
    </main>
  );
}