import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <main
        className="h-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('/topbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />

        <section className="font-dm-sans flex flex-col gap-[13px] mt-20 ml-20">
          <p className="text-[1.75rem] text-white/70">Hello, I&apos;m</p>

          <h1 className="text-[4.3rem] font-semibold text-white/95">
            José Pedro<span className="text-[#ffea00]">.</span>
          </h1>

          <h2 className="text-[1.75rem] text-yellow-300 font-medium">
            Full Stack Developer
          </h2>

          <p className="max-w-[350px] text-[1.1rem] text-white/85">
            <span className="text-[#D6B56A]">Coffee-powered</span>, mostly.{" "}
            <span className="text-[#D6B56A]">Bugs don&apos;t stand a chance</span>{" "}
            after the second cup.
          </p>

          <div className="flex gap-7 mt-10">
            <button
              className="
                group flex items-center gap-4
                px-6 py-3
                rounded-full
                bg-yellow-400
                font-medium font-bold text-black
                transition-all duration-300
                hover:bg-yellow-300 hover:scale-105
                hover:shadow-lg hover:shadow-[#E3AD28]/30
                cursor-pointer
              "
            >
              <span className="font-medium">View Projects</span>

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
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
                px-5 py-3
                rounded-3xl border border-[1.5px] border-white/80
                bg-transparent
                font-medium font-bold text-white/80
                transition-all duration-300
                hover:bg-white/90 hover:text-black hover:border-white
                hover:scale-105 hover:shadow-lg hover:shadow-white/20
                cursor-pointer
              "
            >
              Contact Me
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}