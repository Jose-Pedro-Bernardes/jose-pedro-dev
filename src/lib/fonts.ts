import { Montserrat, DM_Sans, Black_Ops_One, Geist, Geist_Mono } from "next/font/google";


export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"], // Regular
  variable: "--font-dm-sans",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"], // SemiBold e Bold
  variable: "--font-montserrat",
});

export const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-black-ops-one",
});