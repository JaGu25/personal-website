import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/assets/css/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-Sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dixon Albites Website",
  description:
    "This is my personal website, with my experience and knowledge through the years.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
