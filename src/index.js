import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route } from "react-router-dom";

import PostsIndex from "./components/posts_index";

import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
