import React from 'react';
import { ModalProvider } from './src/context/ModalContext';

export const wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>;
};