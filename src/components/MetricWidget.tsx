import React from "react";
import arrowDown from "../../public/images/icon-down.svg";
import arrowUp from "../../public/images/icon-up.svg";

interface MetricWidgetProps {
  platform: string;
  metric: string;
  icon: string;
  value: number;
  change: number;
}

const MetricWidget: React.FC<MetricWidgetProps> = ({
  platform,
  icon,
  value,
  metric,
  change,
}) => {
  const changeColor = change > 0 ? "text-green-500" : "text-red-500";
  const arrow = change > 0 ? arrowUp : arrowDown;

  return (
    <div className="bg-[#252b42] rounded p-8 w-64 h-40 flex flex-col justify-center items-center gap-10 font-bold">
      <div className="flex w-full justify-between">
        <h3>{metric}</h3>
        <div>
          <img src={icon} alt="Icon" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="text-3xl text-white">{value}</div>
        <div className="c-left">{change}%</div>
      </div>
    </div>
  );
};

export default MetricWidget;
