import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next"

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
        className={`${font.className}  flex flex-col items-center  antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Analytics/>
            {children}
          </ThemeProvider>
        <Toaster/>
      </body>
    </html>
  );
}
