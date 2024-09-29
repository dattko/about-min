import type { Metadata } from "next";
import '@style/globals.scss';
import Header from '@component/layouts/haeder/Header';
import Footer from '@component/layouts/footer/Footer';
import { ScrollProvider } from '@/contexts/ScrollContext';


export async function generateMetadata(): Promise<Metadata> {
  const title = "AboutMin"
  const description = "저의 포트폴리오 사이트입니다."

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    alternates: {
      canonical: "https://aboutmin.info",
    },
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title,
      description,
      url: "https://aboutmin.info", 
      siteName: title,
      images: [
        {
          url: `https://aboutmin.info/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://aboutmin.info/api/og?title=${encodeURIComponent(title)}`],
    },
    keywords: ["portfolio", "AboutMin", "portfolio site", "포트폴리오", "포트폴리오 사이트", "프론트엔드 포트폴리오", "어바웃민"],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
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
