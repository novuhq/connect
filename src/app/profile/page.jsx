'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import FAQ from 'components/pages/home/faq';
import Hero from 'components/pages/profile/hero';
import MainLayout from 'components/shared/main-layout';
import AUTH_STATUS from 'constants/status';
import useUser from 'hooks/use-user';

const Profile = () => {
  const { status } = useSession();
  const { isLoading } = useUser();

  const router = useRouter();

  if (status === AUTH_STATUS.LOADING || isLoading) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center">
          <span className="h-7 w-7 flex-shrink-0 animate-spin rounded-full border border-b border-transparent border-b-white" />
        </div>
      </MainLayout>
    );
  }

  if (status === 'unauthenticated') {
    return router.push('/');
  }

  return (
    <MainLayout>
      <Hero />
      <FAQ />
    </MainLayout>
  );
};

export default Profile;
