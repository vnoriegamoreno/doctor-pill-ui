import { useState } from "react";

export const ActionBar = ({ id, actionHandler }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => setToggle(!toggle);
  const handleAction = (e) => {
    actionHandler({
      id: id,
      option: e.target.getAttribute("data-testid"),
    });
  };
  return (
    <div className="action-bar-wrapper" onClick={toggleHandler}>
      <div className="action-bar">
        <div className="icon-menu">
          <span>...</span>
        </div>
      </div>
      <ul className={`menu ${toggle ? "" : "inactive"}`} onClick={handleAction}>
        <li data-testid="edit">Edit</li>
        <li data-testid="remove">Remove</li>
        <li data-testid="completed">Set completed</li>
        <li data-testid="pending">Set pending</li>
      </ul>
    </div>
  );
};
