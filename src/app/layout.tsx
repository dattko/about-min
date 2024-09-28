import type { Metadata } from "next";
import '@style/globals.scss';
import Header from '@component/layouts/haeder/Header';

import Footer from '@component/layouts/footer/Footer';
import { ScrollProvider } from '@/contexts/ScrollContext';


export const metadata: Metadata = {
  title: "AboutMin",
  description: "저의 포트폴리오 사이트입니다.",
  icons: {
		icon: "/favicon.png",
	},
  openGraph: {
    title: "AboutMin",
    description: "저의 포트폴리오 사이트입니다.",
    url: "https://aboutmin.info", 
    images: [
      {
        url: "/og.png", 
      },
    ],
    siteName: "AboutMin",
    type: "website",
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
          <Footer/>
        </ScrollProvider>
      </body>
  </html>
  );
}
