import './globals.css';
import { display, sans } from './fonts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import LenisProvider from '@/components/LenisProvider';

export const metadata = {
  title: 'Tran Phu Khang — Portfolio',
  description: 'Backend / ABAP Developer. Spring Boot, Microservices, Kafka, Redis, Docker.',
  metadataBase: new URL('https://khang.dev.example'),
  openGraph: {
    title: 'Tran Phu Khang — Portfolio',
    description: 'Backend / ABAP Developer. Spring Boot, Microservices, Kafka, Redis, Docker.',
    images: ['/og.png']
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <LenisProvider>
          <Cursor />
          <Nav />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}