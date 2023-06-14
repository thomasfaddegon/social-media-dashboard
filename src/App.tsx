import "./App.css";
import FollowerWidget from "./components/FollowerWidget.tsx";
import MetricWidget from "./components/MetricWidget.tsx";
import { followerData, metricData } from "./sampleData.tsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`main flex items-center ${
        darkMode ? "bg-background-dark" : "bg-background"
      }`}
    >
      {/* responsive page stylings are here */}
      <div className="column flex flex-col p-5 max-w-sm sm:max-w-xl  lg:max-w-6xl mx-auto pb-20">
        <div className="flex w-full lg:justify-between mb-12 flex-col lg:flex-row px-3 sm:px-0">
          <div className="mb-6 lg:mb-0 text-start">
            <h1
              className={` mb-1 text-2xl sm:text-4xl ${
                darkMode ? "text-mainText-dark" : "text-mainText-light"
              }`}
            >
              Social Media Dashboard
            </h1>
            <h3
              className={`${
                darkMode ? "text-grey-dark" : "text-grey-light"
              } text-start`}
            >
              Total Followers: 23,004
            </h3>
          </div>
          <div
            className={`mb-6 border-t-2 ${
              darkMode ? "border-[#333A55]" : "border-[#848BAB]"
            }`}
          ></div>
          <div className="flex items-center lg:mr-4">
            <h3
              className={`${
                darkMode ? "text-grey-dark" : "text-grey-light"
              } text-center justify-center mr-4`}
            >
              Dark Mode
            </h3>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              className={`${darkMode ? "bg-green" : "bg-[#AEB3CB]"}
relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              {/* This is the circle */}
              <span
                aria-hidden="true"
                className={`${
                  darkMode
                    ? "translate-x-0 bg-[#333A55] "
                    : "translate-x-7 bg-[#F1F3FA]"
                }
pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out mt-[2px] ml-[3.5px]`}
              />
            </Switch>
          </div>
        </div>

        {/* follower widgets */}
        <div className="flex flex-wrap flex-row gap-6 mb-12 justify-center lg:justify-start">
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
                  darkMode={darkMode}
                />
              );
            })}
        </div>
        <div>
          <h2
            className={`px-3 sm:px-0 text-xl sm:text-3xl ${
              darkMode ? "text-mainText-dark" : "text-mainText-light"
            } text-left mb-8`}
          >
            Overview - Today
          </h2>
        </div>
        <div className="flex flex-wrap flex-row gap-6 ">
          {metricData &&
            metricData.map((item) => {
              return (
                <MetricWidget
                  platform={item.platform}
                  metric={item.metric}
                  icon={item.icon}
                  value={item.value}
                  change={item.change}
                  darkMode={darkMode}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
