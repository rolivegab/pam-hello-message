import { NextPage, GetServerSideProps } from 'next';
import authMid from '../middlewares/authMid';

const Index: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = authMid(async () => null);

export default Index;
