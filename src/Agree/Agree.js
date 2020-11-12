// react
import React from "react";
// fire
import { useDispatch } from "redux-react-hook";
// history
import { useHistory } from "react-router-dom";

function Agree() {
  // fire + history
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      agree text here
      <br />
      <button
        onClick={() => {
          // fire agree
          dispatch({
            type: "ON_AGREE",
            history: history,
            agree: true,
          });
        }}
      >
        Next
      </button>
    </>
  );
}

export default Agree;
