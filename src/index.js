import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

class Hello extends Component {
  render() {
    return <div>Hi!!</div>;
  }
}

class Goodbye extends Component {
  render() {
    return <div>Goodbye!!</div>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

export default App;

registerServiceWorker();
