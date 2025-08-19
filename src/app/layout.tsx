import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const font = Host_Grotesk({
  subsets: ["latin",'latin-ext'],
});



export const metadata: Metadata = {
  title: "Profiles",
  description: "Beautiful profile cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
