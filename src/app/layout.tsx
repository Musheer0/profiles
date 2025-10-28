import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";


const font = Host_Grotesk({
  subsets: ["latin",'latin-ext'],
});



export const metadata: Metadata = {
  title: "Profiles",
  description: "Your profile, your aesthetic. Create and customize your digital identity effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} overflow-x-hidden flex flex-col items-center  antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        <Toaster/>
      </body>
    </html>
  );
}
