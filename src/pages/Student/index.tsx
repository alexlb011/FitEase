import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import StudentData from '../../components/StudentData';
import Galery from '../../components/Galery';
import StudentTable from '../../components/StudentTable';
import ProfileHead from '../../components/ProfileHead';

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

interface Tables {
  id: any;
}
interface RouteParams {
  id: any;
}
interface Pics {
  url: string;
}

export default function PageStudent() {
  const [photo, setPhoto] = useState('');
  const [allPhoto, setAllPhoto] = useState<Pics[]>([]);
  const [allTables, setAllTables] = useState<Tables[]>([]);
  const [student, setStudent] = useState<Student>();
  const [isLoading, setIsLoading] = useState(false);
  const { id }: RouteParams = useParams();

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const { data } = await axios.get(`alunos/${id}`);

      setStudent(data);
      setPhoto(get(data, 'Photos[0].url', ''));
      setAllPhoto(get(data, 'Photos', []));
      setAllTables(get(data, 'Tables', []));
      setIsLoading(false);
    }
    getData();
  }, [id]);

  const handleChangePic = async (e: any) => {
    const photo = e.target.files[0];
    const photoURL = URL.createObjectURL(photo);

    setPhoto(photoURL);

    const newPhoto: Pics = { url: photoURL };
    const newAllPhoto: Pics[] = [...allPhoto, newPhoto];
    setAllPhoto(newAllPhoto);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('photo', photo);

    setIsLoading(true);
    try {
      await axios.post('photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Aluno criado com sucesso!');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <ProfileHead student={student} photo={photo} />
      <StudentData student={student} />
      <Galery allPhoto={allPhoto} />
      <StudentTable allTables={allTables} id={id} studentName={student?.name} />
      <input
        type="file"
        id="picupload"
        style={{ display: 'none' }}
        onChange={handleChangePic}
      />
    </Container>
  );
}
