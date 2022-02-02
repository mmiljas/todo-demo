import ResetButton from "./ResetButton";
import "./SettingElement.css";
import SortButton from "./SortButton";

const SettingElement = ({ setToDoItems }) => {
  return (
    <div className="Setting-box">
      <SortButton setToDoItems={setToDoItems}/>
      <ResetButton setToDoItems={setToDoItems}/>
    </div>
  );
};

export default SettingElement;
