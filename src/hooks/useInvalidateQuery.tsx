import { useQueryClient } from '@tanstack/react-query';

const useInvalidateQuery = ({ queryKey }: { queryKey: string }) => {
  const queryClient = useQueryClient();

  const invalidateQuery = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKey],
    });
  };

  return { invalidateQuery };
};

export default useInvalidateQuery;
