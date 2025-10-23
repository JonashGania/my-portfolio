import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonash Gaña",
  description:
    "Full Stack Developer based in Pampanga, Philippines. Specializes in building web applications using modern technologies. Skilled in React, Node, TypeScript, and other web development tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body
        className={`antialiased bg-white dark:bg-zinc-950 duration-100 transition-[background-color] ease-in-out`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
