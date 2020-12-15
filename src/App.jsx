import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Content from "./components/layout/Content";
import Menu from "./components/layout/Menu";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}
