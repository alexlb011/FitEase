import * as types from '../types';

export function ButtonClickRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}
export function ButtonClickSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}
export function ButtonClickFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
