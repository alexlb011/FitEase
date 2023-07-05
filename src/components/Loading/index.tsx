import React from 'react';
import PropTypes from 'prop-types';
import { ClockLoader } from 'react-spinners';
import { Container } from './styled';

export default function Loading({ isLoading }: any) {
  if (!isLoading) return <> </>;
  return (
    <Container>
      <div>
        <ClockLoader color="#c3102e" size={250} speedMultiplier={2} />
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
