import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux/cake/cakeAction";

function ContainerCake() {
  //?  this hooks accepts a function as its parameter : the selector function
  //? selector function receive redux stats as arguments === map_To_state
  //? useSelector hooks returns whatever returns by selector function

  const numOfCakes = useSelector((state) => state.numOfCakes);

  //?  useDispatch hooks returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center py-10">
      <div className="inline-flex rounded-md shadow-sm">
        <button
          onClick={() => dispatch(buyCake())}
          type="button"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          buy Cake
        </button>
        <span className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
          number of cakes : 
          <span className={` px-2 font-bold ${numOfCakes < 1 ? "text-red-400":"text-green-500"} `}>
            {numOfCakes}
          </span>
        </span>
      </div>
    </div>
  );
}

export default ContainerCake;
