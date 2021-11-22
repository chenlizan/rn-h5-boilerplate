import { handleActions } from "redux-actions";
import { initState as demo, reducers as DemoReducer } from "./DemoReducer";

export const initState = {
  ...demo,
};

export const reducers = handleActions(Object.assign(DemoReducer), initState);
