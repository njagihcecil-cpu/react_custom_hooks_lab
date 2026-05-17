import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {

  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
