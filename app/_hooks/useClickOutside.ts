import { useEffect, useRef } from "react";

const useOutsideClick = (callback: () => void, isMobile: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node) && isMobile)
        callback();
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [callback, isMobile, ref]);

  return ref;
};

export default useOutsideClick;
