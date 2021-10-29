import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { routes } from "./routes/index";
import { configureStore } from "./store";
import "./assets/stylesheets/index.less"; //global style

const store = configureStore();

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById("root"));
