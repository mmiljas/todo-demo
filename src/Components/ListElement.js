import React from "react";
import "./ListElement.css";

const ListElement = ({ toDoItems, setToDoItems }) => {
  return (
    <>
      {toDoItems.map((toDoItem, index) => (
        <div className="Content-box" key={toDoItem.value}>
          <button
            className={`Content-button ${toDoItem.checked ? "Checked" : ""}`}
            onClick={() => {
              const newToDoItems = [...toDoItems];
              newToDoItems[index].checked = !newToDoItems[index].checked;
              setToDoItems(newToDoItems);
            }}
          >
            {toDoItem.value}
          </button>
          <button
            className="Remove-button"
            onClick={() => {
              const newToDoItems = toDoItems.filter(
                (item) => item.value !== toDoItem.value
              );
              setToDoItems(newToDoItems);
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default ListElement;
