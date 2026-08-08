import Image from "next/image";
import { Header } from "@/components/Header";

export default function Home() {

  return (
    <main className="h-200" style={{ backgroundImage: "url('/topbg.png')", backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
      <Header />
      <Image src="/next.svg" alt="Next.js logo" width={100} height={20} />
      <section>
      <p>Hello, I'm</p>
      <h1>José Pedro.</h1>
      <h2>Full Stack Developer</h2>
      <p>I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
      </section>
    </main>
  );
}
