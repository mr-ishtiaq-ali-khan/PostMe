import { useEffect, useState } from 'react';

/**
 * The function `useIsMobileDevice` returns a boolean value indicating whether the user's device is a
 * mobile device based on the window width.
 * @returns The `useIsMobileDevice` function returns a boolean value indicating whether the current
 * device is considered a mobile device based on the window width.
 */
function useIsMobileDevice(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold as per your design
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return isMobile;
}

export default useIsMobileDevice;