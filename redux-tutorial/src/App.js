import React from "react";
import { Provider } from "react-redux";
import ContainerCake from "./components/cake/ContainerCake";
import FruitJuiceComponent from "./components/fruitJuice/FruitJuiceComponent";
import ContainerIceCream from "./components/iceCream/ContainerIceCream";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ContainerCake />
      </div>

      <div>
        <ContainerIceCream />
      </div>

      {/* fruitJuice by payload */}
      <div>
        <FruitJuiceComponent />
      </div>
    </Provider>
  );
}

export default App;
