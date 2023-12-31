import * as types from '../types';

export function loginRequest(payload: any) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function loginSuccess(payload: any) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function loginFailure(payload: any) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}
