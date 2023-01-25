export const projectData = [
  {
    id: 0,
    title: 'Shoppy',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      'react를 사용하여 일반적인 반응형 쇼핑몰을 구현했습니다. firebase를 사용하여 로그인기능과 상품정보를 가져오고 추가하는 기능을 만들었습니다. 로그인 할 경우 uuid를 firebase에 등록하고 운영자로 등록되어있는 uuid를 가진 계정으로 로그인 할 경우 상품을 추가할 수 있는 버튼을 분기처리해서 일반사용자에게는 노출되지 않도록 하였습니다. 또한 로그인을 하면 장바구니버튼이 표시되며 실시간으로 firebase와 통신하여 장구바구니에 상품을 추가하고 제거할 수 있습니다. react-query를 사용하여 상태관리를 용이하게 만들었고 tailwind css를 사용하여 css작업을 간편하게 했습니다.',
    features:
      '일반적인 쇼핑몰 기능, 장바구니 추가, 로그인 기능, 운영자계정 상품 추가',
    github: 'https://www.github.com/wook2onandon/shoppy',
    url: 'https://wook-shoppy.netlify.app',
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
    readme: {
      title: 'Shoppy',
      summary:
        'react를 사용하여 일반적인 반응형 쇼핑몰을 구현했습니다. firebase를 사용하여 로그인기능과 상품정보를 가져오고 추가하는 기능을 만들었습니다. 로그인 할 경우 uuid를 firebase에 등록하고 운영자로 등록되어있는 uuid를 가진 계정으로 로그인 할 경우 상품을 추가할 수 있는 버튼을 분기처리해서 일반사용자에게는 노출되지 않도록 하였습니다. 또한 로그인을 하면 장바구니버튼이 표시되며 실시간으로 firebase와 통신하여 장구바구니에 상품을 추가하고 제거할 수 있습니다. react-query를 사용하여 상태관리를 용이하게 만들었고 tailwind css를 사용하여 css작업을 간편하게 했습니다.',
      detail: [
        '일반적인 쇼핑몰 기능',
        '장바구니 추가',
        '로그인 기능',
        '운영자계정 상품 추가',
      ],
      background:
        'firebase를 사용해보고 싶었는데 포트폴리오로 사용할 수 있는 쇼핑몰을 구현하면서 사용해보자라는 취지로 시작했습니다. firebase의 auth기능과 realtime database를 사용할 수 있도록 사이트를 구현해보고자 했습니다.',
      meaning:
        '처음 firebase를 사용하여 조금 부족한 점도 있고 쉽지 않았지만 공식문서를 보며 firebase의 auth기능을 사용하여 구글 로그인을 구현하였고, realtime database를 사용하여 상품정보의 읽기, 쓰기기능 및 사용자가 admin계정인지 판단하는 정보를 불러오도록 만들었습니다. 로그인을 하게 될 경우 장바구니 기능을 이용할 수 있고, 사용자가 admin계정일 경우 상품등록도 가능하도록 만들었습니다. firebase를 사용해보니 프론트엔드 개발자가 가볍게 사이트를 구현할때 백엔드구성을 쉽게 할 수 있다는 것이 큰 장점으로 생각됩니다.',
      techStack: {
        frontend: 'React, tailwind css, React-Slick',
        backend: 'firebase',
        database: 'firebase',
        deployment: 'Netlify',
      },
      url: 'https://wook-shoppy.netlify.app',
    },
  },
  {
    id: 1,
    title: '유튜브 프로젝트',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      'Youtube의 오픈API를 사용해 실제 Youtube에 등록되어있는 데이터를 가져와 보여주는 사이트 제작, 불필요한 UI를 제거하고 관련된 동영상 추천과 검색기능만 구현하였습니다.',
    features: '추천 동영상, 관련된 동영상, 영상재생, 영상검색 기능',
    github: 'https://www.github.com/wook2onandon/youtube',
    url: 'https://wook-youtube.netlify.app',
    frontend: 'react, tailwind css, react-query, axios',
    backend: 'Youtube API, Postman',
    database: '',
    deployment: 'Netlify',
    images: [
      '/images/youtube-home.png',
      '/images/youtube-detail.png',
      '/images/youtube-responsive-main.png',
      '/images/youtube-responsive.png',
    ],
    readme: {
      title: '유튜브 프로젝트',
      summary:
        'Youtube의 오픈API를 사용해 실제 Youtube에 등록되어있는 데이터를 가져와 보여주는 사이트 제작, 불필요한 UI를 제거하고 관련된 동영상 추천과 검색기능만 구현하였습니다.',
      detail: ['추천 동영상', '관련된 동영상', '영상재생', '영상검색 기능'],
      background:
        '오픈API를 사용한 사이트를 만들고 싶었습니다. 가장 대중적으로 사용하는 앱중 하나인 Youtube에 오픈API가 있었고 불필요한 UI는 제외하고 핵심적인 기능들만 오픈API를 사용해서 구현해보고자 했습니다.',
      meaning:
        'Youtube 오픈API는 하루 호출횟수 제한이 있어 mock데이터를 만들어서 UI를 먼저 구현하는 방식으로 만들었습니다. Postman을 사용하여 API를 보기좋게 정리하고 테스팅 해보았고 Axios를 사용하여 baseUrl과 key값을 정의해서 간편하게 API 통신을 하였습니다. 자주 사용하는 앱을 오픈API를 사용해서 사이트를 리뉴얼 해보는 재미가 있었던 프로젝트였습니다. Youtube 오픈API는 사용할 수 있는 기능이 정말 많았고 공식문서가 정리가 굉장히 잘 되어있어서 추후에 더 다양한 기능들을 추가해 볼 예정입니다.',
      techStack: {
        frontend: 'React, css module, React-Slick, axios',
        backend: 'Youtube API, Postman',
        database: '',
        deployment: 'Netlify',
      },
      url: 'https://wook-youtube.netlify.app',
    },
  },
  {
    id: 2,
    title: '포트폴리오 웹사이트',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      '포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다. 순수 React로 개발을 완료하였습니다. 슬라이더는 React-Slick library를 사용하여 arrow버튼과 paging버튼을 커스텀하여 사용하였고 메뉴를 눌렀을때 스크롤을 이동시키기 위해 useMoveScroll이라는 custom hook을 만들어서 구현했습니다.',
    features:
      '간단한 자기소개, 인적 사항, 기술 스택, GitHub링크, 프로젝트 경험, 업무 경력기술',
    github: 'https://www.github.com/wook2onandon/my-page',
    url: 'https://wook-portfolio.netlify.app',
    frontend: 'react, css module, react-slick',
    backend: '',
    database: '',
    deployment: 'Netlify',
    images: [
      '/images/portfolio-home.png',
      '/images/portfolio-skills.png',
      '/images/portfolio-archiving.png',
      '/images/portfolio-project.png',
      '/images/portfolio-career.png',
    ],
    readme: {
      title: '포트폴리오 웹사이트',
      summary:
        '포트폴리오 용도로 제작한 웹사이트입니다.  순수 React로 개발을 완료하였습니다. 슬라이더는 React-Slick library를 사용하여 arrow버튼과 paging버튼을 커스텀하여 사용하였고 메뉴를 눌렀을때 스크롤을 이동시키기 위해 useMoveScroll이라는 custom hook을 만들어서 구현했습니다.',
      detail: [
        '간단한 자기소개',
        '인적 사항',
        '기술 스택',
        'Github 링크',
        '프로젝트 경험',
        '업무 경력',
      ],
      background:
        '순수 React로 구현한 웹사이트입니다. React는 편리하게 사용할 수 있는 library기능이 많기 때문에 React-Slick library를 사용하였고, custom hook을 사용해보고 싶어서 페이지의 스크롤 관련 이벤트는 custom hook을 만들어 사용해보았습니다.',
      meaning:
        'slider관련 library는 기존에도 많이 사용해 보았기 때문에 사용하는데에 번거롭거나 어려운 점이 없었습니다. 하지만 스크롤 관련 custom hook은 처음 구현해 보았는데 익숙하지 않은 방식이라 조금 어려움이 있었습니다. object에 미리 정의해둔 메뉴들을 useRef를 사용하여 element의 위치를 찾아 스크롤을 이동시켜주는 형태로 사용하였습니다.',
      techStack: {
        frontend: 'React, css module, React-Slick',
        backend: '',
        database: '',
        deployment: 'Netlify',
      },
      url: 'https://wook-portfolio.netlify.app',
    },
  },
  {
    id: 3,
    title: 'Todo List',
    subTitle: '2023.01 (1人 개인 프로젝트)',
    detail:
      '할일을 적어두는 Todo List앱 입니다. context API를 사용해서 구현한 다크모드 기능이 있고 Todo List입력기능, 완료된 활동과 완료되지 않은 활동을 나누어 볼 수 있도록 제작. 또한 웹페이지에서 나가거나 새로고침 하더라도 유지 될 수 있도록 Local Storage에 저장 되로록 만들었습니다.',
    features: 'Todo List입력, 삭제, 완료설정, 다크모드',
    github: 'https://www.github.com/wook2onandon/todo',
    url: 'https://wook-todolist.netlify.app',
    frontend: 'react, tailwind css',
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
    readme: {
      title: 'Todo List',
      summary:
        '할일을 적어두는 Todo List앱 입니다. context API를 사용해서 구현한 다크모드 기능이 있고 Todo List입력기능, 완료된 활동과 완료되지 않은 활동을 나누어 볼 수 있도록 제작. 또한 웹페이지에서 나가거나 새로고침 하더라도 유지 될 수 있도록 Local Storage에 저장 되로록 만들었습니다.',
      detail: [
        'Todo List입력',
        'Todo List삭제',
        'Todo List완료설정',
        '다크모드',
      ],
      background:
        '순수 React로 구현한 웹앱을 만들어 보고 싶었고, 개발자들이 한번쯤은 만들어보는 Todo List를 완성도 있게 만들어 보고 싶었습니다. dark모드와 Local Storage를 사용하여 실제로 사용하기에 편한 앱을 만드는 것이 목표였습니다.',
      meaning:
        '순수 React를 사용해서 만들었습니다. dark모드는 상태를 한번에 관리할 수 있는 context api를 사용하였고 Local Storage에 List의 값을 저장하여 페이지를 이탈하거나 재접속했을 경우에도 계속해서 진행중이던 Todo List를 그대로 사용할 수 있도록 만들었습니다. 만들다 보니 새로운 기능들을 추가 하고 싶은게 많았습니다. 완성후에 사용을 해보니 특히 List를 공유하는 기능을 추가하고 싶다는 생각이 들었습니다. 추후에 React-native를 공부하며 새로운 기능을 추가해볼 예정입니다.',
      techStack: {
        frontend: 'React, tailwind css',
        backend: '',
        database: '',
        deployment: 'Netlify',
      },
      url: 'https://wook-todolist.netlify.app',
    },
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
