import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';
import PRISMA from '../../services/PRISMA';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { password } = req.body;
  const response = await PRISMA.user.findFirst();
  if (
    response.password.reduce<boolean>(
      (previous, current, index) => previous && password[index] === current,
      true,
    )
  ) {
    const cookies = new Cookies(req, res);
    cookies.set('token', sign('', process.env.JWT_SECRET));
    res.json({
      ok: true,
    });
  } else {
    res.status(401).json({
      message: 'Senha incorreta!',
    });
  }
};
