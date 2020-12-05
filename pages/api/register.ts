import { NextApiRequest, NextApiResponse } from 'next';
import PRISMA from '../../services/PRISMA';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const createdUser = await PRISMA.user.create({
    data: {
      password: {
        set: req.body.input,
      },
    },
  });

  res.json(createdUser);
};
