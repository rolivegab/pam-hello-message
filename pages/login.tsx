import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import API from '../services/API';
import redirectTo from '../utils/redirectTo';
import BoardInput from '../components/BoardInput';
import Button from '../components/Button';
import colors from '../style/colors';
import MainLayout from '../layouts/MainLayout';
import PRISMA from '../services/PRISMA';

const Login: React.FC = () => {
  const [password, setPassword] = useState<number[]>([]);
  const { push } = useRouter();

  const submit = async () => {
    try {
      const request = await API.post('/auth', {
        json: { password },
      });
      const {
        token,
      } = await request.json() as {token: string};
      localStorage.setItem('token', token);
      push('/');
    } catch (error) {
      alert(error);
    }
  };

  const handleValueChange = (value: number) => {
    setPassword((p) => (password.find((i) => i === value)
      ? password.filter((i) => i !== value)
      : [...p, value]));
  };

  return (
    <MainLayout>
      <div css={{
        margin: '0 auto',
        padding: '5%',
        width: 'fit-content',
      }}
      >
        <BoardInput value={password} onValueChange={handleValueChange} />
        <Button
          colors={{
            background: 'transparent',
            backgroundHover: 'white',
            color: 'white',
            colorHover: colors.primary,
            border: 'white',
            borderHover: 'white',
          }}
          onClick={submit}
        >
          Enviar
        </Button>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if ((await PRISMA.user.count()) === 0) {
    redirectTo(res, '/register');
  }

  return {
    props: {},
  };
};

export default Login;
