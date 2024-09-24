interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const portfolios : Portfolio[] = [
  {
    id: 'portfolio-1',
    title: 'Spotify Web',
    description: '포트폴리오 사이트입니다.',
    image: 'portfolio1.png',
    link: 'https://dattko.github.io/portfolio/',
    },
    {
      id: 'portfolio-2',
      title: 'Spotify App',
      description: '포트폴리오 사이트입니다.',
      image: 'portfolio2.png',
      link: 'https://dattko.github.io/portfolio/',
    }
  ]