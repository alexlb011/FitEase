import React, { useState } from 'react';
import { functions, get, map } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as actionLoading from '../../store/modules/load/actions';
import 'reactjs-popup/dist/index.css';
import {
  AlunoContainer,
  StudentData,
  ProfilePicture,
  StudentManagerLink,
  Form,
  NewStudent,
  TitileHead,
} from './styled';

interface Student {
  id: number;
  name: string;
  email: string;
  weight: number;
  height: number;
  age: number;
  Tables: any;
  Photos: any;
}

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchBox, setSearchBox] = useState('');
  const rootLoader = useSelector((state: any) => state.loading.IsLoading);
  const dispatch = useDispatch();

  function handleInputChange(e: any) {
    setSearchBox(e);
  }

  React.useEffect(() => {
    async function getData() {
      dispatch(actionLoading.IsLoading(true));
      const response = await axios.get('alunos');
      setStudents(response.data);
      dispatch(actionLoading.IsLoading(false));
    }
    getData();
  }, []);

  async function searchStudent() {
    dispatch(actionLoading.IsLoading(true));
    if (searchBox !== '') {
      const response = await axios.get(`alunos/search/${searchBox}`);
      if (response.data.length === 0) {
        dispatch(actionLoading.IsLoading(false));
        toast.error('Nenhum aluno encontrado');
        return;
      }

      setStudents(response.data);
      dispatch(actionLoading.IsLoading(false));

      return;
    }
    const response = await axios.get(`alunos`);
    setStudents(response.data);
    dispatch(actionLoading.IsLoading(false));
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchStudent();
  };

  const handleDeleteAsk = (e: any) => {
    e.preventDefault();
    const father = e.currentTarget.parentNode;
    const exclamation = e.currentTarget.nextSibling;
    const deletedElement = e.currentTarget;

    e.currentTarget.remove();
    exclamation.setAttribute('display', 'true');

    setTimeout(function () {
      exclamation.setAttribute('display', 'none');
      exclamation.remove();
      father.appendChild(deletedElement);
      father.appendChild(exclamation);
    }, 2000);
  };

  const handleDelete = async (e: any, id: any, index: any) => {
    dispatch(actionLoading.IsLoading(true));
    try {
      await axios.delete(`alunos/${id}`);

      const novosAlunos = [...students];
      novosAlunos.splice(index, 1);
      setStudents(novosAlunos);
      dispatch(actionLoading.IsLoading(false));

      e.target.parentElement.remove();
    } catch (err) {
      const error = get(err, 'response.data.errors', []);
      error.map((error) => toast(error));
      dispatch(actionLoading.IsLoading(false));
    }
  };

  return (
    <Container id="AllTableRender">
      <Loading isLoading={rootLoader} />
      <TitileHead>Meus alunos</TitileHead>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome ou E-mail"
          value={searchBox}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
        />
        <button type="button" onClick={() => searchStudent()}>
          Pesquisar
        </button>
      </Form>
      <NewStudent>
        <Link to="/Students/newstudent">
          <button type="submit">Cadastrar novo Aluno(a)</button>
        </Link>
      </NewStudent>

      <AlunoContainer>
        {students.map((student, index) => (
          <div className="AlunoID" key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'Photos[0].url', false) ? (
                <Link to={`/Student/${student.id}/profile/`}>
                  <img src={student.Photos[0].url} alt="" />
                </Link>
              ) : (
                <Link to={`/Student/${student.id}/profile/`}>
                  <FaUserCircle />
                </Link>
              )}
            </ProfilePicture>
            <StudentData>
              <span>Nome: {student.name}</span>
              <span>E-mail: {student.email}</span>
              <span>Idade:{student.age}</span>
              <StudentManagerLink>
                <Link to={`/Student/${student.id}/profile/`}>
                  <ImProfile />
                </Link>
                <Link
                  onClick={handleDeleteAsk}
                  to={`/Student/${student.id}/delete/`}
                >
                  <FaWindowClose />
                </Link>
                <FaExclamation
                  display="none"
                  cursor="pointer"
                  onClick={(e) => handleDelete(e, student.id, index)}
                />
              </StudentManagerLink>
            </StudentData>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
