import FAQ from 'components/pages/home/faq';
import Swag from 'components/pages/home/swag';
import Hero from 'components/pages/profile/hero';
import MainLayout from 'components/shared/main-layout';

const Profile = () => (
  <MainLayout>
    <Hero />
    <FAQ />
    <Swag />
  </MainLayout>
);

export default Profile;
