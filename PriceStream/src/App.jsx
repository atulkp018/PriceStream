import React from "react";
import InventoryManager from "./components/InventoryManager";
import DemandVisualization from "./components/DemandVisualization";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div>
      <h1>PriceStream</h1>
      <InventoryManager />
      <DemandVisualization />
      <Notifications />
    </div>
  );
}

export default App;
