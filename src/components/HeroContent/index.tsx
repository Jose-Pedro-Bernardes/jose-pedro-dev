import { Handshake, MessageCircleMore } from "lucide-react";

export function HeroContent() {
  return (
    <div
      className="
        relative
        z-10
        flex flex-col
        gap-[20px]
        font-geist-sans
        mt-28
        px-5

        items-center
        text-center
        
        sm:mt-30
        lg:ml-20
        lg:px-0
        lg:items-start
        lg:text-left
      "
    >
      <h1
        className="
          text-[2.2rem]
          font-semibold
          text-[var(--text-primary)]

          sm:text-[2.8rem]
          lg:text-[3.2rem]
        "
      >
        {"{"}<span className="text-[var(--accent1)]">CODE</span>{"}"} you can see.
        <span className="relative text-[var(--accent1)]">
          .
          <span
            className="
              absolute
              left-[-20%]
              -bottom-3
              text-3xl
              font-light
              select-none
              text-[var(--text-primary)]
            "
            style={{ transform: "rotate(90deg)" }}
            aria-hidden="true"
          >
            )
          </span>
        </span>

        <br />

        SOLUTIONS & EXPERIENCES
        <span className="text-[var(--accent1)]">.</span>
      </h1>

      <h2
        className="
          font-dm-sans
          text-[1.05rem]
          font-bold

          sm:text-[1.4rem]
          lg:text-[1.6rem]
        "
      >
        <span className="text-[var(--text-primary)]">
          José Pedro Bernardes
        </span>

        <span className="text-[var(--accent-soft)]">
          {" "}· Full Stack Developer
        </span>
      </h2>

      <p
        className="
          max-w-[400px]
          text-[0.9rem]
          text-[var(--text-primary)]

          sm:text-[1.05rem]
          lg:text-[1.2rem]
        "
      >
        <span className="text-[var(--accent-soft)]">
          Coffee-powered
        </span>
        , mostly.{" "}

        <span className="text-[var(--accent-soft)]">
          Bugs don&apos;t stand a chance
        </span>{" "}

        after the second cup.
      </p>

      <div
        className="
          w-full
          max-w-[400px]
          sm:w-[400px]
          flex
          flex-col
          items-center
          gap-4
          mt-3
          sm:mt-10
          sm:flex-row
          sm:gap-7
        "
      >
        <button
          className="
            group
            flex
            items-center
            justify-center
            gap-4

            w-full

            sm:w-[190px]

            h-[60px]

            rounded-[15px]
            bg-yellow-400
            border-yellow-400

            font-bold
            text-black

            transition-all
            duration-300

            hover:bg-yellow-300
            hover:scale-105
            hover:shadow-lg
            hover:shadow-[#E3AD28]/30

            cursor-pointer
          "
        >
          <span>View Projects</span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:scale-160
            "
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="
          group
          flex
          items-center
          justify-center
          
          w-full
          sm:w-[190px]
          h-[60px]
          gap-3

          rounded-[15px]
          border
          border-[1.5px]
          border-[var(--text-primary)]/80

          bg-transparent

          font-bold
          text-[var(--text-primary)]/80

          transition-all
          duration-300

          hover:bg-white/90
          hover:text-black
          hover:border-white
          hover:scale-105
          hover:shadow-lg
          hover:shadow-white/20

          cursor-pointer
          "
        >
          Contact Me

          <MessageCircleMore
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:scale-160
            "
          />
        </button>
      </div>
    </div>
  );
}