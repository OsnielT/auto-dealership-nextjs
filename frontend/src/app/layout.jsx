// src/app/layout.js
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import Footer from './common/components/Footer/Footer';
import Navbar from './common/components/Navbar/Navbar';
import SidePanel from './common/components/SidePanel/SidePanel';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <Navbar />
          <SidePanel />
          <main className=" text-slate-800 mx-auto bg-white">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
