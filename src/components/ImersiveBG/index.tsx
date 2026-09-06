import Image from "next/image";

export function ImersiveBG() {
  return (
    <aside
      className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[70%]
        min-[300px]:max-[720px]:w-[100%]
        aspect-square

        -z-10

        max-[450px]:top-[30%]
        max-[450px]:translate-y--1/2

        lg:left-auto
        lg:right-0
        lg:translate-x-0
        lg:w-[40%]
        lg:mr-[40px]
      "
    >
      <div
        className="
          absolute
          inset-0
          rounded-full
          overflow-hidden
          animate-spin-slow
          opacity-50
        "
        style={{
          maskImage:
            "radial-gradient(circle, black 35%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 35%, transparent 70%)",
        }}
      >
        <Image
          src="/assets/bgImersive.png"
          width={900}
          height={900}
          alt=""
          className="
            absolute
            w-full
            h-full
            object-cover
            pointer-events-none
            select-none
          "
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
          maskImage:
            "radial-gradient(circle, black 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 50%, transparent 100%)",
        }}
      >
        <Image
          src="/assets/eula.png"
          width={700}
          height={700}
          alt="José Pedro Bernardes"
          className="
            opacity-90
            border-[var(--accent1)]/20
            border-[4px]
            w-[65%]
            h-[65%]
            rounded-full
            object-cover
            pointer-events-none
            select-none
          "
        />
      </div>
    </aside>
  );
}

