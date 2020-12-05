import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BoardInput from '../../components/BoardInput';
import MainLayout from '../../layouts/MainLayout';
import css from './style';
import colors from '../../style/colors';
import Button from '../../components/Button';
import API from '../../services/API';
import Spinner from '../../components/Spinner';

const Register: React.FC = () => {
  const [value, setValue] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const submit = async () => {
    setLoading(true);
    try {
      const response = await API.post('register', {
        json: {
          input: value,
        },
      });
      if (response.status === 200) {
        router.replace('/');
      }
    } finally {
      setLoading(false);
    }
  };
  const clear = () => {
    setValue([]);
  };

  return (
    <MainLayout>
      <div css={css.boardWrapper}>
        <BoardInput
          value={value}
          onValueChange={(changedValue) => {
            setValue((p) => (p.find((i) => i === changedValue)
              ? p.filter((i) => i !== changedValue)
              : [...p, changedValue]));
          }}
        />
        <Button
          colors={{
            background: 'transparent',
            border: 'white',
            color: 'white',
            backgroundHover: 'white',
            borderHover: 'white',
            colorHover: colors.primary,
          }}
          onClick={submit}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Registrar'}
        </Button>
        <Button
          colors={{
            background: 'transparent',
            border: 'white',
            color: 'white',
            backgroundHover: 'white',
            borderHover: 'white',
            colorHover: colors.primary,
          }}
          onClick={clear}
        >
          Limpar
        </Button>
      </div>
    </MainLayout>
  );
};

export default Register;
