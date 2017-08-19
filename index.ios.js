import React, { Component } from "react";
import { AppRegistry } from "react-native";

import App from "./src/App";

import { Provider } from "mobx-react/native";
import Store from "./src/stores/Store";

class MobXTutorial extends React.Component {
  render() {
    return (
      <Provider Store={Store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("MobXTutorial", () => MobXTutorial);
