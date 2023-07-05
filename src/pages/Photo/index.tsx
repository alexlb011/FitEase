import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
// import { Title } from './styled';
import { MSGsuccess } from '../../components/Toast/ToastAlerts';
import { Container } from '../../styles/GlobalStyles';
import * as exempleActions from '../../store/modules/example/actions';

export default function Photo() {
  MSGsuccess('success');
  const dispatch = useDispatch();
  function handleClick(e: any) {
    e.preventDefault();

    dispatch(exempleActions.ButtonClickRequest());
  }
  return (
    <Container>
      <h1>Login</h1>
    </Container>
  );
}
