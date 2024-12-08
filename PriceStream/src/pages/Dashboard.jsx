import React from "react";
import InventoryTable from "../components/ProductInventory/InventoryTable";
import DemandChart from "../components/Charts/DemandChart";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <InventoryTable />
      <DemandChart />
    </div>
  );
}

export default Dashboard;
