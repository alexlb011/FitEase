import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import * as actionLoading from '../../store/modules/load/actions';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';

interface RouteParams {
  id: any;
}

export default function Student() {
  const user_id = useSelector((state: any) => state.auth.user.id);
  const dispatch = useDispatch();
  const rootLoader = useSelector((state: any) => state.loading.IsLoading);
  const { id }: RouteParams = useParams();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    async function getData() {
      if (!id) return;
      dispatch(actionLoading.IsLoading(true));
      try {
        const { data } = await axios.get(`alunos/${id}`);
        setName(data.name);
        setLastname(data.lastname);
        setEmail(data.email);
        setAge(data.age.toString());
        setWeight(data.weight.toString());
        setHeight(data.height.toString());
        dispatch(actionLoading.IsLoading(false));
      } catch (err) {
        const status: number = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.erros', []);
        dispatch(actionLoading.IsLoading(false));

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/students');
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      toast.error('O nome deve ter entre 3 a 255 caracteres!');
      formErrors = true;
    }
    if (lastname.length < 3 || lastname.length > 255) {
      toast.error('O sobrenome deve ter entre 3 a 255 caracteres!');
      formErrors = true;
    }
    if (!validator.isEmail(email)) {
      toast.error('E-mail inválido!');
      formErrors = true;
    }
    if (!validator.isInt(age)) {
      toast.error('Idade inválida!');
      formErrors = true;
    }
    if (!validator.isFloat(weight)) {
      toast.error('Peso inválido!');
      formErrors = true;
    }
    if (!validator.isFloat(height)) {
      toast.error('Altura inválida!');
      formErrors = true;
    }

    if (formErrors) return;

    // if ID : editing
    // else  : Creat
    try {
      dispatch(actionLoading.IsLoading(true));

      if (id) {
        await axios.put(`/alunos/${id}`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
          user_id,
        });
        toast.success('Aluno(a) Editado!');
        dispatch(actionLoading.IsLoading(false));
        history.push(`/Student/${id}/profile/`);
      } else {
        await axios.post(`/alunos/`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
          user_id,
        });
        toast.success('Aluno(a) Criado!');
        history.push('/students');
        dispatch(actionLoading.IsLoading(false));
      }
    } catch (err) {
      dispatch(actionLoading.IsLoading(false));
      const status: number = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFailure(''));
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={rootLoader} />
      <Title>Novo aluno(a)</Title>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Altura"
        />

        <button type="submit">{id ? 'Editar Aluno' : 'Cadastrar Aluno'}</button>
      </Form>
    </Container>
  );
}
