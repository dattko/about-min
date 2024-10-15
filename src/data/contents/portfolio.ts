interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string[];
  link?: string;
  skills: string[];
  state?: string;
}

export const portfolios : Portfolio[] = [
    {
    id: 'portfolio-1',
    title: 'AboutMin',
    description: '나의 경력과 열정을 간결하고 매력적으로 표현하는 공간입니다. 사용자 친화적인 디자인과 구조로 구성되어, 방문자가 내 전문성을 쉽게 이해하고 기억할 수 있도록 돕습니다. 개인의 가치와 목표를 효과적으로 전달하여, 나의 브랜드를 한눈에 볼 수 있는 페이지입니다.',
    image: [
      'aboutMin'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'SCSS', 'AWS Amplify', 'Responsive', 'Layout Design' ]
    },
    {
      id: 'portfolio-2',
      title: 'Minz',
      description: 'Minz는 사용자들이 다양한 주제에 대해 자유롭게 소통하고 콘텐츠를 공유할 수 있는 커뮤니티 플랫폼입니다. 직관적인 내비게이션과 깔끔한 레이아웃을 통해 트렌디한 콘텐츠와 인기 게시물을 쉽게 발견할 수 있도록 설계되었습니다.',
      image: ['minz-1', 'minz-2', 'minz-3', 'minz-4'],
      link: 'https://minz.vercel.app/',
      state: 'preparing',
      skills: ['Next.js', 'TypeScript', 'SCSS', 'Tiptab', 'Vercel', 'Layout Design',  'Supabase', 'middleware' ]
    },
    {
    id: 'portfolio-3',
    title: 'ZeroBeat Web',
    description: '제로비트는 음악에 대한 깊은 이해와 감성을 기반으로 한 인터랙티브 웹 애플리케이션으로, 사용자가 다양한 음악 트랙을 탐색하고 즐길 수 있는 공간입니다. 매력적인 UI/UX 디자인과 원활한 내비게이션을 제공하여, 사용자 맞춤형 추천 시스템을 통해 개인의 음악 취향에 맞는 곡들을 제안하여 새로운 음악을 발견하는 즐거움을 더합니다.',
    image: ['zerobeat-1','zerobeat-2','zerobeat-3','zerobeat-4', 'zerobeat-5'],
    link: 'https://zero-beat.vercel.app/',
    skills: ['Next.js' , 'TypeScript', 'SCSS', 'Vercel', 'Styled-Components','Responsive', 'Layout Design', 'Spotify API' ]
    },

    
  ]