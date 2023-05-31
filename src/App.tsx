import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WidgetLarge from "./components/WidgetLarge.tsx";
import facebookIcon from "../public/images/icon-facebook.svg";

const App: React.FC = () => {
  return (
    <>
      <WidgetLarge icon={facebookIcon} />
    </>
  );
};

export default App;
