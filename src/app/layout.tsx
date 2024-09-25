import type { Metadata } from "next";
import '@style/globals.scss';
import Header from '@component/layouts/haeder/Header';
import ContactMe from '@/components/button/ContactMe';
import Footer from '@component/layouts/footer/Footer';
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
        <ContactMe />
        <Footer/>
      </body>
    </html>
  );
}
