import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { dmSans, montserrat, blackOpsOne, geistMono, geistSans } from "@/lib/fonts";

  

export const metadata: Metadata = {
  title: "Portfolio -- Dev Bernardes",
  description:
    "Full stack developer portfolio showcasing React, Next.js and TypeScript projects. " +
    "Building fast, well-crafted web interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
       ${geistSans.variable}
       ${geistMono.variable}
       ${dmSans.variable}
       ${montserrat.variable}
       ${blackOpsOne.variable} 
       h-full antialiased`
      }
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
