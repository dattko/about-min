export interface MenuItem {
  id: string;
  name: string;
  link: string;
}

export const menuItems:MenuItem[] = [
  {
    id : 'menu-1',
    name: '소개',
    link: 'about'
  },
  {
    id : 'menu-2',
    name: '기술',
    link: 'skills'
  },
  {
    id : 'menu-3',
    name: '경력',
    link: 'career'
  },
  {
    id : 'menu-4',
    name: '프로젝트',
    link: 'projects'
  },
];