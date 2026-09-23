import { HeroContent } from "@/components/how-i-work/HeroContent";
import {Header} from "@/components/shared/Header";

export default function HowIWork() {

  return (
    <div 
      className="
        bg-[image:var(--bg-primary)] 
        h-screen
      "
    >
        <Header></Header>
        <HeroContent />
    </div>
  );
}