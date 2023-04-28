import { getSession } from 'next-auth/react';

import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return res.status(200).json(user);
}
