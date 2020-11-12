import React, { useMemo } from "react";
import Container from "./Container/Container";
import createMyStore from "./store";
import { StoreContext } from "redux-react-hook";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // store
  const store = useMemo(() => {
    return createMyStore();
  }, []);

  return (
    <>
      <StoreContext.Provider value={store}>
        <Router>
          <Container />
        </Router>
      </StoreContext.Provider>
    </>
  );
}

export default App;
