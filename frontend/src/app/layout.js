import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "../app/common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetch(
    `http://localhost:1337/api/company-information/?populate=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();
  return jsonData.data || [];
}

export default async function RootLayout({ children }) {
  const company_info = await getData();

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 flex flex-col h-screen justify-between`}
      >
        <Navbar>{company_info}</Navbar>
        <main className="mb-auto h-max text-slate-800 container  mx-auto bg-white">
          {children}
        </main>
        <Footer>{company_info}</Footer>
      </body>
    </html>
  );
}
