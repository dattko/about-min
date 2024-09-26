import type { Metadata } from "next";
import '@style/globals.scss';
import Header from '@component/layouts/haeder/Header';
import ContactMe from '@/components/button/ContactMe';
import Footer from '@component/layouts/footer/Footer';
import { ScrollProvider } from '@/contexts/ScrollContext';
export const metadata: Metadata = {
  title: "about-min",
  description: "저의 포트폴리오 사이트입니다.",
  icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProvider>
          <Header />
          {children}
          {/* <ContactMe /> */}
          <Footer/>
        </ScrollProvider>
      </body>
  </html>
  );
}
