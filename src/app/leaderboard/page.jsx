import Board from 'components/pages/leaderboard/board';
import Hero from 'components/pages/leaderboard/hero';
import FAQ from 'components/shared/faq';
import GetStarted from 'components/shared/get-started';
import MainLayout from 'components/shared/main-layout';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/leaderboard`);

  return res.json();
}

export default async function Leaderboard() {
  const { participants } = await getData();

  return (
    <MainLayout>
      <Hero />
      <Board participants={participants} />
      <FAQ />
      <GetStarted />
    </MainLayout>
  );
}
