import { useState, useEffect } from 'react';

//Lister for current innerWidth of browser.
function useInnerWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, [width]);

  return width;
}

export default useInnerWidth;
