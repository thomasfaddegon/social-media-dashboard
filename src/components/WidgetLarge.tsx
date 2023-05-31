import React from "react";

interface widgetLargeProps {
  icon?: string;
  handle?: string;
  value?: number;
  metric?: string;
  change?: number;
}

const WidgetLarge: React.FC<widgetLargeProps> = ({ icon }) => {
  // logic for increase or descrease

  return (
    // JSX markup goes here
    <div className="widget-large bg-blue-500 flex flex-column border border-white">
      {/* tag and platform */}
      <div className="platform-icon">
        <img src={icon} alt="" />
      </div>
      <div className="widget and tag">Tag and platform</div>

      {/* number and metric */}
      <div className="widget-large-top flex flex-column">
        <div>Metric</div>
        <div>FOLLOWERS</div>
      </div>

      {/* tag and platform */}
      <div className="widget and tag">Increase/decrease</div>
    </div>
  );
};

export default WidgetLarge;
