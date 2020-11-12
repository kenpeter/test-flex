import React from "react";
import { Route, Switch } from "react-router-dom";
import Agree from "../Agree/Agree";
import Detail from "../Detail/Detail";

export default function Container() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Agree />} />
        <Route exact path="/detail" render={() => <Detail />} />
      </Switch>
    </>
  );
}
