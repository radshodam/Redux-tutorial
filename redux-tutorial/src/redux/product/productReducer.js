import {
  FAILURE_PRODUCT,
  REQUEST_PRODUCT,
  SUCCESS_PRODUCT,
} from "./productTypes";

const initialState = {
  //false = isn't Loading
  loading: false,
  data: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return { ...state, loading: true };
    case SUCCESS_PRODUCT:
      return { ...state, data: action.payload, error: "", loading: false };
    case FAILURE_PRODUCT:
      return { ...state, data: [], error: action.payload, loading: false };
    default:
      return state;
  }
};
export default productReducer;
