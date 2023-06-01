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
  // If Number is great than 10,000, convert to string with k (10,000 = 10k)

  return (
    <div className="bg-[#252b42] rounded p-4 border-t-4 border-red-500 w-64 h-64 flex flex-col justify-center items-center gap-4">
      {/* Tag and platform */}
      <div className="flex items-center">
        <div className="mr-2">
          <img src={icon} alt="Icon" className="w-6 h-6" />
        </div>
        <div className="text-white text-lg">{handle}</div>
      </div>

      {/* Number and metric */}
      <div className="flex flex-col items-center mb-4">
        <div className="text-white text-[56px] font-bold">{value}</div>
        <div className="text-white">{metric.toUpperCase()}</div>
      </div>

      {/* Increase/decrease */}
      {change > 0 ? (
        <div className="flex flex-row text-[#1eb589]">
          <img
            src={arrowUp}
            className="h-auto w-auto object-contain mr-1"
            alt="arrow up"
          ></img>
          <div className="">{change} Today</div>
        </div>
      ) : (
        <div className="flex flex-row text-[#dc414c] text-log">
          <img
            src={arrowDown}
            className="h-auto w-auto object-contain mr-1"
            alt="arrow down"
          ></img>
          <div className="">{change} Today</div>
        </div>
      )}
    </div>
  );
};

export default FollowerWidget;
