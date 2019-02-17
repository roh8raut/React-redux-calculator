import React from "react";
import ReactDOM from "react-dom";
import KeypadComponent from "./KeypadComponent";
import store from "./store/Store";
import { Provider } from "react-redux";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div >
        <h1 className="header">Calculator</h1>
        <KeypadComponent />;
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
