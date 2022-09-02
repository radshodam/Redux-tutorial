import axios from "axios";
import {
  FAILURE_PRODUCT,
  REQUEST_PRODUCT,
  SUCCESS_PRODUCT,
} from "./productTypes";

// ? without export function because use here

function RequestProduct() {
  return {
    type: REQUEST_PRODUCT,
  };
}
function SuccessProduct(data) {
  return {
    type: SUCCESS_PRODUCT,
    payload: data,
  };
}
function FailureProduct(error) {
  return {
    type: FAILURE_PRODUCT,
    payload: error,
  };
}

export const fetchProducts = () => {
  //? return function(dispatch)

  return (dispatch) => {
    dispatch(RequestProduct());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const allProduct = res.data.map((product) => product);
        dispatch(SuccessProduct(allProduct));
      })
      .catch((err) => {
        dispatch(FailureProduct(err));
      });
  };
};
