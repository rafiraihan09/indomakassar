import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

// Primary font for headings and important text
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

// Secondary font for body text
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Indah Express Makassar - Layanan Pengiriman Terpercaya',
  description: 'Mitra terpercaya untuk layanan pengiriman barang ke seluruh Indonesia dengan pelayanan ramah dan profesional.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}