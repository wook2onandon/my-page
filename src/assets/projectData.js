export const projectData = [
  {
    id: 0,
    title: '포트폴리오 웹사이트',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다. 순수 React로 개발을 완료하였습니다. 슬라이더는 React-Slick library를 사용하여 arrow버튼과 paging버튼을 커스텀하여 사용하였고 메뉴를 눌렀을때 스크롤을 이동시키기 위해 useMoveScroll이라는 custom hook을 만들어서 구현했습니다.',
    features:
      '간단한 자기소개, 인적 사항, 기술 스택, GitHub링크, 프로젝트 경험, 업무 경력기술',
    github: 'github.com/wook2onandon/my-page',
    url: 'wook-portfolio.com',
    frontend: 'react, module css, react-slick',
    backend: '',
    database: '',
    deployment: 'Netlify',
    images: [
      '/images/shoppy-home.png',
      '/images/shoppy-home.png',
      '/images/shoppy-home.png',
      '/images/shoppy-home.png',
    ],
  },
  {
    id: 1,
    title: 'Shoppy',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      'react를 사용하여 일반적인 반응형 쇼핑몰을 구현했습니다. firebase를 사용하여 로그인기능과 상품정보를 가져오고 추가하는 기능을 만들었습니다. 로그인 할 경우 uuid를 firebase에 등록하고 운영자로 등록되어있는 uuid를 가진 계정으로 로그인 할 경우 상품을 추가할 수 있는 버튼을 분기처리해서 일반사용자에게는 노출되지 않도록 하였습니다. 또한 로그인을 하면 장바구니버튼이 표시되며 실시간으로 firebase와 통신하여 장구바구니에 상품을 추가하고 제거할 수 있습니다. react-query를 사용하여 상태관리를 용이하게 만들었고 tailwind css를 사용하여 css작업을 간편하게 했습니다.',
    features:
      '일반적인 쇼핑몰 기능, 장바구니 추가, 로그인 기능, 운영자계정 상품 추가',
    github: 'github.com/wook2onandon/shoppy',
    url: 'wook-shoppy.com',
    frontend: 'react, tailwind css, react-query, uuid',
    backend: 'firebase',
    database: 'firebase',
    deployment: 'Netlify',
    images: [
      '/images/shoppy-home.png',
      '/images/shoppy-admin.png',
      '/images/shoppy-cart.png',
      '/images/shoppy-login.png',
      '/images/shoppy-product.png',
      '/images/shoppy-productDetail.png',
      '/images/shoppy-newProduct.png',
    ],
  },
  {
    id: 2,
    title: '유튜브 프로젝트',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      'Youtube의 오픈API를 사용해 실제 Youtube에 등록되어있는 데이터를 가져와 보여주는 사이트 제작, 불필요한 UI를 제거하고 관련된 동영상 추천과 검색기능만 구현하였습니다.',
    features: '추천 동영상, 관련된 동영상, 영상재생, 영상검색 기능',
    github: 'github.com/wook2onandon/youtube',
    url: 'wook-yotube.com',
    frontend: 'react, tailwind css, react-query',
    backend: 'Youtube API, Postman',
    database: '',
    deployment: 'Netlify',
    images: [
      '/images/youtube-home.png',
      '/images/youtube-detail.png',
      '/images/youtube-responsive-main.png',
      '/images/youtube-responsive.png',
    ],
  },
  {
    id: 3,
    title: 'Todo List',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      '할일을 적어두는 Todo List앱 입니다. 다크모드 기능이 있고 Todo List입력기능, 완료된 활동과 완료되지 않은 활동을 나누어 볼 수 있도록 제작. 또한 웹페이지에서 나가거나 새로고침 하더라도 유지 될 수 있도록 Local Storage에 저장 되로록 만들었습니다.',
    features: 'Todo List입력, 삭제, 완료설정, 다크모드',
    github: 'github.com/wook2onandon/todo',
    url: 'wook-todolist.com',
    frontend: 'react, tailwind css, react-query',
    backend: '',
    database: '',
    deployment: 'Netlify',
    images: [
      '/images/todo-home.png',
      '/images/todo-check.png',
      '/images/todo-active.png',
      '/images/todo-completed.png',
      '/images/todo-darkmode.png',
    ],
  },
];

export const skillsInfo = [
  {
    title: 'Frontend',
    src: '/images/frontend.png',
  },
  {
    title: 'Communication',
    src: '/images/communication.png',
  },
  {
    title: 'Version Control',
    src: '/images/version-control.png',
  },
  {
    title: 'Deployment',
    src: '/images/deployment.png',
  },
  {
    title: 'Backend',
    src: '/images/backend.png',
  },
];
