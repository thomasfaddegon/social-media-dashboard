import "./App.css";
import FollowerWidget from "./components/FollowerWidget.tsx";
import MetricWidget from "./components/MetricWidget.tsx";
import { followerData, metricData } from "./sampleData.tsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Perform additional actions or update UI based on the toggle state
  };

  return (
    <div
      className={`main flex items-center ${
        darkMode ? "bg-background-dark" : "bg-background"
      }`}
    >
      <div className="column">
        <div className="flex w-full justify-between items-center">
          <div className="mb-12">
            <h1 className="text-start">Social Media Dashboard</h1>
            <h3 className="text-start">Total Followers: 23,004</h3>
          </div>
          <div>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${darkMode ? "bg-green" : "bg-[#AEB3CB]"}
relative inline-flex h-[38px] w-[75px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              {/* This is the circle */}
              <span
                aria-hidden="true"
                className={`${
                  darkMode
                    ? "translate-x-0 bg-[#333A55] "
                    : "translate-x-8 bg-[#F1F3FA]"
                }
pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out mt-[3px] ml-[5px]`}
              />
            </Switch>
          </div>
        </div>
        <div className="flex flex-wrap flex-row gap-6 mb-12">
          {followerData &&
            followerData.map((metric) => {
              return (
                <FollowerWidget
                  key={metric.platform}
                  platform={metric.platform}
                  icon={metric.icon}
                  handle={metric.handle}
                  value={metric.value}
                  metric={metric.metric}
                  change={metric.change}
                />
              );
            })}
        </div>
        <div className="flex flex-wrap flex-row gap-6">
          {metricData &&
            metricData.map((item) => {
              return (
                <MetricWidget
                  platform={item.platform}
                  metric={item.metric}
                  icon={item.icon}
                  value={item.value}
                  change={item.change}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
