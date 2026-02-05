import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "oddprani | Vivek Kalgurti",
  description: "portfolio of Vivek Kalgurti - Coder, Designer, and Editor.",
  icons: {
    icon: '/docs/favicon.ico',
    apple: '/docs/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/docs/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/docs/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "oddprani | Vivek Kalgurti",
    description: "Futuristic portfolio of Vivek Kalgurti - Coder, Designer, and Editor.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/docs/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/docs/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/docs/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/docs/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
