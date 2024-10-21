export interface Skill {
  id: number;
  name: string;
  url: string;
  percent?: number;
  type: 'basic' | 'additional'; // 스킬 유형을 나타내는 필드 추가
}


export interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string[];
  link?: string;
  skills: string[];
  state?: string;
}