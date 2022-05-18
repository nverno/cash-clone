import { useLayoutEffect } from 'react';

export function useTheme(
  add?: string | string[],
  remove?: string | string[],
  el = window.document.body,
) {
  useLayoutEffect(() => {
    const initial = el.className;
    if (add) {
      if (typeof add === 'string') add = [add];
      el.classList.add(...add);
    }
    if (remove) {
      if (typeof remove === 'string') remove = [remove];
      el.classList.remove(...remove);
    }
    return () => {
      el.className = initial;
    };
  }, [add, remove]);
}

export default useTheme;
