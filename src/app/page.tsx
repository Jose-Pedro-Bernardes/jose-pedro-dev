import { StackCarousel } from "@/components/home/StackCarousel";
import { Header } from "@/components/shared/Header";
import { HeroContent } from "@/components/home/HeroContent";
import { AboutMe } from "@/components/home/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-[image:var(--bg-primary)]">

      <Header />

      <section
        className="
          relative
          z-0
          overflow-hidden
          min-h-[650px]
          sm:min-h-[700px]
          lg:min-h-[600px]
        "
      >
        <div className="relative mx-auto w-full max-w-[1400px]">

          <HeroContent />

        </div>
      </section>

      <StackCarousel />

      <AboutMe />

    </main>
  );
}