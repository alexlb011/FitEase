import React, { useLayoutEffect, useState } from 'react';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as loadActions from '../load/actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* LoginRequest({ payload }: any): Generator<any, void, any> {
  yield put(loadActions.IsLoading(true));
  try {
    const response = yield call(axios.post, 'tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logado');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(loadActions.IsLoading(false));
    history.push('/students');
  } catch (error) {
    yield put(loadActions.IsLoading(false));
    toast.error('Usuário ou senha inválido');
  }
}

function persistRehydrate({ payload }: any) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, LoginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
