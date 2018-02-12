import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import reducers from "./reducers/index";

const middlewares = applyMiddleware(promise);

const store = createStore(reducers, {}, middlewares);

export default store;