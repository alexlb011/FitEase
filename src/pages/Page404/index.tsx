import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { ErrorText } from './styled';

export default function Page404() {
  return (
    <Container>
      <ErrorText>essa pagina nao existe</ErrorText>
    </Container>
  );
}
