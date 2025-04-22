import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationBar from './components/layout/navbar';
import FooterComponent from './components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Aurelien Dev',
  description:
    ' This is Aurelien Dev website, a youge cameroonian web, mobile and game developer inspire to build.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
