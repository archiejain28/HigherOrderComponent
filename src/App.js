import React from "react";
import "./App.css";
import List from "./component/List/List.js";
let list = [
  "Apples",
  "Pears",
  "Bananas",
  "Mangoes",
  "Kiwi",
  "Orange",
  "Avacado",
];
function App() {
  return (
    <div className="App">
      <List data={list} />
    </div>
  );
}

export default App;
