import { useState } from "react";

export const useFetching = (
  callback: (...args: any) => void
): [(...args: any) => void, boolean, string] => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async (...args: any) => {
    try {
      setIsLoading(true);

      await callback(...args);
    } catch (e: any) {
      const errorMessage = e.message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
