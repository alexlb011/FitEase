import { call, put, all, takeLatest } from 'redux-saga/effects';
import { MSGerror } from '../../../components/Toast/ToastAlerts';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.ButtonClickSuccess());
  } catch (error) {
    MSGerror('deu ruim');
    yield actions.ButtonClickFailure;
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
