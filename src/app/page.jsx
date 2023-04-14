import CountdownTimer from 'components/pages/home/countdown-timer';
import Hero from 'components/pages/home/hero';
import MainLayout from 'components/shared/main-layout';

const Home = () => (
  <MainLayout>
    <Hero />
    <CountdownTimer />
  </MainLayout>
);

export default Home;
