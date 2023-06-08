import React from "react";
import arrowDown from "../../public/images/icon-down.svg";
import arrowUp from "../../public/images/icon-up.svg";

interface MetricWidgetProps {
  platform: string;
  metric: string;
  icon: string;
  value: number;
  change: number;
  darkMode: boolean;
}

const MetricWidget: React.FC<MetricWidgetProps> = ({
  platform,
  icon,
  value,
  metric,
  change,
  darkMode,
}) => {
  // If Number is great than 10,000, convert to string with k (10,000 = 10k)
  const valueString = value > 10000 ? `${value / 1000}k` : value;

  const changeColor = change > 0 ? "green" : "red";
  const arrow = change > 0 ? arrowUp : arrowDown;

  // remove negative sign
  const changeAbsolute = Math.abs(change);

  return (
    <div
      className={`${
        darkMode ? "bg-widgetBackground-dark" : "bg-widgetBackground-light"
      } rounded p-8 w-64 h-36 flex flex-col justify-center items-center gap-8 font-bold`}
    >
      <div className="flex w-full justify-between">
        <h4
          className={`${
            darkMode ? "text-grey-dark" : "text-grey-light"
          } flex items-center`}
        >
          {metric}
        </h4>
        <div>
          <img src={icon} alt={`${platform} icon`} className="w-6 h-6" />
        </div>
      </div>

      <div className="flex w-full justify-between items-center">
        <div
          className={`${
            darkMode ? "text-mainText-dark" : "text-mainText-light"
          } text-3xl`}
        >
          {valueString}
        </div>
        <div className="flex flex-row self-end">
          <div className="flex items-center">
            <img
              src={arrow}
              className="h-1 w-auto object-contain mr-1"
              alt="arrow"
            />
          </div>

          <div className={`text-${changeColor} text-sm`}>
            {changeAbsolute} %
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricWidget;
