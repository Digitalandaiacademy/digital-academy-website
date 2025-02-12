import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from '@/components/header';
import Footer from '@/components/footer';
import BackButton from '@/components/back-button';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital & AI Academy - Services Digitaux Sur Mesure',
  description: 'Transformez votre entreprise avec nos solutions digitales sur mesure. Expertise en marketing digital, création de contenu et développement web.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },  
  openGraph: {
    title: 'Digital & AI Academy',
    description: 'Services Digitaux Sur Mesure',
    images: [
      {
        url: '/images/logo.png',
        width: 500,
        height: 500,
        alt: 'Digital & AI Academy Logo',
      },
    ],
  },  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <BackButton />
          <main className="dark:bg-gray-900 dark:text-white">{children}</main>
          <Footer />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}