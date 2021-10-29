import { createAction } from "redux-actions";

const send = createAction("SEND");

const receive = createAction("RECEIVE");

export default {
  send,
  receive,
};
