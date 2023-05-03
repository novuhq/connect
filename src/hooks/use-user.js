'use client';

import { useEffect } from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({ loading: false, user: null });

let initiate = false;
export default function useUser() {
  const [isLoading, setIsLoading] = useGlobalState('loading');
  const [user, setUser] = useGlobalState('user');

  async function fetchUser() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/user/');
      const user = await res.json();
      setUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!initiate) {
      initiate = true;
      fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    setUser,
    isLoading,
  };
}
