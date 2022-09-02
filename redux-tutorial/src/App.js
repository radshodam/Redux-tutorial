import React from "react";
import { Provider } from "react-redux";
import ContainerCake from "./components/cake/ContainerCake";
import ContainerIceCream from "./components/iceCream/ContainerIceCream";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div >
      <ContainerCake/>
      </div>
      <ContainerIceCream/>
    </Provider>
  );
}

export default App;
