'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { BUTTON_STATES } from 'components/shared/button';

export default function useSignIn() {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);

  const handleSignIn = (e) => {
    e.preventDefault();

    setButtonState(BUTTON_STATES.LOADING);
    signIn('github', { callbackUrl: '/thank-you/' });
  };

  return { buttonState, signIn: handleSignIn };
}
