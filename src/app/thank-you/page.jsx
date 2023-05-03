import { cookies } from 'next/headers';

import Hero from 'components/pages/thank-you/hero';
import MainLayout from 'components/shared/main-layout';

const Home = () => {
  const via = cookies().get('via');
  return (
    <MainLayout withoutFooter>
      <Hero via={via?.value} />
    </MainLayout>
  );
};

export default Home;
