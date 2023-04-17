import CountdownTimer from 'components/pages/home/countdown-timer';
import FAQ from 'components/pages/home/faq';
import GetStarted from 'components/pages/home/get-started/get-started';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Swag from 'components/pages/home/swag';
import MainLayout from 'components/shared/main-layout';

const Home = () => (
  <MainLayout>
    <Hero />
    <CountdownTimer />
    <HowItWorks />
    <Swag />
    <FAQ />
    <GetStarted />
  </MainLayout>
);

export default Home;
