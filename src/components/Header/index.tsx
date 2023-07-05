import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const username = useSelector((state: any) => state.auth.user.nome);
  const dispatch = useDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(actions.loginFailure(''));
    history.push('/login');
  };

  return (
    <Nav>
      {isLoggedIn && (
        <Link to="/students">
          <p>{username}</p>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/students">
          <FaHome size={24} />
        </Link>
      )}
      {isLoggedIn && (
        <Link onClick={handleLogout} to="/login">
          <FaPowerOff size={24} />
        </Link>
      )}
      {!isLoggedIn && (
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>
      )}
    </Nav>
  );
}
