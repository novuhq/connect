import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const participants = await prisma.user.findMany({
    where: {
      innovationAndCreativityScore: {
        not: null,
      },
      qualityAndCompletenessScore: {
        not: null,
      },
      usefulnessAndPracticalityScore: {
        not: null,
      },
      uxAndDesignScore: {
        not: null,
      },
    },
    select: {
      id: true,
      name: true,
      image: true,
      projectUrl: true,
      innovationAndCreativityScore: true,
      qualityAndCompletenessScore: true,
      usefulnessAndPracticalityScore: true,
      uxAndDesignScore: true,
    },
  });

  res.status(200).json({ participants });
}
