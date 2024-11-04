import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type QueryParams = Record<string, string | number | boolean>;

const usePushQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pushQuery = useCallback(
    (newQueryParams: QueryParams = {}, paramsToDelete: string[] = []) => {
      const currentParams = new URLSearchParams(searchParams.toString());

      // Delete specified query parameters
      paramsToDelete.forEach((key) => {
        currentParams.delete(key);
      });

      // Merge new query parameters
      Object.entries(newQueryParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          currentParams.set(key, String(value));
        }
      });

      // Construct the new URL
      const queryString = currentParams.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      // Push the new URL with the updated query parameters
      router.push(newUrl);
    },
    [router, pathname, searchParams],
  );

  return { pushQuery };
};

export default usePushQuery;
