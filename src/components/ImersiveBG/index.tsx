import Image from "next/image";

export function ImersiveBG() {
  return (
    <aside
      className="
        group
        relative
        shrink-0

        w-[65%]
        max-w-[280px]

        sm:max-w-[340px]

        aspect-square

        lg:w-[320px]
        lg:max-w-none
      "
    >
      <div
        className="
          absolute
          inset-0
          rounded-full
          overflow-hidden
          opacity-50
          animate-spin-slow
          [animation-play-state:paused]
          group-hover:[animation-play-state:running]
        "
        style={{
          maskImage: "radial-gradient(circle, black 35%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 70%)",
        }}
      >
        <Image
          src="/assets/numberbg.png"
          width={900}
          height={900}
          alt=""
          className="absolute w-full h-full object-cover pointer-events-none select-none"
          loading="eager"
        />
      </div>

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          rounded-full
          overflow-hidden
        "
        style={{
          maskImage: "radial-gradient(circle, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 100%)",
        }}
      >
        <Image
          src="/assets/eula.jpg"
          width={700}
          height={700}
          alt="José Pedro Bernardes"
          className="
            border-[var(--accent)]/10
            border-[4px]
            w-[70%]
            h-[70%]
            rounded-full
            object-cover
            pointer-events-none
            select-none
          "
        />
      </div>

      <span className="absolute bottom-[18%] right-[30%] flex h-6 w-6 z-20">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-6 w-6 rounded-full bg-green-500 border-2 border-black" />
      </span>
    </aside>
  );
}