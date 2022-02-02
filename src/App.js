import "./App.css";
import ListElement from "./Components/ListElement";
import FormElement from "./Components/FormElement";
import { useState } from "react";
import SettingElement from "./Components/SettingElement";

const App = () => {
  const [toDoItems, setToDoItems] = useState([]);

  return (
    <div className="App">
      <h1>Todo-lista</h1>
      <FormElement setToDoItems={setToDoItems} toDoItems={toDoItems} />
      <ListElement setToDoItems={setToDoItems} toDoItems={toDoItems} />
      <SettingElement setToDoItems={setToDoItems} />
    </div>
  );
};

export default App;
