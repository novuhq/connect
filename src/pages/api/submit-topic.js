import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${method} not allowed` });
  }

  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Missing user ID' });
  }

  const { topic, languages } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        topic,
        topicLanguages: languages,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user data' });
  }
}
