import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow text-slate-800 container mx-auto bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
