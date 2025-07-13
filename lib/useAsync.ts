import { useCallback, useState } from "react";
import type { AxiosError } from "axios";

interface UseAsyncResult<T, Args extends unknown[]> {
  loading: boolean;
  error: string | null;
  execute: (...args: Args) => Promise<T | undefined>;
  setError: (err: string | null) => void;
}

export function useAsync<T, Args extends unknown[]>(
  asyncFn: (...args: Args) => Promise<T>
): UseAsyncResult<T, Args> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (...args: Args): Promise<T | undefined> => {
      setLoading(true);
      setError(null);
      try {
        const result = await asyncFn(...args);
        return result;
      } catch (err: unknown) {
        if (err instanceof Error) {
          const axiosError = err as AxiosError<{ message?: string }>;
          const message =
            axiosError?.response?.data?.message ??
            err.message ??
            "Произошла ошибка";
          setError(message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    [asyncFn]
  );

  return {
    loading,
    error,
    execute,
    setError,
  };
}
