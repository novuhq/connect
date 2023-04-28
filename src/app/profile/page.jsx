import Hero from 'components/pages/profile/hero';
import FAQ from 'components/shared/faq';
import MainLayout from 'components/shared/main-layout';
import Swag from 'components/shared/swag';

const Profile = () => (
  <MainLayout>
    <Hero />
    <FAQ />
    <Swag />
  </MainLayout>
);

export default Profile;
