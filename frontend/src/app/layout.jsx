// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './common/components/Navbar/Navbar';
import Footer from './common/components/Footer/Footer';
import SidePanel from './common/components/SidePanel/SidePanel';
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 flex flex-col min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <SidePanel />
          <main className="flex-grow text-slate-800 container mx-auto bg-white">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
