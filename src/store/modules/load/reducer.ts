import * as types from '../types';

const initialState = {
  IsLoading: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.STATE_ISLOADING: {
      const newState = { ...state };
      newState.IsLoading = action.state;

      return newState;
    }

    default:
      return state;
  }
}
