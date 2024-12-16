import React from "react";
import { Button, TextField } from "@mui/material";

const InventoryManager = () => {
  const handlePriceUpdate = () => {
    alert("Price updated!");
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <TextField label="Product Name" variant="outlined" />
      <TextField label="New Price" variant="outlined" style={{ marginLeft: "10px" }} />
      <Button variant="contained" color="primary" onClick={handlePriceUpdate} style={{ marginLeft: "10px" }}>
        Update Price
      </Button>
    </div>
  );
};

export default InventoryManager;
