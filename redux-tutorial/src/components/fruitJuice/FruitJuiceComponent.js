import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyFruitJuice } from "../../redux/fruitJuice/fruitJuiceAction";
function FruitJuiceComponent() {
  const fruitJuice = useSelector((state) => state.fruitJuice.numOfFruitJuice);
  const dispatch = useDispatch();

  // input value
  const [valueFruit, setValueFruit] = useState(0);

  return (
    <div className="w-[300px] flex justify-center mx-auto my-10">
      <div>
        <label
          htmlFor="fruitJuice"
          className="block font-medium text-center text-gray-700 text-md"
        >
          {`fruitJuice: * `}
          <span className="px-2 text-xl text-green-600">{fruitJuice}</span>
        </label>
        <div className="mt-1">
          <input
            onChange={(e) => setValueFruit(e.target.value)}
            type="number"
            name="fruitJuice"
            className="block w-full py-1 pl-3 border border-gray-300 rounded-sm shadow-sm sm:text-sm"
            placeholder="add number buy fruit juice"
          />
        </div>
        {/*  data (payload) */}
        <button
          onClick={() => dispatch(buyFruitJuice(valueFruit))}
          className="w-full mx-auto mt-2 text-sm text-gray-500 "
          type="button"
        >
          {`add `}
          <span className="w-4 h-4 px-2 mx-1 font-bold bg-gray-100 border-2">
            {valueFruit > 0 ? valueFruit : 1 }
          </span>
          {` fruit juice`}
        </button>
      </div>
    </div>
  );
}

export default FruitJuiceComponent;
