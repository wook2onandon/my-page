import { useRef } from 'react';

//hook
function useMoveScroll(name) {
  const element = useRef(null);
  const onMoveToElement = () => {
    let scrollY =
      element.current.getBoundingClientRect().top - 80 + window.pageYOffset;
    // element.current?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
    window.scrollTo({
      left: 0,
      top: scrollY,
      behavior: 'smooth',
    });
  };
  return { element, onMoveToElement, name };
}

export default useMoveScroll;
