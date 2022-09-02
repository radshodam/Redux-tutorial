import { BUY_FRUIT_JUICE } from "./fruitJuiceTypes";
//add data payload to the
export function buyFruitJuice(numbers) {
  return {
    type: BUY_FRUIT_JUICE,
    payload: numbers || 1,
  };
}
