import { handleActions } from "redux-actions";

export const initState = {
  receive: 0,
};

export const reducers = handleActions(
  {
    RECEIVE: (state, action) => ({
      ...state,
      receive: action.payload,
    }),
  },
  initState
);
