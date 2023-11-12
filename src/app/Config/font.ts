import { Coiny as fontMono, Poppins as fontSans } from "next/font/google";

export const coiny = fontMono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const poppins = fontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});
