import Image from "next/image";

export function ImersiveBG() {
  return (  
    <div 
        className=" absolute top-1/2 right-0 -translate-y-1/2 -z-10 w-[45%] 
        aspect-square opacity-30">

        <div
            className="relative max-w-full max-h-full w-full h-full rounded-full overflow-hidden animate-spin-slow"
            style={{
                maskImage: "radial-gradient(circle, black 35%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 70%)",
            }}
        >
    
            <Image
                src="/assets/bgImersive.png"
                width={900}
                height={900}
                alt="side object"
                className="absolute w-full h-full object-cover pointer-events-none select-none"
                loading="eager"
            />
        </div>
    </div>
  );
}