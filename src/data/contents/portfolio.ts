interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string[];
  link: string;
  state?: string;
}

export const portfolios : Portfolio[] = [
    {
    id: 'portfolio-1',
    title: 'about-min',
    description: '나의 경력과 열정을 간결하고 매력적으로 표현하는 공간입니다. 사용자 친화적인 디자인과 구조로 구성되어, 방문자가 내 전문성을 쉽게 이해하고 기억할 수 있도록 돕습니다. 개인의 가치와 목표를 효과적으로 전달하여, 나의 브랜드를 한눈에 볼 수 있는 페이지입니다.',
    image: [],
    link: 'https://master.d2vs5157i88h0f.amplifyapp.com/',
    },
    {
    id: 'portfolio-2',
    title: 'ZeroBeat Web',
    description: '제로비트는 음악에 대한 깊은 이해와 감성을 기반으로 한 인터랙티브 웹 애플리케이션으로, 사용자가 다양한 음악 트랙을 탐색하고 즐길 수 있는 공간입니다. 매력적인 UI/UX 디자인과 원활한 내비게이션을 제공하여, 사용자 맞춤형 추천 시스템을 통해 개인의 음악 취향에 맞는 곡들을 제안하여 새로운 음악을 발견하는 즐거움을 더합니다.',
    image: ['zerobeat'],
    link: 'https://zero-beat.vercel.app/',
    },
    {
      id: 'portfolio-3',
      title: 'ZeroBeat App',
      description: '제로비트는 직관적인 내비게이션과 시각적으로 매력적인 레이아웃을 통해 사용자가 새로운 음악을 간편하게 발견할 수 있게 합니다. 각 트랙과 아티스트에 대한 상세한 정보를 공유하여 나의 음악적 전문성을 효과적으로 보여줍니다.',
      image: ['zeorobeatApp-1', 'zeorobeatApp-2'],
      link: 'https://dattko.github.io/portfolio/',
      state: 'preparing'
    }
  ]