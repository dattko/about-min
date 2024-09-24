export interface Project {
  id: string;
  title: string;
  period: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "UI/UX 개발 및 프론트엔드 개발",
    period: "22.04 - 현재",
    details: [
      "다양한 프레임워크(React, Vue, Angular, React Native) 활용 웹/모바일 앱 개발",
      "UI/UX 개선 및 성능 최적화 작업 주도",
      "신규 프로젝트 기술 스택 선정 및 구현 주도",
      "풀캘린더, 스와이퍼, CK에디터 등 라이브러리 활용 및 커스터마이징"
    ]
  },
  {
    id: "2",
    title: "자사 복지몰 앱 리뉴얼 (React Native)",
    period: "24.03 - 24.06",
    details: [
      "StyleComponent를 활용한 마크업 구현",
      "React Navigation을 사용한 메뉴 및 헤더 활성화",
      "React Hooks를 활용한 함수형 컴포넌트 개발",
      "Redux Toolkit을 이용한 전역 상태 관리 및 모달 구현",
      "SVG 라이브러리를 활용한 글로벌 SVG 컴포넌트 생성",
      "Native Select Picker 및 Date Picker 커스터마이징"
    ]
  },
  {
    id: "3",
    title: "세무사 사랑 프로젝트 (Vue.js)",
    period: "24.04 - 24.06",
    details: [
      "Vue Component를 활용한 레이아웃 구성",
      "Vuetify 프레임워크 커스터마이징",
      "SASS를 활용한 스타일링",
      "TypeScript를 사용한 타입 안전성 확보 및 이벤트 핸들링"
    ]
  },
  {
    id: "4",
    title: "비즈비 FOMS - 프랜차이즈 오더 앱 (Angular, Ionic)",
    period: "24.01 - 24.03",
    details: [
      "Angular 컴포넌트 기반 개발",
      "Ionic 프레임워크를 활용한 하이브리드 앱 개발",
      "SASS를 이용한 반응형 디자인 구현",
      "TypeScript를 활용한 강력한 타입 체크 및 이벤트 처리"
    ]
  },
  {
    id: "5",
    title: "인트라넷 3.0 리뉴얼 (React)",
    period: "23.08 - 24.01",
    details: [
      "React Hooks를 활용한 상태 관리 및 이벤트 핸들링",
      "Styled-components를 이용한 컴포넌트 기반 스타일링",
      "React 컴포넌트 설계 및 구현",
      "FullCalendar 라이브러리 커스터마이징 및 통합"
    ]
  },
  {
    id: "6",
    title: "스마트웰 홈페이지 리뉴얼",
    period: "24.04 - 23.05",
    details: [
      "HTML5를 활용한 시맨틱 마크업 구현",
      "SASS를 이용한 효율적인 스타일링",
      "순수 JavaScript를 활용한 동적 기능 구현",
      "Swiper 라이브러리를 활용한 슬라이드 기능 구현"
    ]
  },
  {
    id: "7",
    title: "비즈비 이사인 - 전자계약 시스템",
    period: "23.03 - 23.04",
    details: [
      "HTML 및 SASS를 활용한 반응형 레이아웃 구현",
      "JSP 기반 관리자 페이지 마크업 및 유지보수"
    ]
  },
  {
    id: "8",
    title: "고파츠 ERP 프로그램 (Vue.js)",
    period: "23.01 - 23.05",
    details: [
      "Vue.js 컴포넌트 설계 및 구현",
      "SASS를 활용한 모듈화된 스타일링",
      "커스텀 데이트피커 구현",
      "TypeScript를 활용한 타입 안전성 확보",
      "Wijmo Grid 커스터마이징 및 통합"
    ]
  },
  {
    id: "9",
    title: "벨류마크 홈페이지 리뉴얼",
    period: "22.09 - 23.01",
    details: [
      "HTML5 및 SASS를 활용한 반응형 웹 디자인 구현",
      "Swiper 라이브러리를 활용한 슬라이드 기능 구현",
      "미디어 쿼리를 활용한 다양한 디바이스 대응",
      "JavaScript 클래스를 활용한 헤더/푸터 컴포넌트 구현",
      "JavaScript 이벤트를 활용한 애니메이션 및 모달 기능 구현"
    ]
  },
  {
    id: "10",
    title: "Bizbee ERP 프로그램 리뉴얼 및 유지보수",
    period: "22.05 - 22.08",
    details: [
      "AngularJS 프레임워크 활용",
      "CSS를 활용한 UI 개선 및 마크업",
      "기존 기능의 호환성을 유지하며 HTML 구조 개선",
      "DatePicker 커스터마이징 및 기능 개선"
    ]
  },
  {
    id: "11",
    title: "개인 프로젝트 및 지속적인 학습",
    period: "지속적",
    details: [
      "Spotify API를 활용한 React/Next.js/ReactNative 기반 뮤직 플레이어 웹 앱 개발",
      "GitHub를 활용한 버전 관리 및 협업 경험",
      "지속적인 최신 기술 동향 파악 및 학습"
    ]
  }
];