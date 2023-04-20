'use client';

import { NovuProvider, PopoverNotificationCenter } from '@novu/notification-center';
import { useSession } from 'next-auth/react';
import React, { useCallback, useRef } from 'react';

import CustomBell from './custom-bell';

const Novu = () => {
  const { status, data } = useSession();
  const ref = useRef(null);
  const onClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);
  if (status !== 'authenticated') {
    return <></>;
  }

  return (
    <NovuProvider
      subscriberId={data.user.email}
      applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID}
    >
      <PopoverNotificationCenter ref={ref} onNotificationClick={onClick}>
        {({ unseenCount }) => (
          <CustomBell colorScheme="white" unseenCount={unseenCount} aria-label="Notifications" />
        )}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default Novu;
