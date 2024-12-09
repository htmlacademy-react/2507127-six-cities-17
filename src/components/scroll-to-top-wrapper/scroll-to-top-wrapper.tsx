import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopWrapperProps = {
  children: JSX.Element;
}

function ScrollToTopWrapper({children}: ScrollToTopWrapperProps): JSX.Element{
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0,0);
  },[location.pathname]);

  return children;
}

export default ScrollToTopWrapper;
