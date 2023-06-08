import React from "react";
import arrowDown from "../../public/images/icon-down.svg";
import arrowUp from "../../public/images/icon-up.svg";

interface FollowerWidgetProps {
  platform: string;
  icon: string;
  handle: string;
  value: number;
  metric: string;
  change: number;
  darkMode: boolean;
}

const FollowerWidget: React.FC<FollowerWidgetProps> = ({
  platform,
  icon,
  handle,
  value,
  metric,
  change,
  darkMode,
}) => {
  // if Number is great than 10,000, convert to string with k (10,000 = 10k)
  const valueString = value > 10000 ? `${value / 1000}k` : value;

  const arrow = change > 0 ? arrowUp : arrowDown;

  // remove negative sign
  const changeAbsolute = Math.abs(change);

  // border colors
  let borderColor;
  switch (platform) {
    case "facebook":
      borderColor = "#178FF5";
      break;
    case "twitter":
      borderColor = "#1DA1F2";
      break;
    case "instagram":
      borderColor = "#EE877E";
      break;
    case "youtube":
      borderColor = "#C4032B";
      break;
    default:
      borderColor = "black";
      break;
  }

  // metric name spacing
  const customStyles = {
    letterSpacing: ".4em",
  };

  return (
    <div
      className={`${
        darkMode ? "bg-widgetBackground-dark" : "bg-widgetBackground-light"
      } rounded p-4 border-t-4 border-${borderColor} w-[16rem] h-[14rem] flex flex-col justify-center items-center gap-2`}
      style={{
        borderTopWidth: "0.25rem",
        borderTopColor: borderColor,
      }}
    >
      {/* Tag and platform */}
      <div className="flex items-center">
        <div className="mr-2">
          <img src={icon} alt="Icon" className="w-6 h-6" />
        </div>
        <h4 className={`${darkMode ? "text-grey-dark" : "text-grey-light"}`}>
          {handle}
        </h4>
      </div>

      {/* Number and metric */}
      <div className="flex flex-col items-center mb-4">
        <div
          className={`${
            darkMode ? "text-mainText-dark" : "text-mainText-light"
          } text-[56px] font-bold`}
        >
          {valueString}
        </div>
        <div
          className={`${
            darkMode ? "text-grey-dark" : "text-grey-light"
          } text-xs mt-[-10px]`}
          style={customStyles}
        >
          {metric.toUpperCase()}
        </div>
      </div>

      {/* Change */}
      <div className={`flex flex-row`}>
        <img
          src={arrow}
          className="h-auto w-auto object-contain mr-1"
          alt="arrow up"
        ></img>
        <div
          className={`${
            change > 0 ? "text-green" : "text-red"
          } font-bold text-sm`}
        >
          {changeAbsolute} Today
        </div>
      </div>
    </div>
  );
};

export default FollowerWidget;
