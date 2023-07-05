import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import loading from './load/sagas';

export default function* rootSaga(): any {
  return yield all([auth, loading]);
}
