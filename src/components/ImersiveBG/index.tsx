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

        opacity-20
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
          relative
          w-full
          h-full
          max-w-full
          max-h-full
          rounded-full
          overflow-hidden
          animate-spin-slow
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
    </aside>
  );
}