import { getServerSession } from 'next-auth';

import { authOptions } from './auth/[...nextauth]';

import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions());

  if (!session?.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { method } = req;

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${method} not allowed` });
  }

  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Missing user ID' });
  }

  const { projectUrl, projectDescription } = req.body;

  if (!projectUrl || !projectDescription) {
    return res.status(400).json({ message: 'Missing project data' });
  }

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        projectUrl,
        projectDescription,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user data' });
  }
}
