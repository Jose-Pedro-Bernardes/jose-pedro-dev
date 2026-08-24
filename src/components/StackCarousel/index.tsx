const technologies = [
  "GIT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "TAILWIND",
];


export function StackCarousel() {
  return (
   <section
      aria-label="Tecnologias"
      className="
        w-full
        h-[120px]
        border-[var(--accent1)]/20
        border-t-[1px]
        border-b-[1px]
        opacity-40
        overflow-hidden
        flex
        items-center
      "
    >
      <div className="flex w-max animate-marquee">
        {[...technologies, ...technologies].map((technology, index) => (
          <div
            key={`${technology}-${index}`}
            className="
              flex
              items-center
              gap-8
              px-4
              shrink-0
            "
          >
            <span
              className="
                font-dm-sans
                text-[3rem]
                font-semibold
                tracking-wider
                text-white
                opacity-90
                whitespace-nowrap

                sm:text-[4rem]
              "
            >
              {technology}
            </span>

            <span
              aria-hidden="true"
              className="text-[var(--accent1)] text-[5rem] "
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}