import CountdownTimer from 'components/pages/home/countdown-timer';
import FAQ from 'components/pages/home/faq';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import MainLayout from 'components/shared/main-layout';

const Home = () => (
  <MainLayout>
    <Hero />
    <CountdownTimer />
    <HowItWorks />
    <FAQ />
  </MainLayout>
);

export default Home;
