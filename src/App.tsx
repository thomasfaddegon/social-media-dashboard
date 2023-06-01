import "./App.css";
import FollowerWidget from "./components/FollowerWidget.tsx";
import MetricWidget from "./components/MetricWidget.tsx";
import { followerData, metricData } from "./sampleData.tsx";

const App: React.FC = () => {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-start">Social Media Dashboard</h1>
        <h3 className="text-start">Total Followers: 23,004</h3>
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
    </>
  );
};

export default App;
