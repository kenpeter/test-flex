const initialState = {
  loading: false,
  agree: "",
};

export const agreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREE_REQUEST":
      return { ...state, loading: true };
    case "AGREE_FAIL":
      return { ...state, loading: false };
    case "AGREE_SUCCESS":
      return { ...state, loading: false, agree: action.agree };
    default:
      return state;
  }
};
