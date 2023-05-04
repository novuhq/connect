import CountdownTimer from 'components/pages/home/countdown-timer';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import FAQ from 'components/shared/faq';
import GetStarted from 'components/shared/get-started/get-started';
import MainLayout from 'components/shared/main-layout';
import Swag from 'components/shared/swag';

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
