import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to manage state based on URL hash parameters.
 * @param {string} key - The key to look for in the hash parameters.
 * @returns {[string | null, (newValue: string | null) => void]} - The value associated with the key and a function to set a new hash state.
 */
export function useHashState(
  key: string,
): [string | null, (newValue: string | null) => void] {
  // Function to get the current value from the hash
  const getHashValue = useCallback(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.slice(1)); // Remove the '#' and create URLSearchParams
    return params.get(key);
  }, [key]);

  const [value, setValue] = useState<string | null>(getHashValue);

  useEffect(() => {
    const handleHashChange = () => {
      setValue(getHashValue());
    };

    // Listen for changes to the hash
    window.addEventListener('hashchange', handleHashChange);

    // Initial check
    handleHashChange();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [getHashValue]);

  // Function to update the hash value
  const setHashValue = useCallback(
    (newValue: string | null) => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.slice(1));
      if (newValue === null) {
        params.delete(key);
      } else {
        params.set(key, newValue);
      }
      window.location.hash = params.toString();
    },
    [key],
  );

  return [value, setHashValue];
}
