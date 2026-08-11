import { Montserrat, DM_Sans } from "next/font/google";

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