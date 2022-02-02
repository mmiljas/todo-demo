import "./ResetButton.css";

const ResetButton = ({ setToDoItems }) => {
  return (
    <button className="Reset-button" onClick={() => setToDoItems([])}>
      Poista kaikki
    </button>
  );
};

export default ResetButton;
