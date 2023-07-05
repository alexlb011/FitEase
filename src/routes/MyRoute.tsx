import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

interface Props extends RouteProps {
  isClosed: boolean;
}

export default function MyRoute({
  component: Component,
  isClosed,
  ...rest
}: Props) {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPath: rest.location?.pathname },
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
