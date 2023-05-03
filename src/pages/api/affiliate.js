import { getServerSession } from 'next-auth';

import { authOptions } from './auth/[...nextauth]';

import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const handle = req?.cookies?.via;
  if (!handle) {
    return res.status(200).json({ noAffiliate: true });
  }

  const session = await getServerSession(req, res, authOptions());
  if (!session?.user) {
    return res.status(200).json({ noUser: true });
  }

  const findUserVia = await prisma.user.findFirst({
    where: {
      handle,
    },
  });

  if (!findUserVia) {
    return res.status(200).json({ noValidAffiliate: true });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (user.handle === findUserVia.handle) {
    return res.status(200).json({ sameUser: true });
  }

  await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      inviteId: findUserVia.id,
    },
  });

  return res.status(200).json({ completed: true });
}
