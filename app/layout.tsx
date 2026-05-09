import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Zach Dunkley | Rotorua Real Estate',
  description: 'Professional real estate services in Rotorua',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="bg-harcourts-darkBlue text-white py-8 text-center">
          <p>© {new Date().getFullYear()} Zach Dunkley | Harcourts Rotorua</p>
        </footer>
      </body>
    </html>
  );
}
