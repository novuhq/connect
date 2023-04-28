'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useUser() {
  const [user, setUser] = useState(null);
  const { data, error } = useSWR('/api/user', fetcher);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return {
    user,
    isLoading: !error && !data,
  };
}
