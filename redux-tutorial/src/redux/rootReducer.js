import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import FruitJuiceReducer from "./fruitJuice/fruitJuiceReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  fruitJuice: FruitJuiceReducer,
});
export default rootReducer;
