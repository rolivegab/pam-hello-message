import React from 'react';
import { Global } from '@emotion/core';
import css from '../style/global';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Global styles={css} />
    {children}
  </>
);

export default MainLayout;
