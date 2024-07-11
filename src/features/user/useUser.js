import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiUsers';

export function useUser(userId) {
  const {
    data: user,
    isLoading,
    error
  } = useQuery({ queryKey: ['user'], queryFn: () => getUser(userId) });
  return { user, isLoading, error };
}
