import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('success');
      const newstate = { ...state };
      newstate.botaoClicado = !newstate.botaoClicado;
      return newstate;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('failure');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('request');
      return state;
    }

    default:
      return state;
  }
}
