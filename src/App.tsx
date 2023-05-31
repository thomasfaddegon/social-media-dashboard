import "./App.css";
import WidgetLarge from "./components/FollowerWidget.tsx";
import { followerData, metricData } from "./sampleData.tsx";

const App: React.FC = () => {
  return (
    <div className="flex flex-row gap-6 content-center">
      {followerData &&
        followerData.map((metric) => {
          return (
            <WidgetLarge
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
  );
};

export default App;
