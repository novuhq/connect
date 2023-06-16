import Board from 'components/pages/leaderboard/board';
import Hero from 'components/pages/leaderboard/hero';
import FAQ from 'components/shared/faq';
import GetStarted from 'components/shared/get-started';
import MainLayout from 'components/shared/main-layout';

export default async function Leaderboard() {
  return (
    <MainLayout>
      <Hero />
      <Board />
      <FAQ />
      <GetStarted />
    </MainLayout>
  );
}
