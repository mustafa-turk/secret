import { JetBrains_Mono, Inter } from "next/font/google";

export const defaultFont = Inter({
  subsets: ["latin"],
});

export const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});