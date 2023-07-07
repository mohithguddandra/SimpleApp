import React from "react";
import { Provider } from "react-redux";
import DataDisplay from "./components/DataDisplay";
import store from "./src/store/index";

const App = () => {
  return (
    <Provider from="react-redux" store={store}>
      <DataDisplay />
    </Provider>
  );
};

export default App;
