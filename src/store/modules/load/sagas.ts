import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { MSGerror } from '../../../components/Toast/ToastAlerts';
import * as actions from './actions';
import * as types from '../types';

function exampleRequest() {
  try {
    // yield console.log('catch chegou');
    // yield toast.error('try chegou');
    // yield call(request);
    // yield put(actions.ButtonClickSuccess());
  } catch (error) {
    // yield console.log('catch chegou');
    // yield toast.error('catch chegou');
    // MSGerror('deu ruim');
    // yield actions.ButtonClickFailure;
  }
}

export default all([takeLatest(types.STATE_ISLOADING, exampleRequest)]);
