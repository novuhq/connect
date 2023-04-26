'use client';

import { signIn, useSession } from 'next-auth/react';
import { useMemo, useEffect, useState } from 'react';

import { BUTTON_STATES } from 'components/shared/button';
import AUTH_STATUS from 'constants/status';

export default function useSignIn() {
  const [isLoadingState, setIsLoadingState] = useState(false);
  const { status } = useSession();
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);
  const isLoading = useMemo(
    () => isLoadingState || status === AUTH_STATUS.LOADING,
    [isLoadingState, status]
  );

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoadingState(true);
    setButtonState(BUTTON_STATES.LOADING);
    signIn('github', { callbackUrl: '/thank-you/' });
  };

  useEffect(() => {
    if (isLoading) {
      setButtonState(BUTTON_STATES.LOADING);
    } else {
      setButtonState(BUTTON_STATES.DEFAULT);
    }
  }, [isLoading]);

  return { buttonState, signIn: handleSignIn, status, isLoading };
}
