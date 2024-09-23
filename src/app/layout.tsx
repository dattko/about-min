import type { Metadata } from "next";
import '@style/globals.scss';
import Header from '@component/layouts/haeder/Header';

export const metadata: Metadata = {
  title: "about-min"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
