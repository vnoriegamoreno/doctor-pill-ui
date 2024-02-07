import { ActionBar } from "./action-bar/ActionBar";

export const Pill = ({ id, medicine, short, alarm, days, status }) => {
  const truncate = (string, maxLength) => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    }
    return string;
  };
  const transformDays = (days) => {
    if (!days.length) {
      return "";
    } else if (days.length === 7) {
      return "Every week";
    } else {
      return truncate(days.join(", "), 20);
    }
  };
  return (
    <div className="pill">
      <div className="generic-pill">
        <div className="top" />
        <div className="bottom" />
      </div>
      <div className="description">
        <h2>{medicine}</h2>
        <p>{`${short}`}</p>
        <p>{`${transformDays(days)}`}</p>
        <span className="status">{status}</span>
      </div>
      <div className="option">
        <ActionBar />
      </div>
    </div>
  );
};
