import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Dashboard from "./components/dashboard.js";

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path={"/"} component={Dashboard} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
    </div>
  );
}

export default App;
