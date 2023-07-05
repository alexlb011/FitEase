import * as types from '../types';

export function IsLoading(state: boolean) {
  return {
    type: types.STATE_ISLOADING,
    state,
  };
}
