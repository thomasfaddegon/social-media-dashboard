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
}

const FollowerWidget: React.FC<FollowerWidgetProps> = ({
  platform,
  icon,
  handle,
  value,
  metric,
  change,
}) => {
  // if Number is great than 10,000, convert to string with k (10,000 = 10k)
  const valueString = value > 10000 ? `${value / 1000}k` : value;

  // change color and arrow based on positive or negative change
  const changeColor = change > 0 ? "text-green-500" : "text-red-500";
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

  return (
    <div
      className={`bg-[#252b42] rounded p-4 border-t-4 border-${borderColor} w-64 h-64 flex flex-col justify-center items-center gap-4`}
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
        <div className="text-white text-lg">{handle}</div>
      </div>

      {/* Number and metric */}
      <div className="flex flex-col items-center mb-4">
        <div className="text-white text-[56px] font-bold">{valueString}</div>
        <div className="text-white">{metric.toUpperCase()}</div>
      </div>

      {/* Change */}
      <div className={`flex flex-row ${changeColor}`}>
        <img
          src={arrow}
          className="h-auto w-auto object-contain mr-1"
          alt="arrow up"
        ></img>
        <div className="font-bold">{changeAbsolute} Today</div>
      </div>
    </div>
  );
};

export default FollowerWidget;
