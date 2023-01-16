import { MutableRefObject, useEffect } from 'react';

export const useHandleClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  action: Function
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node)
      ) {
        action();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref, action]);
};