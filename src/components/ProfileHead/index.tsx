import React from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { TitleHead } from './styled';

export default function ProfileHead({ photo, student }: any) {
  if (photo === null) return <> </>;
  return (
    <TitleHead>
      <label htmlFor="picupload" style={{ cursor: 'pointer' }}>
        {photo ? (
          <img src={photo} alt="" />
        ) : (
          <FaUserCircle
            style={{
              width: '150px',
              height: '150px',
            }}
          />
        )}
      </label>
      <h1>{student?.name}</h1>
    </TitleHead>
  );
}

ProfileHead.defaultProps = {
  photo: null,
  student: null,
};

ProfileHead.propTypes = {
  photo: PropTypes.any,
  student: PropTypes.any,
};
