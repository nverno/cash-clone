import { useEffect } from 'react';

export function useOutsideClick(
  ref: React.RefObject<any>,
  handleFinished: (e: MouseEvent) => any,
) {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) handleFinished(e);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  // return () => {
  //   document.addEventListener('mousedown', handleClickOutside);
  // }
}
export default useOutsideClick;
