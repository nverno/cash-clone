import { useEffect } from "react";

/**
 * Hook to bind outside click listener for ref
 * modified https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */
export const useOutsideClick = (ref, handleFinished) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handleFinished(event);
    }
  }
  useEffect(() => {
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  // Bind function to bind the event listener
  return () => document.addEventListener("mousedown", handleClickOutside)
}
export default useOutsideClick
