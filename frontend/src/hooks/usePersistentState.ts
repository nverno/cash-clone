import React from 'react';

export function usePersistentState<T>(key: string, initialState: T) {
  const [value, setValue] = React.useState<T>(
    JSON.parse(localStorage.getItem(key)) || initialState,
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default usePersistentState;
