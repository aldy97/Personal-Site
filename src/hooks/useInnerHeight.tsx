import { useState, useEffect } from 'react';

//Lister for current innerHeight of browser.
function useInnerHeight() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
  }, [height]);

  return height;
}

export default useInnerHeight;
