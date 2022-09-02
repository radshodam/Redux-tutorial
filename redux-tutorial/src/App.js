import React from "react";
import { Provider } from "react-redux";
import ContainerProducts from "./components/products/ContainerProducts.js";

import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <ContainerProducts />
    </Provider>
  );
}

export default App;
