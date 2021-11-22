export const initState = {
  receive: 0,
};

export const reducers = {
  RECEIVE: (state, action) => ({
    ...state,
    receive: action.payload,
  }),
};
