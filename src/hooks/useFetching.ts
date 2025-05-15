import { useState, useCallback } from 'react';

export const useFetching = <Args extends unknown[]>(
  callback: (...args: Args) => Promise<void>
): [
  (...args: Args) => Promise<void>,
  boolean,
    Error | null
] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (...args: Args): Promise<void> => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  return [fetchData, isLoading, error];
};
