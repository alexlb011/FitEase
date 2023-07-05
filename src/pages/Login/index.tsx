import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import { Title, Form, LoginStyle, RegisterStyle } from './styled';
import * as action from '../../store/modules/auth/actions';
import * as actionLoading from '../../store/modules/load/actions';
import Loading from '../../components/Loading';

export default function Login(props: any) {
  const id = useSelector((state: any) => state.auth.user.id);
  const nameStored = useSelector((state: any) => state.auth.user.nome);
  const emailStored = useSelector((state: any) => state.auth.user.email);
  const rootLoader = useSelector((state: any) => state.loading.IsLoading);

  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setName(nameStored);
    setEmail(emailStored);
  }, [nameStored, id, emailStored]);

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }
    if (isEmail(email) === false) {
      formErrors = true;
      toast.error('Email inválido');
    }
    if (password.length < 6) {
      formErrors = true;
      toast.error('Senha deve ter mais de 6 caracteres');
    }
    if (password !== confirmPassword) {
      formErrors = true;
      toast.error('Confirmação de senha incorreta');
    }

    if (formErrors) return;

    dispatch(actionLoading.IsLoading(true));

    try {
      await axios.post('users/', {
        name,
        email,
        password,
      });
      toast.success('Usuário Cadastrado');
      dispatch(action.loginRequest({ email, password, prevPath }));
    } catch (error) {
      dispatch(actionLoading.IsLoading(false));
      const errors = get(error, 'response.data.erros', []);
      errors.map((error) => toast.error(error));
    }
  };
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors = false;

    if (isEmail(emailLogin) === false) {
      formErrors = true;
      toast.error('E-mail inválido');
    }
    if (passwordLogin.length < 6) {
      formErrors = true;
      toast.error('Senha deve ter mais de 6 Caracteres');
    }

    if (formErrors) return;
    const email = emailLogin;
    const password = passwordLogin;
    dispatch(action.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <Loading isLoading={rootLoader} />
      <LoginStyle>
        <Form onSubmit={handleSubmitLogin}>
          <Title>
            <h1>Login</h1>
          </Title>
          <label htmlFor="nome">
            E-mail:
            <input
              type="email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              autoComplete=""
            />
          </label>
          <label htmlFor="nome">
            Senha:
            <input
              type="password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              autoComplete=""
            />
          </label>
          <button type="submit">Login</button>
        </Form>
      </LoginStyle>

      <RegisterStyle>
        <Form onSubmit={handleSubmitRegister}>
          <Title>
            <h1>Cadastrar novo usuário</h1>
          </Title>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete=""
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete=""
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete=""
            />
          </label>
          <label htmlFor="Confirmpassword">
            Confirmar senha:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              autoComplete=""
            />
          </label>
          <button type="submit">Register</button>
        </Form>
      </RegisterStyle>
    </Container>
  );
}
