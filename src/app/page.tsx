import Image from "next/image";
import { Header } from "@/components/Header";

export default function Home() {

  return (
    <main className="bg-black">
      <Header />
      <Image src="/next.svg" alt="Next.js logo" width={100} height={20} />
      <h1>Starting project</h1>
      <p>This is the home page content.</p>
    </main>
  );
}
