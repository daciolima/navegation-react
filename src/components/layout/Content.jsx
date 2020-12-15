import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Param from "../../pages/Param";
import NaoEncontrado from "../../pages/NaoEncontrado";

import "./Content.css";

export default function Content() {
  return (
    <main className="Content">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="404">
          <NaoEncontrado />
        </Route>
      </Switch>
    </main>
  );
}
