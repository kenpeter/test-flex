const initialState = {
  loading: false,
  name: "",
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DETAIL_REQUEST":
      return { ...state, loading: true };
    case "DETAIL_FAIL":
      return { ...state, loading: false };
    case "DETAIL_SUCCESS":
      return { ...state, loading: false, name: action.name };
    default:
      return state;
  }
};
