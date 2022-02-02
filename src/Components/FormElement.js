import "./FormElement.css";
import { useState } from "react";

const FormElement = ({ setToDoItems, toDoItems }) => {
  const [newListItem, setNewListItem] = useState("");
  const handleChange = (event) => {
    setNewListItem(event.target.value);
  };

  return (
    <div className="Form-box">
      <div className="Form-row">
        <input
          type="text"
          name="to-do-element"
          placeholder="Lisää uusi tehtävä"
          value={newListItem}
          onChange={(event) => handleChange(event)}
        />
        <button
          onClick={() => {
            const hasDuplicate = toDoItems.some(
              (item) => item.value === newListItem
            );
            if (newListItem.length > 0 && !hasDuplicate) {
              setToDoItems((prev) => [
                ...prev,
                { value: newListItem, checked: false },
              ]);
              setNewListItem("");
            }
          }}
          className="Form-button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FormElement;
