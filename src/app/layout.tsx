import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import AllStates from "@/contextProvds/AllStates";
import InputLettersToType from "@/components/InputLettersToType";
import NotForMobile from "@/components/NotForMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typing Tutor",
  description: "Help users to learn typing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={"dark:bg-bg-primary h-screen" + inter.className}>
        <div className="hidden md:block">
          <AllStates>
            {/* header */}
            <Header />

            {/* main */}
            <main className="h-full max-w-7xl mx-auto flex items-start justify-center gap-primary">
              {/* section */}
              <section className="flex-1 h-full p-8">
                {children}
                <InputLettersToType />
              </section>

              {/* aside */}
              <aside className="w-[416px] h-full p-8">
                <Aside />
              </aside>
            </main>
          </AllStates>
        </div>
        {/* Not For Mobile */}
        <div className="md:hidden">
          <NotForMobile />
        </div>
      </body>
    </html>
  );
}
