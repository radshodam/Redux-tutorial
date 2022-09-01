import React from "react";
import { Provider } from "react-redux";
import ContainerCake from "./components/cake/ContainerCake";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div >
      <ContainerCake/>
      </div>
    </Provider>
  );
}

export default App;
