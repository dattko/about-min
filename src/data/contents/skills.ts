export interface Skill {
  id: number;
  name: string;
  url: string;
  percent?: number;
  type: 'basic' | 'additional'; // 스킬 유형을 나타내는 필드 추가
}

export const skills: Skill[] = [
  {
    id: 1,
    name: 'HTML',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    percent: 90,
    type: 'basic',
  },
  {
    id: 2,
    name: 'SASS',
    url: 'https://sass-lang.com/assets/img/logos/logo.svg',
    percent: 90,
    type: 'basic',
  },
  {
    id: 3,
    name: 'TypeScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg',
    percent: 70,
    type: 'basic',
  },
  {
    id: 4,
    name: 'JavaScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    percent: 60,
    type: 'basic',
  },
  {
    id: 5,
    name: 'Vue.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
    percent: 50,
    type: 'basic',
  },
  {
    id: 6,
    name: 'React.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    percent: 70,
    type: 'basic',
  },
  {
    id: 7,
    name: 'React Native',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    percent: 40,
    type: 'basic',
  },
  {
    id: 8,
    name: 'Angular.js',
    url: 'https://www.angular.kr/assets/images/logos/angular/angular.svg',
    percent: 60,
    type: 'basic',
  },
  {
    id: 9,
    name: 'Vercel',
    url: 'https://camo.githubusercontent.com/e40cb80a2b7078aaa29e48190c4d665cdfb0a56a0dc871638c7f81efbe230fdb/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67',
    type: 'additional',
  },
  {
    id: 10,
    name: 'GitHub',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg',
    type: 'additional',
  },
  {
    id: 11,
    name: 'GitLab',
    url: 'https://images.ctfassets.net/xz1dnu24egyd/3FbNmZRES38q2Sk2EcoT7a/a290dc207a67cf779fc7c2456b177e9f/press-kit-icon.svg',
    type: 'additional',
  },
];
