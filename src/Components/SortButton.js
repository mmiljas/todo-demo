import "./SortButton.css";

const SortButton = ({ setToDoItems }) => {
  return (
    <button
      className="Sort-button"
      onClick={() =>
        setToDoItems((prev) =>
          [...prev].sort((a, b) => (a.value < b.value ? -1 : 1))
        )
      }
    >
      Lajittele A-Ö
    </button>
  );
};

export default SortButton;
