import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { PersonalData, FieldData, ButtonGroup } from './styled';

export default function StudentData({ student }: any) {
  if (student === null) return <> </>;
  return (
    <PersonalData>
      <FieldData>
        <p>Nome:</p>
        <p>{student?.name}</p>
      </FieldData>
      <FieldData>
        <p>E-mail:</p>
        <p>{student?.email}</p>
      </FieldData>
      <FieldData>
        <p>Idade:</p>
        <p>{student?.age}</p>
      </FieldData>
      <FieldData>
        <p>Peso:</p>
        <p>{student?.weight}</p>
      </FieldData>
      <FieldData>
        <p>Altura:</p>
        <p>{student?.height}</p>
      </FieldData>
      <FieldData>
        <p>Telefone:</p>
        <p>(17)91916081</p>
      </FieldData>
      <FieldData>
        <p>Data de Registro:</p>
        <p>18/02/2022</p>
      </FieldData>
      <ButtonGroup>
        <Link to={`/Student/${student?.id}/edit/`}>
          <button type="submit">Atualizar dados</button>
        </Link>
      </ButtonGroup>
    </PersonalData>
  );
}

StudentData.defaultProps = {
  student: null,
};

StudentData.propTypes = {
  student: PropTypes.any,
};
