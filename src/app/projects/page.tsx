import { Header } from "@/components/Header";

export default function Projects() {
  return (
    <div
      className="
        bg-[image:var(--bg-primary)]
        h-screen
      "
    >
      <Header />

      <div
        className="
          w-full
          h-full
          flex
          flex-col
          items-center
          justify-center
          gap-8
        "
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>This page is currently under construction.</p>
      </div>
    </div>
  );
}