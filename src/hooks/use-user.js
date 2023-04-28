'use client';

import { useState, useEffect } from 'react';

export default function useUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  async function fetchUser() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/user');
      const user = await res.json();
      setUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    setUser,
    isLoading,
  };
}
