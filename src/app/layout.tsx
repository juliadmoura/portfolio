import { Sora } from 'next/font/google';
import './globals.css';

const getSora = Sora({
  variable: '--font-sora-sans',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${getSora.variable} antialiased`}>{children}</body>
    </html>
  );
}
