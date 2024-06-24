import { useRouter } from 'next/navigation';
import { getAccessToken, getMailFromToken } from '@/utils/auth';

const useAuth = (): void => {
  const router = useRouter();

    const checkAuth = async () => {
      let accessToken = getAccessToken();
      if (!getMailFromToken(accessToken)) {
        router.push('/');
      }
    };

    checkAuth();
};

export default useAuth;