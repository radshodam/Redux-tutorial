import { BUY_FRUIT_JUICE } from "./fruitJuiceTypes";

const initialState = {
  numOfFruitJuice: 10,
};

const FruitJuiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_FRUIT_JUICE:
      return { ...state, numOfFruitJuice: state.numOfFruitJuice - action.payload };
    default:
      return state;
  }
};
export default FruitJuiceReducer