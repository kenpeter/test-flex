import React, { useCallback, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";

function Detail() {
  const mapState = useCallback(
    (state) => ({
      agree: state.agreeReducer.agree,
      name: state.detailReducer.name,
    }),
    []
  );
  const { agree, name } = useMappedState(mapState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (agree) {
      dispatch({
        type: "ON_DETAIL",
      });
    }
  }, [agree]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>detail here</>;
}

export default Detail;
