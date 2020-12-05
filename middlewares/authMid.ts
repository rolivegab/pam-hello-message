import { GetServerSideProps } from 'next';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import redirectTo from '../utils/redirectTo';

export default (next: GetServerSideProps): GetServerSideProps => async (context) => {
  const { req, res } = context;
  const cookies = cookie.parse(req.headers.cookie);
  const token = cookies?.Authorization?.slice(7);
  if (token && jwt.verify(token, process.env.JWT_TOKEN)) {
    next(context);
  } else {
    redirectTo(res, '/login');
  }
  return {
    props: {

    },
  };
};
